const { REST, Routes } = require("discord.js");
// Environment vars - BOT_TOKEN, CLIENT_ID, GUILD_ID
require("dotenv").config();
const fs = require("node:fs");

const commands = [];
// Grabs all the command files from the commands directory:
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

// Grabs the SlashCommandBuilder#toJSON() ouput of each command's data for deployment:
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data);
}

// Construct and prepare and instance of the REST module:
const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

// Deploying commands!:
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    // The put method is used to fully refresh all commmands in the guild with the current set;
    const data = await rest.post(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands!`
    );
  } catch (error) {
    // Catch and log any errors while executing commands;
    console.error(error);
  }
})();
