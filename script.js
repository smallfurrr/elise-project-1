$(document).ready(() => {
$('.food-card').corner('dog');
});

//necessary global variables
let dishName = null;
let dishEthnicity = null;
let dishTemp = null;
let dishBase = null;
let dishServe = null;
let dishColor = null;
let dishType = null;

let questionOne = null;
let questionTwo = null;

let moveCounter = 0;;

const startingDishes = [
        {
            name: "Chicken Rice",
            ethnicity: "Chinese",
            temperature: "Warm",
            base: "Rice",
            servingDish: "Plate",
            color: "White",
            dishType: "Meal",
            image:"images/foodphotoscrop/chicken-rice.jpeg"
        },

        {
            name: "Laksa",
            ethnicity: "Chinese",
            temperature: "Warm",
            base: "Noodles",
            servingDish: "Bowl",
            color: "Red",
            dishType: "Meal",
            image:"images/foodphotoscrop/laksa.jpeg"
        },

        {
            name: "Hokkien Mee",
            ethnicity: "Chinese",
            temperature: "Warm",
            base: "Noodles",
            servingDish: "Plate",
            color: "Yellow",
            dishType: "Meal",
            image:"images/foodphotoscrop/hokkien-mee.jpeg"
        },

        {
            name: "Chilli Crab",
            ethnicity: "Chinese",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Plate",
            color: "Red",
            dishType: "Meal",
            image:"images/foodphotoscrop/chilli-crab.jpeg"
        },

        {
            name:"Nasi Lemak",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Rice",
            servingDish: "Plate",
            color: "White",
            dishType: "Meal",
            image:"images/foodphotoscrop/nasi-lemak.jpeg"
        },

        {
            name: "Mee Rebus",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Noodles",
            servingDish: "Bowl",
            color: "Brown",
            dishType: "Meal",
            image:"images/foodphotoscrop/mee-rebus.jpeg"
        },

        {
            name: "Beef Rendang",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Bowl",
            color: "Brown",
            dishType: "Meal",
            image:"images/foodphotoscrop/beef-rendang.jpeg"
        },

        {
            name: "Satay",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Others", //trigger serving dish special statement
            color: "Brown",
            dishType: "Meal",
            image:"images/foodphotoscrop/satay.jpeg"
        },

        {
            name: "Nasi Briyani",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Rice",
            servingDish: "Plate",
            color: "Yellow",
            dishType: "Meal",
            image:"images/foodphotoscrop/nasi-briyani.jpeg"
        },

        {
            name: "Roti Prata",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Plate",
            color: "Brown",
            dishType: "Meal",
            image:"images/foodphotoscrop/roti-prata.jpeg"
        },

        {
            name: "Fish Head Curry",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Bowl",
            color: "Red",
            dishType: "Meal",
            image:"images/foodphotoscrop/fish-head-curry.jpeg"
        },

        {
            name: "Tandoori Chicken",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Plate",
            color: "Red",
            dishType: "Meal",
            image:"images/foodphotoscrop/tandoori-chicken.jpeg"
        },

        {
            name: "Goreng Pisang",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Others", //trigger serving dish special statement
            color: "Brown",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/goreng-pisang.jpeg"
        },

        {
            name: "Chendol",
            ethnicity: "Others",
            temperature: "Cold",
            base: "Others", //trigger base special statement
            servingDish: "Bowl",
            color: "Green",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/chendol.jpeg"
        },

        {
            name: "Ice Kachang",
            ethnicity: "Others", //hmm hmm hmm
            temperature: "Cold",
            base: "Others", //trigger base special statement
            servingDish: "Bowl",
            color: "Red",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/ice-kachang.jpeg"
        },

        {
            name: "Pandan Cake",
            ethnicity: "Others",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Plate",
            color: "Green",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/pandan-cake.jpeg"
        },

        {
            name: "Curry Puff",
            ethnicity: "Others",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Others", //trigger serving dish special statement
            color: "Brown",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/curry-puff.jpeg"
        },

        {
            name: "Vadai",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Others", //trigger serving dish special statement
            color: "Brown",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/vadai.jpeg"
        }
];

//start of game - get random dish
function getRandomDish() {
    var randomIndex = Math.floor(Math.random() * 18); //is this correct if i have 18 objects (so index to 17)
    console.log(randomIndex);

    dishName = startingDishes[randomIndex].name;
    dishEthnicity = startingDishes[randomIndex].ethnicity;
    dishTemp = startingDishes[randomIndex].temperature;
    dishBase = startingDishes[randomIndex].base;
    dishServe = startingDishes[randomIndex].servingDish;
    dishColor = startingDishes[randomIndex].color;
    dishType = startingDishes[randomIndex].dishType;

    console.log(dishName);
    // console.log(dishEthnicity);
    // console.log(dishTemp);
    // console.log(dishBase);
    // console.log(dishServe);
    // console.log(dishColor);
    // console.log(dishType);
};
getRandomDish();

   // var selectHint = function {
        //create random index twice
        //get questions based
    // }

//questions must be placed after getRandomDish() or all answers will be undefined
let questions = [
    {
        question: "Which ethnic group is this dish most commonly associated with?",
        answer: `${dishEthnicity}`
    },

    {
        question: "Is this dish best eaten hot or cold?",
        answer: `${dishTemp}`
    },

    {
        question: "Is this dish noodle, rice, or meat-based? Could be none of the above!",
        answer: `${dishBase}`
    },

    {
        question: "What does this dish usually come served in? (Hint: Cutlery is not always involved!)",
        answer: `${dishServe}`
    },

    {
        question: "What is the primary color of this dish?",
        answer: `${dishColor}`
    },

    {
        question: "Is this dish usually eaten as a snack/dessert or a main meal? Although everything can be a snack if you just believe in yourself!",
        answer: `${dishType}`
    }
];

//create clone of questions array that can be edited without affecting original
let questionsClone = JSON.parse(JSON.stringify(questions));
// console.log(questionsClone);

//win checking function
function checkForWin() {

};

//creates 2 random questions
function generateHints() {
    //generate two random numbers to get an index from existing questionsClone objects
    let x = Math.floor(Math.random()* questionsClone.length);
    let y = Math.floor(Math.random()* questionsClone.length);

    while (x === y) {
        x = Math.floor(Math.random()* questionsClone.length);
    }

    // console.log(x);
    // console.log(y);

    //saving 2 question objects from questionsClone as the 2 current display questions
    questionOne = questionsClone[x];
    questionTwo = questionsClone[y];

    // console.log(questionOne);
    // console.log(questionTwo);
};
generateHints();

//action that happens when player enters "1" or "2" to select hint
function selectHint() {
    //keeping track of rounds. once 3 rounds, show submit and check for win
    moveCounter += 1;

    console.log(moveCounter);

    if (moveCounter === 3) {
        //clear #question-box and change inner html to you gotta choose woot
        //show select buttons
        //switch seetoh pic hahahaha
        //display countdown??

        $('.select-btn').show();
    }

    //place the 2 random question-answer objects in their own array
    //make sure that displayedQuestions empties each time selectHint() runs
    let displayedQuestions = [];
    displayedQuestions.push(questionOne);
    displayedQuestions.push(questionTwo);

    // console.log(displayedQuestions);

    //get what user actually typed in + clear input field
    const input = document.getElementById('input');
    let userInput = parseInt(input.value);
    // console.log(userInput);
    input.value = "";

    //index in displayedQuestions according to what user chose (0 or 1)
    let selectedIndex = userInput - 1;
    // console.log(selectedIndex);

    //targeting the hint box
    const hintBox = document.getElementById('hint-box');

    //formatting chosen hint and answer
    let chosenHint = document.createElement('p');
    chosenHint.innerHTML = `${displayedQuestions[selectedIndex].question}<br>${displayedQuestions[selectedIndex].answer}`

    //move selected hint to hint box (make sure not overwriting previous ones)
    hintBox.appendChild(chosenHint);

    //remove selected question from questionsClone
    if (userInput === 1) {
        // meaning that questionsClone[x] aka questionOne should be removed from questionsClone
        for (var i=0; i < questionsClone.length; i++) {
            if (questionOne === questionsClone[i]) {
                questionsClone.splice(i, 1);
            }
        }
   } else if (userInput === 2) {
    // meaning that questionsClone[y] aka questionTwo should be removed from questionsClone
        for (var i=0; i < questionsClone.length; i++) {
            if (questionTwo === questionsClone[i]) {
                questionsClone.splice(i, 1);
            }
        }
   }
    generateHints();

    //targeting the <p> element within question-box, to dynamically reflect new question choices
    const choiceDisplay = document.getElementById('question-choice-display');
    choiceDisplay.innerHTML = `What would you like to ask? <span class ="question"> 1. ${questionOne.question}</span> or <span class ="question">2. ${questionTwo.question}</span>`
}

//dynamically creates the game area based on the pre-calculated values above
function createHintArea() {
    var questionsOutput = document.getElementById('questions-output');

    var seetohImage = document.createElement('img');
    seetohImage.id = 'seetoh';
    seetohImage.src = 'images/seetoh/pic5.jpeg';

    var questionBox = document.createElement('div');
    questionBox.id = 'question-box';
    var hintsDisplay = document.createElement('p');
    hintsDisplay.id = ('question-choice-display');
    hintsDisplay.innerHTML = `What would you like to ask? <span class ="question"> 1. ${questionOne.question}</span> or <span class ="question">2. ${questionTwo.question}</span>`
    questionBox.appendChild(hintsDisplay);

    var input = document.createElement("input");
    input.type = "text";
    input.id = "input";

    input.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        selectHint();
        }
    });

    var hintBox = document.createElement('div');
    hintBox.id = 'hint-box';
    var chosenHints = document.createElement('p');
    chosenHints.innerText = 'These are your chosen hints!'
    hintBox.appendChild(chosenHints);

    questionsOutput.appendChild(seetohImage);
    questionsOutput.appendChild(questionBox);
    questionsOutput.appendChild(input);
    questionsOutput.appendChild(hintBox);
}

function createFoodCards() {
    for (var i = 0; i < startingDishes.length; i++) {
        var cardsOutput = document.getElementById('cards-output');

        var foodCard = document.createElement('div');
        foodCard.className = 'food-card';

        var foodImage = document.createElement('img');
        foodImage.src = startingDishes[i].image;

        var foodName = document.createElement("p");
        foodName.innerHTML = startingDishes[i].name;

        var selectButton = document.createElement('button');
        selectButton.className = 'select-btn';
        // selectButton.className = 'hide';
        selectButton.type = 'submit';
        selectButton.innerText = "Select";
        selectButton.id = i;
        selectButton.value = i;
        //selectButton.addEventListener('click', checkForWin);
        //also add event listener to each food pic to add toggle img feature

        foodCard.appendChild(foodImage);
        foodCard.appendChild(foodName);
        foodCard.appendChild(selectButton);
        cardsOutput.appendChild(foodCard);
    }
};
createHintArea();
createFoodCards();