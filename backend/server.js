import { connectDB, disconnectDB } from "./src/database/database.js";
import { APP_URL, PORT } from "./src/config/env.js";
import app from "./app.js";

const webPort = process.env.PORT || PORT || 5001;

app.listen(webPort, async () => {
    console.log(`Server listening on port ${webPort}`);

    try {
        await connectDB();
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
});

process.on("unhandledRejection", async (error) => {
    console.error(`Unhandled promise rejection: ${error}`);
    app.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

process.on("SIGTERM", async (error) => {
    console.error(`SIGTERM received: ${error}`);
    app.close(async () => {
        await disconnectDB();
        console.log("Server closed, database disconnected.");
        process.exit(0);
    });
})

process.on("SIGINT", async (error) => {
    console.error(`SIGINT received: ${error}`);
    app.close(async () => {
        await disconnectDB();
        console.log("Server closed, database disconnected.");
        process.exit(0);
    });
});

process.on("uncaughtException", async (error) => {
    console.error(`Uncaught exception: ${error}`);
    app.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

process.on("exit", async (code) => {
    console.log(`Process exiting with code: ${code}`);
    await disconnectDB();
});