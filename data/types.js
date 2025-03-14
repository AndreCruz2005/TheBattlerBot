export const types = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy"
]
export const defensiveTypeChart = {
    Normal: {
      Fighting: 2,
      Ghost: 0,
      
    },
    Fire: {
      Water: 2,
      Grass: 0.5,
      Ice: 0.5,
      Bug: 0.5,
      Rock: 2,
      Fire: 0.5,
      Ground: 2,
      Steel: 0.5,
      Fairy: 0.5,
      
    },
    Water: {
      Electric: 2,
      Grass: 2,
      Fire: 0.5,
      Water: 0.5,
      Ice: 0.5,
      Steel: 0.5,
      
    },
    Electric: {
      Ground: 2,
      Electric: 0.5,
      Flying: 0.5,
      Steel: 0.5,
      
    },
    Grass: {
      Fire: 2,
      Water: 0.5,
      Electric: 0.5,
      Grass: 0.5,
      Ice: 2,
      Poison: 2,
      Ground: 0.5,
      Flying: 2,
      Bug: 2,
      
    },
    Ice: {
      Fire: 2,
      Ice: 0.5,
      Fighting: 2,
      Rock: 2,
      Steel: 2,
      
    },
    Fighting: {
      Flying: 2,
      Psychic: 2,
      Rock: 0.5,
      Bug: 0.5,
      Dark: 0.5,
      Fairy: 2,
      
    },
    Poison: {
      Ground: 2,
      Psychic: 2,
      Grass: 0.5,
      Fighting: 0.5,
      Poison: 0.5,
      Bug: 0.5,
      Fairy: 0.5,
      
    },
    Ground: {
      Water: 2,
      Grass: 2,
      Electric: 0,
      Ice: 2,
      Rock: 0.5,
      Poison: 0.5,
      
    },
    Flying: {
      Electric: 2,
      Rock: 2,
      Ice: 2,
      Grass: 0.5,
      Fighting: 0.5,
      Bug: 0.5,
      Ground: 0,
      
    },
    Psychic: {
      Bug: 2,
      Ghost: 2,
      Dark: 2,
      Fighting: 0.5,
      Psychic: 0.5,
      
    },
    Bug: {
      Fire: 2,
      Flying: 2,
      Rock: 2,
      Grass: 0.5,
      Fighting: 0.5,
      Ground: 0.5,
      
    },
    Rock: {
      Water: 2,
      Grass: 2,
      Fighting: 2,
      Ground: 2,
      Steel: 2,
      Normal: 0.5,
      Fire: 0.5,
      Poison: 0.5,
      Flying: 0.5,
      
    },
    Ghost: {
      Ghost: 2,
      Dark: 2,
      Poison: 0.5,
      Bug: 0.5,
      Fighting: 0,
      Normal: 0,
      
    },
    Dragon: {
      Ice: 2,
      Dragon: 2,
      Fairy: 2,
      Fire: 0.5,
      Water: 0.5,
      Electric: 0.5,
      Grass: 0.5,
      
    },
    Dark: {
      Fighting: 2,
      Bug: 2,
      Fairy: 2,
      Psychic: 0,
      Ghost: 0.5,
      Dark: 0.5,
      
    },
    Steel: {
      Fire: 2,
      Fighting: 2,
      Ground: 2,
      Normal: 0.5,
      Grass: 0.5,
      Ice: 0.5,
      Flying: 0.5,
      Psychic: 0.5,
      Bug: 0.5,
      Rock: 0.5,
      Dragon: 0.5,
      Steel: 0.5,
      Fairy: 0.5,
      Poison: 0,
      
    },
    Fairy: {
      Poison: 2,
      Steel: 2,
      Fighting: 0.5,
      Bug: 0.5,
      Dark: 0.5,
      Dragon: 0,
      
    }
  };
 
export const pokemonTypeColors = {
Normal: "#8E8E6F",
Fire: "#CC6E28",
Water: "#5076B3",
Electric: "#D4B724",
Grass: "#629C3B",
Ice: "#7DB3AE",
Fighting: "#A62622",
Poison: "#8B338A",
Ground: "#BCA458",
Flying: "#8E76C2",
Psychic: "#D0426E",
Bug: "#8A9C15",
Rock: "#97892D",
Ghost: "#5D466F",
Dragon: "#5A2CB3",
Dark: "#5E4B3C",
Steel: "#9696A7",
Fairy: "#B87092",
};
