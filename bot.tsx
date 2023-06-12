import { Client } from "discord.js";

const client = new Client({ intents: [] }); // Berikan argumen 'options' yang diperlukan
const token: any = client.token;

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.login(token);
