const topics = {
    "animal": ["Alligator", "Bear", "Camel", "Cat", "Cheetah", "Chicken", "Chimpanzee", "Cow", "Crocodile", "Deer", "Dog", "Dolphin", "Duck", "Eagle", "Elephant", "Fox", "Frog", "Giraffe", "Goat", "Hamster", "Hippopotamus", "Horse", "Kangaroo", "Lion", "Monkey", "Owl", "Panda", "Pig", "Rabbit", "Rat", "Scorpion", "Seal", "Shark", "Sheep", "Snake", "Squirrel", "Tiger", "Turtle", "Wolf", "Zebra"],
    "place": ["Airport", "Aquarium", "Bakery", "Bank", "Bar", "Bookstore", "Bus Station", "Cafe", "Church", "Court", "Gym", "Hospital", "Hotel", "Library", "Mall", "Museum", "Pharmacy", "Restaurant", "School", "Supermarket", "Zoo"]
};

// get entire list under topic
const getAllWords = topic => {
    return topics[topic];
}

// get a random word
const getRandomWord = topic => {
    const words = topics[topic];
    const rand = Math.floor(Math.random() * (words.length));
    return words[rand];
}

// pick a spy
const getRandomSpy = users => {
    const rand = Math.floor(Math.random() * (users.length));
    return users[rand];
}

module.exports = {
    getAllWords,
    getRandomWord,
    getRandomSpy
}