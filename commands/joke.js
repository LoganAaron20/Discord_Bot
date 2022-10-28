const { SlashCommandBuilder } = require("discord.js");

const jokesArr = [
  "I just got my doctor's test results and I'm really upset about it. Turns out, I'm not gonna be a doctor.",
  "My grief counselor died. He was so good, I don’t even care.",
  "Today, I asked my phone “Siri, why am I still single?” and it activated the front camera.",
  "A man wakes from a coma. His wife changes out of her black clothes and, irritated, remarks, “I really cannot depend on you in anything, can I!”",
  "As I get older, I remember all the people I lost along the way. Maybe my budding career as a tour guide was not the right choice.",
  " I was digging in our garden and found a chest full of gold coins. I wanted to run straight home to tell my wife about it. Then I remembered why I was digging in our garden.",
  "The doctor gave me some cream for my skin rash. He said I was a sight for psoriasis.",
  "Don’t challenge Death to a pillow fight. Unless you’re prepared for the reaper cushions.",
  "I don’t have a carbon footprint. I just drive everywhere.",
  "Even people who are good for nothing have the capacity to bring a smile to your face, like when you push them down the stairs.",
  "My mom died when we couldn’t remember her blood type. As she died, she kept telling us to “be positive,” but it’s hard without her.",
  "What does my dad have in common with Nemo? They both can’t be found",
];

const getRandomJoke = (jokes) => {
  amountOfJokes = jokes.length - 1;
  let random_number = Math.floor(Math.random() * amountOfJokes);
  return jokes[random_number];
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Tells a random Joke!"),
  async execute(interaction) {
    await interaction.reply(getRandomJoke(jokesArr));
  },
};
