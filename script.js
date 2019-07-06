 var startingDishes = [
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

        // {
        //     name: "Cheng Tng",
        //     ethnicity: "Chinese",
        //     temperature: "Cold",
        //     base: "Others", //trigger base special statement
        //     servingDish: "Bowl",
        //     color: "Brown",
        //     dishType: "Snack or Dessert",
        //     image:"images/foodphotoscrop/cheng-tng.jpeg"
        // },

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
    ]

//start of game - get random dish
var getRandomDish = function(){
    var randomIndex = Math.floor(Math.random() * 19);
    console.log(randomIndex);
    //dbl check this
    var dishName = startingDishes[randomIndex].name;
    console.log(dishName);
}

getRandomDish();

//get document by id 'output'
//for each item in startingDishes, create a div with .food-card class
//for each div, create an img with the class 'food-img' and id of i
//for each div, create a button with a class select-btn and the value and id of i + an eventListener to check for win
//append those individual divs to output

function createFoodCards() {
        for (var i = 0; i < startingDishes.length; i++) {
            var cardsOutput = document.getElementById('cards-output');

            var foodCard = document.createElement('div');
            foodCard.className = 'food-card';

            var foodImage = document.createElement('img');
            foodImage.src = startingDishes[i].image;

            var foodName = document.createElement ("p");
            foodName.innerHTML = startingDishes[i].name;

            var selectButton = document.createElement('button');
            selectButton.className = 'select-btn';
            selectButton.type = 'submit';
            selectButton.innerText = "Select";
            selectButton.id = i;
            selectButton.value = i;
            //selectButton.addEventListener('click', checkForWin);

            foodCard.appendChild(foodImage);
            foodCard.appendChild(foodName);
            foodCard.appendChild(selectButton);
            cardsOutput.appendChild(foodCard);
    }
};

createFoodCards();

// foodCard.setAttribute('className', 'food-card');
// foodCard.setAttribute('src', 'startingDishes[i].image');
// foodCard.setAttribute('data-id', i);