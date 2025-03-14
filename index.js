import { Client, GatewayIntentBits, ActivityType } from "discord.js";
import dotenv from "dotenv";
import { data } from "./data/data.js";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ],
});

client.login(process.env.TOKEN);

function findPokemon(name) {
    const searchedName = name.toLowerCase();
    if (searchedName in data.pokedex) {
        return data.pokedex[searchedName];
    } else {
        return null;
    }
}

class FusedPokemonData {
    name = "";
    types = [];
    abilities = [];
    baseStats = [];

    repr() {
        console.log(this.name);
        for (const t of this.types) {
            console.log(t);
        }
        for (const a of this.abilities) {
            console.log(a);
        }
        for (const s of this.baseStats) {
            console.log(s);
        }
    }

    static splitInHalf(str) {
        const middleDown = Math.floor(str.length / 2);
        const middleUp = Math.ceil(str.length / 2);
        const firstHalf = str.slice(0, middleDown);
        const secondHalf = str.slice(middleUp);
        return [firstHalf, secondHalf];
    }

    static fuseEm(head, body) {
        // Fuse stats
        const d = new FusedPokemonData();
        for (let i = 0; i < 6; i++) {
            if ([0, 3, 4].includes(i)) {
                d.baseStats.push(Math.floor((2 * head.baseStats[i] + body.baseStats[i]) / 3));
            } else {
                d.baseStats.push(Math.floor((2 * body.baseStats[i] + head.baseStats[i]) / 3));
            }
        }

        // Fuse types
        const typePool = [...head.types, ...body.types, body.types[0], body.types[0]];
        d.types.push(...[typePool[0], typePool[3]]);

        // Fuse abilities
        for (const p of [head, body]) {
            for (const a in p.abilities) {
                if (p.abilities[a] && !d.abilities.includes(p.abilities[a])) {
                    d.abilities.push(p.abilities[a]);
                }
            }
        }

        // Fuse names
        d.name += FusedPokemonData.splitInHalf(head.name)[0] + FusedPokemonData.splitInHalf(body.name)[1];

        return d;
    }
}

function fusionMessage(head, body) {
    const fusion = FusedPokemonData.fuseEm(head, body);

    // Title
    let message = `# ${fusion.name}\n`;

    // Types
    message += `## Typing: \n`;
    for (const type of fusion.types) {
        message += `- ${type}\n`;
    }

    // Abilites
    message += `## Abilities: \n`;
    for (const ability of fusion.abilities) {
        message += `- ${ability}\n`;
    }

    // Stats
    message += `## Base Stats: \n`;
    for (const i in fusion.baseStats) {
        message += `- **${data.stats[i]}**: ${fusion.baseStats[i]}\n`;
    }
    return message;
}

client.on("messageCreate", async (message) => {
    if (!message.author.bot) {
        const tokens = message.content.split(" ");

        if (tokens.length == 3) {
            if (tokens[0].toUpperCase() == "FUSE") {
                const poke1 = findPokemon(tokens[1]),
                    poke2 = findPokemon(tokens[2]);
                if (poke1 && poke2) {
                    message.channel.send(`${data.sprites[tokens[1].toLowerCase()]}`);
                    message.channel.send(`${data.sprites[tokens[2].toLowerCase()]}`);
                    message.channel.send(`${message.author.toString()}\n${fusionMessage(poke1, poke2)}`);
                } else {
                    message.channel.send("Some pokémon in your message doesn't exist or is incorrectly formatted!");
                }
            }
        }
    }
});
