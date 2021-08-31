/* Planning Stages: 
Everytime user runs the program it outputs a random message.
Have three seaparate parts of the message. 
Brainstorm themes~ You are pretty. Pronoun verb adjective. My Robot Friend makes statements.
Advice (Order giver). Imperatives. Eat shrimp quietly. Play games abnoxiously. Find rocks cheerfully. 
Sing words angrily. Rake leaves sneakily. 
Action verb, noun, adverb.  
Tell me what to do. I am bored. Dares. "I dare you to..."

Store Verbs in a verbarray. Store Nouns in a nounarray. Store adverbs in an adverbarray. 
Set Verbarray = [] ...
make a function to add a word parameter to push into the verbarray.
Use Math.floorMath.random*length of the array pick a random index of the verbarray. set to variable randomverb
Use Math.floorMath.random*length of the array pick a random index of the nounarray. set to variable randomnoun
Use Math.floorMath.random*length of the array pick a random index of the adverbarray. set to variable randomadverb
Console.log(`I dare you to ${randomverb} ${randomnoun} ${randomadverb}!`)
*/

// Set up message component containers.
const verbArray = [];
const nounArray = [];
const adverbArray = [];

// Set up function to add words to the proper array bank. Note: The nouns must be plural. 
const addToWordBank = (word,array) => {
    array.push(word);
};

const randomDareGenerator = () => {
    const randomVerbIndex = Math.floor(Math.random()*verbArray.length);
    const randomNounIndex = Math.floor(Math.random()*nounArray.length);
    const randomAdverbIndex = Math.floor(Math.random()*adverbArray.length);

    const randomVerb = verbArray[randomVerbIndex];
    const randomNoun = nounArray[randomNounIndex];
    const randomAdverb = adverbArray[randomAdverbIndex];

    console.log(`I dare you to ${randomVerb} ${randomNoun} ${randomAdverb}!`);
};

//Add Words to Banks
addToWordBank('eat',verbArray)
addToWordBank('play',verbArray)
addToWordBank('find',verbArray)
addToWordBank('sing',verbArray)
addToWordBank('rake',verbArray)
addToWordBank('shrimp',nounArray)
addToWordBank('games',nounArray)
addToWordBank('rocks',nounArray)
addToWordBank('words',nounArray)
addToWordBank('leaves',nounArray)
addToWordBank('quietly',adverbArray)
addToWordBank('obnoxiously',adverbArray)
addToWordBank('cheerfully',adverbArray)
addToWordBank('angrily',adverbArray)
addToWordBank('sneakily',adverbArray)

//Run the Program
randomDareGenerator();