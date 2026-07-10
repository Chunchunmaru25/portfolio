import { connectDB, disconnectDB } from "./src/database/database.js";
import { APP_URL, PORT } from "./src/config/env.js";
import app from "./app.js";

const webPort = PORT || 5001;
try {
    if (!PORT) {
        console.error(`Port ${PORT} not found`);
    }
    app.listen(webPort, async () => {
        console.log(`Connected to port: ${webPort}`);
        await connectDB();
        console.log(`Connected to ${APP_URL}${webPort}`);
    })
} catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
}

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