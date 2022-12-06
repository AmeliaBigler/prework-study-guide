var topics = ['Languages','Programs','Concepts'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
       }
    }

function selectTopics() {
    if (randomTopic === 'Languages') {
    console.log("Let's study a coding language!");
    } else if (randomTopic === 'Programs') {
    console.log("Let's study a program!");
    } else if (randomTopic === 'Concepts') {
    console.log("Let's study programming concepts!");
    } else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics()

console.log('Which topic should we study first?');
selectTopics()
