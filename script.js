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

//questions must come after getRandomDish() or all answers will be undefined
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

//creates first 2 questions - rename if reusing for all
function getStartingHints() {
    //generating two random numbers to get an index from existing questionsClone objects
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
getStartingHints();

//action that happens when player enters "1" or "2" to select hint
function selectHint() {
    //must ensure that displayedQuestions array is accessible to function
    const input = document.getElementById('input');

    //what user actually typed in
    let userInput = parseInt(input.value);
    console.log(userInput);

    //index in displayedQuestions according to what user chose
    let selectedIndex = userInput - 1;
    console.log(selectedIndex);

    //this will the selected question
    // displayedQuestions[selectedIndex]


}

//dynamically creates the game area based on the pre-calculated values above
function createHintArea() {
    //place the 2 random question-answer objects in their own array
    let displayedQuestions = [];
    displayedQuestions.push(questionOne);
    displayedQuestions.push(questionTwo);

    console.log(displayedQuestions);

    var questionsOutput = document.getElementById('questions-output');

    var seetohImage = document.createElement('img');
    seetohImage.id = 'seetoh';
    seetohImage.src = 'images/seetoh/pic5.jpeg';

    var questionBox = document.createElement('div');
    questionBox.id = 'question-box';
    var startingHints = document.createElement('p');
    startingHints.innerHTML = `What would you like to ask? <span class ="question"> 1. ${questionOne.question}</span> or <span class ="question">2. ${questionTwo.question}</span>`
    questionBox.appendChild(startingHints);

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
    chosenHints.innerText = 'This is where the hints will go, each time a user selects a hint it has to appear here lmao also I realised have to display question and answer also cos of the Others answers i think attach a class and then can style the Q and A'
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