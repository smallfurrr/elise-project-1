$(document).ready(() => {
$("#ex1").modal('show');
$('.food-card').corner("notch 8px").parent().css('padding', '8px').corner("notch 8px");
$('.hint').corner();
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

let randomIndex = null;
let moveCounter = 0;
let winCounter = 0;

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
            name: "Roti Prata",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "None of the above",
            servingDish: "Plate",
            color: "Brown",
            dishType: "Meal",
            image:"images/foodphotoscrop/roti-prata.jpeg"
        },

        {
            name: "Pandan Cake",
            ethnicity: "None in particular",
            temperature: "Warm",
            base: "None of the above",
            servingDish: "Plate",
            color: "Green",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/pandan-cake.jpeg"
        },

        {
            name: "Curry Puff",
            ethnicity: "None in particular",
            temperature: "Warm",
            base: "None of the above",
            servingDish: "NOT a plate or bowl",
            color: "Brown",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/curry-puff.jpeg"
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
            name: "Chendol",
            ethnicity: "None in particular",
            temperature: "Cold",
            base: "None of the above",
            servingDish: "Bowl",
            color: "Green",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/chendol.jpeg"
        },

        {
            name: "Satay",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Meat",
            servingDish: "NOT a plate or bowl",
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
            name: "Ice Kachang",
            ethnicity: "None in particular",
            temperature: "Cold",
            base: "None of the above",
            servingDish: "Bowl",
            color: "Red",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/ice-kachang.jpeg"
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
            base: "None of the above",
            servingDish: "NOT a plate or bowl",
            color: "Brown",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/goreng-pisang.jpeg"
        },

        {
            name: "Vadai",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "None of the above",
            servingDish: "NOT a plate or bowl",
            color: "Brown",
            dishType: "Snack or Dessert",
            image:"images/foodphotoscrop/vadai.jpeg"
        }
];

//start of game - get random dish
function getRandomDish() {
    randomIndex = Math.floor(Math.random() * 18);

    dishName = startingDishes[randomIndex].name;
    dishEthnicity = startingDishes[randomIndex].ethnicity;
    dishTemp = startingDishes[randomIndex].temperature;
    dishBase = startingDishes[randomIndex].base;
    dishServe = startingDishes[randomIndex].servingDish;
    dishColor = startingDishes[randomIndex].color;
    dishType = startingDishes[randomIndex].dishType;

    console.log(dishName);
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
        question: "Is this dish best eaten warm or cold?",
        answer: `${dishTemp}`
    },

    {
        question: "Is this dish noodle, rice, or meat-based?",
        answer: `${dishBase}`
    },

    {
        question: "What does this dish USUALLY come served in?",
        answer: `${dishServe}`
    },

    {
        question: "What is the primary color of this dish?",
        answer: `${dishColor}`
    },

    {
        question: "Is this dish USUALLY eaten as a snack/dessert or a main meal?",
        answer: `${dishType}`
    }
];

//create clone of questions array that can be edited without affecting original
let questionsClone = JSON.parse(JSON.stringify(questions));

//win checking function
function checkForWin() {
    const winningTrack = new Audio('audio/winnerwinnerchickendinner.mp3');
    const losingTrack = new Audio('audio/sadness.mp3');

    const overlay = document.getElementById("overlay");

    if (this.id == randomIndex) {
        winCounter += 1;
        winningTrack.play();
        let winningText = document.createElement('span');
        //add winning streak count into inner html
        winningText.innerHTML = `YOU GUESSED RIGHT! The dish was ${dishName}.<br><button id="restart">Restart</button>`
        const restartButton = document.getElementById("restart");
        restartButton.addEventListener('click', restartGame);
        overlay.appendChild(winningText);
        overlay.style.display = "block";

        overlay.addEventListener("click", function(event) {
            while (overlay.firstChild) {
                overlay.removeChild(overlay.firstChild)
            }
            overlay.style.display = "none";
        });
    } else {
        //reset win counter
        //insert winning streak (before loss) into innerhtml
        losingTrack.play();
        const losingText = document.createElement('span');
        losingText.innerHTML = `YOU GUESSED WRONG.. The correct dish was ${dishName}.<br><button class="restart">Restart</button>`
        overlay.appendChild(losingText);
        overlay.style.display = "block"

        overlay.addEventListener("click", function(event) {
            while (overlay.firstChild) {
                overlay.removeChild(overlay.firstChild);
            }
            overlay.style.display = "none";
            // create potential to start a new game
        })
    }
};

//dynamically creates the game area based on the pre-calculated values above
function createHintArea() {
    const questionsOutput = document.getElementById('questions-output');

    let hintsDisplay = document.createElement('p');
    hintsDisplay.id = ('question-choice-display');
    hintsDisplay.innerHTML = `<span class ="question"> 1. ${questionOne.question}</span><br> OR <br><span class ="question">2. ${questionTwo.question}</span>`

    const input = document.createElement("input");
    input.type = "text";
    input.id = "input";
    input.placeholder = "Pick 1 or 2";

    input.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        selectHint();
        }
    });

    questionsOutput.appendChild(hintsDisplay);
    questionsOutput.appendChild(input);
}

function createFoodCards() {
    for (var i = 0; i < startingDishes.length; i++) {
        var cardsOutput = document.getElementById('cards-output');

        var foodCard = document.createElement('div');
        foodCard.className = 'food-card';

        var foodImage = document.createElement('img');
        foodImage.className = 'food-photo';
        foodImage.src = startingDishes[i].image;

        var foodName = document.createElement("p");
        foodName.innerHTML = startingDishes[i].name;

        var selectButton = document.createElement('button');
        selectButton.className = 'select-btn';
        selectButton.type = 'submit';
        selectButton.innerText = "Select";
        selectButton.id = i;
        selectButton.value = i;
        selectButton.addEventListener('click', checkForWin);

        foodCard.appendChild(foodImage);
        foodCard.appendChild(foodName);
        foodCard.appendChild(selectButton);
        cardsOutput.appendChild(foodCard);
    }
        $('.food-photo').on('click', () => {
        $(event.target).toggleClass('hide');
        })
};

//restart game function after min 1 round
function restartGame() {
    //clear all hints - remove last child from hint-box
    const hintBox1 = document.getElementById('hint-1');
    const hintBox2 = document.getElementById('hint-2');
    const hintBox3 = document.getElementById('hint-3');

    hintBox1.removeChild(hintBox1.lastChild);
    hintBox2.removeChild(hintBox2.lastChild);
    hintBox3.removeChild(hintBox3.lastChild);

    //get new dish
    getRandomDish();

    //generate hints
    const questionsOutput = document.getElementById('questions-output');
    questionsOutput.removeChild(questionsOutput.lastChild);
    createHintArea();
    createFoodCards();
}

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

    //place the 2 random question-answer objects in their own array displayedQuestions
    //ensure that displayedQuestions empties each time selectHint() runs
    let displayedQuestions = [];
    displayedQuestions.push(questionOne);
    displayedQuestions.push(questionTwo);

    //get what user actually typed in + clear input field
    const input = document.getElementById('input');
    let userInput = parseInt(input.value);
    input.value = "";

    //index in displayedQuestions according to what user chose (0 or 1)
    let selectedIndex = userInput - 1;

    //formatting chosen hint and answer
    let chosenHint = document.createElement('p');
    chosenHint.innerHTML = `<span class= "hint-display-question">${displayedQuestions[selectedIndex].question}</span><br><span class="hint-display-answer">${displayedQuestions[selectedIndex].answer}</span>`

    //targeting the hint boxes
    const hintBox1 = document.getElementById('hint-1');
    const hintBox2 = document.getElementById('hint-2');
    const hintBox3 = document.getElementById('hint-3');

    //move selected hint to relevant hint box based on move counter
    if (moveCounter === 1) {
        hintBox1.appendChild(chosenHint);
    } else if (moveCounter === 2) {
        hintBox2.appendChild(chosenHint);
    } else if (moveCounter === 3) {
        hintBox3.appendChild(chosenHint);
        const questionBox = document.getElementById('questions-output');

        while (questionBox.firstChild) {
                questionBox.removeChild(questionBox.firstChild)
        };

        const timeToChoose = document.createElement('p');
        timeToChoose.innerHTML = `<p class="choose">All hints received!<br>Pick the dish you think is right using the select buttons.</span>`
        questionBox.appendChild(timeToChoose);

        //display countdown??

        //show select buttons
        $('.select-btn').show();
    };

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
    choiceDisplay.innerHTML = `<span class ="question"> 1. ${questionOne.question}</span><br> or <br><span class ="question">2. ${questionTwo.question}</span>`
}

createHintArea();
createFoodCards();