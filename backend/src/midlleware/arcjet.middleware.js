import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { isSpoofedBot } from "@arcjet/inspect";
import { ARCJET_KEY } from "../config/env.js";
// create Arcjet instance ONCE
const aj = arcjet({
    key: ARCJET_KEY,
    rules: [
        shield({ mode: "LIVE" }),

        detectBot({
            mode: "LIVE",
            allow: [
                "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
                // "CATEGORY:LEGIT_BOT",
                // Uncomment to allow these other common bot categories
                // See the full list at https://arcjet.com/bot-list
                // "CATEGORY:MONITOR", // Uptime monitoring services
                // "CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
            ],
        }),

        tokenBucket({
            mode: "LIVE",
            // Tracked by IP address by default, but this can be customized
            // See https://docs.arcjet.com/fingerprints
            //characteristics: ["ip.src"],
            refillRate: 5, // Refill 5 tokens per interval
            interval: 20, // Refill every 60 seconds
            capacity: 20, // Bucket capacity of 10 tokens
        }),
    ],
});

// middleware function
const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 });
        // console.log("KEY: " + ARCJET_KEY);
        // console.log("Arcjet decision", decision);


        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ status: "error", message: "Too Many Request", data: decision.reason });
            }

            if (decision.reason.isBot()) {
                return res.status(403).json({ status: "error", message: "No Bots Allowed", data: decision.reason });
            }

            return res.status(403).json({ status: "error", message: "Forbidden", data: decision.reason });
        }

        // Requests from hosting IPs are likely from bots, so they can usually be
        // blocked. However, consider your use case - if this is an API endpoint
        // then hosting IPs might be legitimate.
        // https://docs.arcjet.com/blueprints/vpn-proxy-detection
        if (decision.ip.isHosting()) {
            return res.status(403).json({ status: "error", message: "Forbidden (hosting IP)", data: "Forbidden (hosting IP)" });
        }

        // Paid Arcjet accounts include additional verification checks using IP data.
        // Verification isn't always possible, so we recommend checking the decision
        // separately.
        // https://docs.arcjet.com/bot-protection/reference#bot-verification
        if (decision.results.some(isSpoofedBot)) {
            return res.status(403).json({ status: "error", message: "Forbidden (spoofed bot)", data: "Forbidden (spoofed bot)" });
        }
        next();

    } catch (error) {
        console.error("Arcjet error:", error);
        return res.status(500).json({ status: "error", message: "Security middleware failed", data: error });
    }
};

export { arcjetMiddleware };