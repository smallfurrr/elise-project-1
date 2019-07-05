//base template
var dish = {
  ethnicity: chinese/malay/indian/others,
  //others->"doesn't exactly fall into any of those categories"
  temperature: warm/cold,
  base: noodles/rice/meat/others,
  servingDish: plate/bowl/others AKA handheld,
  color: null,
  dishType: snackOrDessert/mainMeal
};

// save final dishes as an array
var chickenRice = {
  ethnicity: chinese,
  temperature: warm,
  base: rice,
  servingDish: plate,
  color: white,
  dishType: mainMeal
};

var laksa = {
  ethnicity: chinese,
  temperature: warm,
  base: noodles,
  servingDish: bowl,
  color: red,
  dishType: mainMeal
};

var hokkienMee = {
  ethnicity: chinese,
  temperature: warm,
  base: noodles,
  servingDish: plate,
  color: yellow,
  dishType: mainMeal
};

var chilliCrab = {
  ethnicity: chinese,
  temperature: warm,
  base: meat,
  servingDish: plate,
  color: red,
  dishType: mainMeal
};

var nasiLemak = {
  ethnicity: malay,
  temperature: warm,
  base: rice,
  servingDish: plate,
  color: white,
  dishType: mainMeal
};

var meeRebus = {
  ethnicity: malay,
  temperature: warm,
  base: noodles,
  servingDish: bowl,
  color: brown,
  dishType: mainMeal
};

var beefRendang = {
  ethnicity: malay,
  temperature: warm,
  base: meat,
  servingDish: bowl,
  color: brown,
  dishType: mainMeal
};

var satay = {
  ethnicity: malay,
  temperature: warm,
  base: meat,
  servingDish: others, //BUT ALSO THEY COME TOGETHER ON A PLATE WHYYY IS SATAY SO ANNOYING
  color: brown;
  dishType: snackOrDessert //debatable hahah
};

var nasiBriyani = {
  ethnicity: indian,
  temperature: warm,
  base: rice,
  servingDish: plate,
  color: yellow,
  dishType: mainMeal
};

var rotiPrata = {
  ethnicity: indian,
  temperature: warm,
  base: others,
  servingDish: plate,
  color: brown,
  dishType: mainMeal
};

var fishHeadCurry = {
  ethnicity: indian,
  temperature: warm,
  base: meat,
  servingDish: bowl,
  color: red,
  dishType: mainMeal;
};

var tandooriChicken = {
  ethnicity: indian,
  temperature: warm,
  base: meat,
  servingDish: plate,
  color: red,
  dishType: mainMeal;
};

//12 up to this point
//i feel like for the desserts some are a bit hard to define ethnicity....

var gorengPisang = {
  ethnicity: malay,
  temperature: warm,
  base: others,
  servingDish: others,
  color: brown,
  dishType: snackOrDessert;
};

var chengTng = {
  ethnicity: chinese,
  temperature: cold,
  base: others,
  servingDish: bowl,
  color: brown,
  dishType: snackOrDessert;
};

var chendol = {
  ethnicity: others,
  temperature: cold,
  base: others,
  servingDish: bowl,
  color: green,
  dishType: snackOrDessert;
};

var iceKachang = {
  ethnicity: others,
  temperature: cold,
  base: others,
  servingDish: bowl,
  color: red, //i guess the syrup is usually red
  dishType: snackOrDessert;
}

var pandanCake = {
  ethnicity: others,
  temperature: warm,
  base: others,
  servingDish: plate,
  color: green,
  dishType: snackOrDessert
};

var curryPuff = {
  ethnicity: others,
  temperature: warm,
  base: others,
  servingDish: others,
  color: brown,
  dishType: snackOrDessert
};

var vadai = {
  ethnicity: indian,
  temperature: warm,
  base: others,
  servingDish: others,
  color: brown,
  dishType: snackOrDessert
};

//18 total