// save final dishes as an array
var startingDishes = [
        {
            name: "Chicken Rice",
            ethnicity: "Chinese",
            temperature: "Warm",
            base: "Rice",
            servingDish: "Plate",
            color: "White",
            dishType: "Meal",
            image:"images/foodphotoscrop/chicken-rice.jpg"
        },

        {
            name: "Laksa",
            ethnicity: "Chinese",
            temperature: "Warm",
            base: "Noodles",
            servingDish: "Bowl",
            color: "Red",
            dishType: "Meal",
            image:"images/foodphotoscrop/laksa.jpg"
        },

        {
            name: "Hokkien Mee",
            ethnicity: "Chinese",
            temperature: "Warm",
            base: "Noodles",
            servingDish: "Plate",
            color: "Yellow",
            dishType: "Meal",
            image:"images/foodphotoscrop/hokkien-mee.jpg"
        },

        {
            name: "Chilli Crab",
            ethnicity: "Chinese",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Plate",
            color: "Red",
            dishType: "Meal",
            image:"images/foodphotoscrop/chilli-crab.jpg"
        },

        {
            name:"Nasi Lemak",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Rice",
            servingDish: "Plate",
            color: "White",
            dishType: "Meal",
            image:"images/foodphotoscrop/nasi-lemak.jpg"
        },

        {
            name: "Mee Rebus",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Noodles",
            servingDish: "Bowl",
            color: "Brown",
            dishType: "Meal",
            image:"images/foodphotoscrop/mee-rebus.jpg"
        },

        {
            name: "Beef Rendang",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Bowl",
            color: "Brown",
            dishType: "Meal",
            image:"images/original/beef-rendang.jpg"
        },

        {
            name: "Satay",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Others", //trigger serving dish special statement
            color: "Brown",
            dishType: "Meal",
            image:"images/original/satay.jpg"
        },

        {
            name: "Nasi Briyani",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Rice",
            servingDish: "Plate",
            color: "Yellow",
            dishType: "Meal",
            image:"images/original/nasi-briyani.jpg"
        },

        {
            name: "Roti Prata",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Plate",
            color: "Brown",
            dishType: "Meal",
            image:"images/original/roti-prata.jpg"
        },

        {
            name: "Fish Head Curry",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Bowl",
            color: "Red",
            dishType: "Meal",
            image:"images/original/fish-head-curry.jpg"
        },

        {
            name: "Tandoori Chicken",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Meat",
            servingDish: "Plate",
            color: "Red",
            dishType: "Meal",
            image:"images/original/tandoori-chicken.jpg"
        },

        {
            name: "Goreng Pisang",
            ethnicity: "Malay",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Others", //trigger serving dish special statement
            color: "Brown",
            dishType: "Snack or Dessert",
            image:"images/original/goreng-pisang.jpg"
        },

        // {
        //     name: "Cheng Tng",
        //     ethnicity: "Chinese",
        //     temperature: "Cold",
        //     base: "Others", //trigger base special statement
        //     servingDish: "Bowl",
        //     color: "Brown",
        //     dishType: "Snack or Dessert",
        //     image:"images/original/cheng-tng.jpg"
        // },

        {
            name: "Chendol",
            ethnicity: "Others",
            temperature: "Cold",
            base: "Others", //trigger base special statement
            servingDish: "Bowl",
            color: "Green",
            dishType: "Snack or Dessert",
            image:"images/original/chendol.jpg"
        },

        {
            name: "Ice Kachang",
            ethnicity: "Others", //hmm hmm hmm
            temperature: "Cold",
            base: "Others", //trigger base special statement
            servingDish: "Bowl",
            color: "Red",
            dishType: "Snack or Dessert",
            image:"images/original/ice-kachang.jpg"
        },

        {
            name: "Pandan Cake",
            ethnicity: "Others",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Plate",
            color: "Green",
            dishType: "Snack or Dessert",
            image:"images/original/pandan-cake.jpg"
        },

        {
            name: "Curry Puff",
            ethnicity: "Others",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Others", //trigger serving dish special statement
            color: "Brown",
            dishType: "Snack or Dessert",
            image:"images/original/curry-puff.jpg"
        },

        {
            name: "Vadai",
            ethnicity: "Indian",
            temperature: "Warm",
            base: "Others", //trigger base special statement
            servingDish: "Others", //trigger serving dish special statement
            color: "Brown",
            dishType: "Snack or Dessert",
           immage:"images/original/vadai.jpg"
        }
    ]
//18 total

//base template
// var dish = {
//   ethnicity: "Chinese"/"Malay"/"Indian"/"Others",
//   //others->"doesn't exactly fall into any of those categories"
//   temperature: warm/"Cold",
//   base: "Noodles"/"Rice"/"Meat"/others,
//   servingDish: plate/"Bowl"/others AKA handheld,
//   color: null,
//   dishType: snackOrDessert/"Meal"
// };