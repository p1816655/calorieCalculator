//Input validation
calculatebmr.onclick = function check(){

//initialised variables
var age = document.getElementById("age");

var gender = document.getElementById("gender");
var male = document.getElementById("male");
var female = document.getElementById("female");

var height = document.getElementById("height");
var weight = document.getElementById("weight");

var calulatebmr = document.getElementById("calculatebmr");
var bmrresult = document.getElementById("bmrresult");
//End of initialised variables

//Calculate BMR
var result = 0;

    //check input conditions

    //check age input
    if (age.value == "") {
        alert("Key in your age.");
        return false;
    }
    else if (age.value < 0) {
        alert("Please enter a valid age.");
        return false;
    }
    else if (isNaN(age.value)){
      alert('Please enter a value.');
      return false;
    }

    //check height input
    else if (height.value == "") {
        alert("Key in your height.");
        return false;
    }
    else if (height.value < 0) {
        alert("Please enter a valid height.");
        return false;
    }
    else if (isNaN(height.value)){
      alert('Please enter a value.');
      return false;
    }

    //check weight input
    else if (weight.value == "") {
        alert("Key in your weight.");
        return false;
    }
    else if (weight.value < 0) {
        alert("Please enter a valid weight.");
        return false;
    }
    else if (isNaN(weight.value)){
      alert('Please enter a value.');
      return false;
    }

    //check gender and calculate bmr based on respective formulas
    else if(male.checked == true){
        result = 10 * weight.value + 6.25 * height.value - 5 * age.value + 5;

    //results, alert and display in HTML
   alert("Your BMR is: " + result);
   document.getElementById("bmrresult").innerHTML = ("Your BMR is: " + result);
    }

    else if (female.checked == true){
            result = 10 * weight.value + 6.25 * height.value - 5 * age.value - 161;

    //results, alert and display in HTML
   alert("Your BMR is: " + result);
   document.getElementById("bmrresult").innerHTML = ("Your BMR is: " + result);
    }

}
//End of Calculate BMR
//End of Input validation

//accordition
var number = document.getElementById("Calorie");
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
//end of accordtion

//Calculate Calorie Intake
totalcalories.onclick = function calculateTotal(){

//Breakfast variables
var breakfast = document.getElementById("breakfast");
var breakquan = document.getElementById("breakquan");

//Lunch variables
var lunch = document.getElementById("lunch");
var lunchquan = document.getElementById("lunchquan");

//Dinner variables
var dinner = document.getElementById("dinner");
var dinquan = document.getElementById("dinquan");

//Total Calculation
var totalCal = 0;

//Breakfast
if(breakfast.value == "Apple"){
    calories = breakquan.value * 80;
    totalCal += calories;
}
else if(breakfast.value == "Banana"){
    calories = breakquan.value * 101;
    totalCal += calories;
}
else if(breakfast.value == "Grape"){
    calories = breakquan.value * 2;
    totalCal += calories;
}
else if(breakfast.value == "Mango"){
    calories = breakquan.value * 135;
    totalCal += calories;
}
else if(breakfast.value == "Orange"){
    calories = breakquan.value * 71;
    totalCal += calories;
}
else if(breakfast.value == "Pear"){
    calories = breakquan.value * 100;
    totalCal += calories;
}
else if(breakfast.value == "Peach"){
    calories = breakquan.value * 38;
    totalCal += calories;
}
else if(breakfast.value == "Pineapple"){
    calories = breakquan.value * 80;
    totalCal += calories;
}
else if(breakfast.value == "Strawberry"){
    calories = breakquan.value * 53;
    totalCal += calories;
}
else if(breakfast.value == "Watermelon"){
    calories = breakquan.value * 45;
    totalCal += calories;
}
else if(breakfast.value == "Asparagus"){
    calories = breakquan.value * 36;
    totalCal += calories;
}
else if(breakfast.value == "Beancurd"){
    calories = breakquan.value * 81;
    totalCal += calories;
}
else if(breakfast.value == "Broccoli"){
    calories = breakquan.value * 40;
    totalCal += calories;
}
else if(breakfast.value == "Carrots"){
    calories = breakquan.value * 45;
    totalCal += calories;
}
else if(breakfast.value == "Cucumber"){
    calories = breakquan.value * 30;
    totalCal += calories;
}
else if(breakfast.value == "Eggplant"){
    calories = breakquan.value * 38;
    totalCal += calories;
}
else if(breakfast.value == "Lettuce"){
    calories = breakquan.value * 7;
    totalCal += calories;
}
else if(breakfast.value == "Tomato"){
    calories = breakquan.value * 29;
    totalCal += calories;
}
else if(breakfast.value == "Beef, regular, cooked"){
    calories = breakquan.value * 120;
    totalCal += calories;
}
else if(breakfast.value == "Chicken, cooked"){
    calories = breakquan.value * 95;
    totalCal += calories;
}
else if(breakfast.value == "Egg"){
    calories = breakquan.value * 79;
    totalCal += calories;
}
else if(breakfast.value == "Fish, Catfish, cooked"){
    calories = breakquan.value * 80;
    totalCal += calories;
}
else if(breakfast.value == "Pork, cooked"){
    calories = breakquan.value * 130;
    totalCal += calories;
}
else if(breakfast.value == "Shrimp, cooked"){
    calories = breakquan.value * 70;
    totalCal += calories;
}
else if(breakfast.value == "Bread, regular"){
    calories = breakquan.value * 75;
    totalCal += calories;
}
else if(breakfast.value == "Butter"){
    calories = breakquan.value * 102;
    totalCal += calories;
}
else if(breakfast.value == "Caesar Salad"){
    calories = breakquan.value * 360;
    totalCal += calories;
}
else if(breakfast.value == "Cheeseburger"){
    calories = breakquan.value * 360;
    totalCal += calories;
}
else if(breakfast.value == "Chocolate"){
    calories = breakquan.value * 150;
    totalCal += calories;
}
else if(breakfast.value == "Corn"){
    calories = breakquan.value * 140;
    totalCal += calories;
}
else if(breakfast.value == "Hamburger"){
    calories = breakquan.value * 280;
    totalCal += calories;
}
else if(breakfast.value == "Pizza"){
    calories = breakquan.value * 180;
    totalCal += calories;
}
else if(breakfast.value == "Potato (uncooked)"){
    calories = breakquan.value * 120;
    totalCal += calories;
}
else if(breakfast.value == "Rice, cooked"){
    calories = breakquan.value * 225;
    totalCal += calories;
}
else if(breakfast.value == "Sandwich"){
    calories = breakquan.value * 310;
    totalCal += calories;
}
else if(breakfast.value == "Beer, regular"){
    calories = breakquan.value * 150;
    totalCal += calories;
}
else if(breakfast.value == "Coca-Cola Classic"){
    calories = breakquan.value * 97;
    totalCal += calories;
}
else if(breakfast.value == "Diet Coke"){
    calories = breakquan.value * 3;
    totalCal += calories;
}
else if(breakfast.value == "Milk, low-fat (1%)"){
    calories = breakquan.value * 104;
    totalCal += calories;
}
else if(breakfast.value == "Milk, low-fat (2%)"){
    calories = breakquan.value * 121;
    totalCal += calories;
}
else if(breakfast.value == "Milk, whole"){
    calories = breakquan.value * 150;
    totalCal += calories;
}
else if(breakfast.value == "Orange Juice / Apple Cider"){
    calories = breakquan.value * 115;
    totalCal += calories;
}
else if(breakfast.value == "Yogurt, low-fat"){
    calories = breakquan.value * 200;
    totalCal += calories;
}
else if(breakfast.value == "Yogurt, non-fat"){
    calories = breakquan.value * 150;
    totalCal += calories;
}

//Lunch
if(lunch.value == "Apple"){
    calories = lunchquan.value * 80;
    totalCal += calories;
}
else if(lunch.value == "Banana"){
    calories = lunchquan.value * 101;
    totalCal += calories;
}
else if(lunch.value == "Grape"){
    calories = lunchquan.value * 2;
    totalCal += calories;
}
else if(lunch.value == "Mango"){
    calories = lunchquan.value * 135;
    totalCal += calories;
}
else if(lunch.value == "Orange"){
    calories = lunchquan.value * 71;
    totalCal += calories;
}
else if(lunch.value == "Pear"){
    calories = lunchquan.value * 100;
    totalCal += calories;
}
else if(lunch.value == "Peach"){
    calories = lunchquan.value * 38;
    totalCal += calories;
}
else if(lunch.value == "Pineapple"){
    calories = lunchquan.value * 80;
    totalCal += calories;
}
else if(lunch.value == "Strawberry"){
    calories = lunchquan.value * 53;
    totalCal += calories;
}
else if(lunch.value == "Watermelon"){
    calories = lunchquan.value * 45;
    totalCal += calories;
}
else if(lunch.value == "Asparagus"){
    calories = lunchquan.value * 36;
    totalCal += calories;
}
else if(lunch.value == "Beancurd"){
    calories = lunchquan.value * 81;
    totalCal += calories;
}
else if(lunch.value == "Broccoli"){
    calories = lunchquan.value * 40;
    totalCal += calories;
}
else if(lunch.value == "Carrots"){
    calories = lunchquan.value * 45;
    totalCal += calories;
}
else if(lunch.value == "Cucumber"){
    calories = lunchquan.value * 30;
    totalCal += calories;
}
else if(lunch.value == "Eggplant"){
    calories = lunchquan.value * 38;
    totalCal += calories;
}
else if(lunch.value == "Lettuce"){
    calories = lunch.value * 7;
    totalCal += calories;
}
else if(lunch.value == "Tomato"){
    calories = lunchquan.value * 29;
    totalCal += calories;
}
else if(lunch.value == "Beef, regular, cooked"){
    calories = lunchquan.value * 120;
    totalCal += calories;
}
else if(lunch.value == "Chicken, cooked"){
    calories = lunchquan.value * 95;
    totalCal += calories;
}
else if(lunch.value == "Egg"){
    calories = lunchquan.value * 79;
    totalCal += calories;
}
else if(lunch.value == "Fish, Catfish, cooked"){
    calories = lunchquan.value * 80;
    totalCal += calories;
}
else if(lunch.value == "Pork, cooked"){
    calories = lunchquan.value * 130;
    totalCal += calories;
}
else if(lunch.value == "Shrimp, cooked"){
    calories = lunchquan.value * 70;
    totalCal += calories;
}
else if(lunch.value == "Bread, regular"){
    calories = lunchquan.value * 75;
    totalCal += calories;
}
else if(lunch.value == "Butter"){
    calories = lunchquan.value * 102;
    totalCal += calories;
}
else if(lunch.value == "Caesar Salad"){
    calories = lunchquan.value * 360;
    totalCal += calories;
}
else if(lunch.value == "Cheeseburger"){
    calories = lunchquan.value * 360;
    totalCal += calories;
}
else if(lunch.value == "Chocolate"){
    calories = lunchquan.value * 150;
    totalCal += calories;
}
else if(lunch.value == "Corn"){
    calories = lunchquan.value * 140;
    totalCal += calories;
}
else if(lunch.value == "Hamburger"){
    calories = lunchquan.value * 280;
    totalCal += calories;
}
else if(lunch.value == "Pizza"){
    calories = lunchquan.value * 180;
    totalCal += calories;
}
else if(lunch.value == "Potato (uncooked)"){
    calories = lunchquan.value * 120;
    totalCal += calories;
}
else if(lunch.value == "Rice, cooked"){
    calories = lunchquan.value * 225;
    totalCal += calories;
}
else if(lunch.value == "Sandwich"){
    calories = lunchquan.value * 310;
    totalCal += calories;
}
else if(lunch.value == "Beer, regular"){
    calories = lunchquan.value * 150;
    totalCal += calories;
}
else if(lunch.value == "Coca-Cola Classic"){
    calories = lunchquan.value * 97;
    totalCal += calories;
}
else if(lunch.value == "Diet Coke"){
    calories = lunchquan.value * 3;
    totalCal += calories;
}
else if(lunch.value == "Milk, low-fat (1%)"){
    calories = lunchquan.value * 104;
    totalCal += calories;
}
else if(lunch.value == "Milk, low-fat (2%)"){
    calories = lunchquan.value * 121;
    totalCal += calories;
}
else if(lunch.value == "Milk, whole"){
    calories = lunchquan.value * 150;
    totalCal += calories;
}
else if(lunch.value == "Orange Juice / Apple Cider"){
    calories = lunchquan.value * 115;
    totalCal += calories;
}
else if(lunch.value == "Yogurt, low-fat"){
    calories = lunchquan.value * 200;
    totalCal += calories;
}
else if(lunch.value == "Yogurt, non-fat"){
    calories = lunchquan.value * 150;
    totalCal += calories;
}

//Dinner
if(dinner.value == "Apple"){
    calories = dinquan.value * 80;
    totalCal += calories;
}
else if(dinner.value == "Banana"){
    calories = dinquan.value * 101;
    totalCal += calories;
}
else if(dinner.value == "Grape"){
    calories = dinquan.value * 2;
    totalCal += calories;
}
else if(dinner.value == "Mango"){
    calories = dinquan.value * 135;
    totalCal += calories;
}
else if(dinner.value == "Orange"){
    calories = dinquan.value * 71;
    totalCal += calories;
}
else if(dinner.value == "Pear"){
    calories = dinquan.value * 100;
    totalCal += calories;
}
else if(dinner.value == "Peach"){
    calories = dinquan.value * 38;
    totalCal += calories;
}
else if(dinner.value == "Pineapple"){
    calories = dinquan.value * 80;
    totalCal += calories;
}
else if(dinner.value == "Strawberry"){
    calories = dinquan.value * 53;
    totalCal += calories;
}
else if(dinner.value == "Watermelon"){
    calories = dinquan.value * 45;
    totalCal += calories;
}
else if(dinner.value == "Asparagus"){
    calories = dinquan.value * 36;
    totalCal += calories;
}
else if(dinner.value == "Beancurd"){
    calories = dinquan.value * 81;
    totalCal += calories;
}
else if(dinner.value == "Broccoli"){
    calories = dinquan.value * 40;
    totalCal += calories;
}
else if(dinner.value == "Carrots"){
    calories = dinquan.value * 45;
    totalCal += calories;
}
else if(dinner.value == "Cucumber"){
    calories = dinquan.value * 30;
    totalCal += calories;
}
else if(dinner.value == "Eggplant"){
    calories = dinquan.value * 38;
    totalCal += calories;
}
else if(dinner.value == "Lettuce"){
    calories = dinquan.value * 7;
    totalCal += calories;
}
else if(dinner.value == "Tomato"){
    calories = dinquan.value * 29;
    totalCal += calories;
}
else if(dinner.value == "Beef, regular, cooked"){
    calories = dinquan.value * 120;
    totalCal += calories;
}
else if(dinner.value == "Chicken, cooked"){
    calories = dinquan.value * 95;
    totalCal += calories;
}
else if(dinner.value == "Egg"){
    calories = dinquan.value * 79;
    totalCal += calories;
}
else if(dinner.value == "Fish, Catfish, cooked"){
    calories = dinquan.value * 80;
    totalCal += calories;
}
else if(dinner.value == "Pork, cooked"){
    calories = dinquan.value * 130;
    totalCal += calories;
}
else if(dinner.value == "Shrimp, cooked"){
    calories = dinquan.value * 70;
    totalCal += calories;
}
else if(dinner.value == "Bread, regular"){
    calories = dinquan.value * 75;
    totalCal += calories;
}
else if(dinner.value == "Butter"){
    calories = dinquan.value * 102;
    totalCal += calories;
}
else if(dinner.value == "Caesar Salad"){
    calories = dinquan.value * 360;
    totalCal += calories;
}
else if(dinner.value == "Cheeseburger"){
    calories = dinquan.value * 360;
    totalCal += calories;
}
else if(dinner.value == "Chocolate"){
    calories = dinquan.value * 150;
    totalCal += calories;
}
else if(dinner.value == "Corn"){
    calories = dinquan.value * 140;
    totalCal += calories;
}
else if(dinner.value == "Hamburger"){
    calories = dinquan.value * 280;
    totalCal += calories;
}
else if(dinner.value == "Pizza"){
    calories = dinquan.value * 180;
    totalCal += calories;
}
else if(dinner.value == "Potato (uncooked)"){
    calories = dinquan.value * 120;
    totalCal += calories;
}
else if(dinner.value == "Rice, cooked"){
    calories = dinquan.value * 225;
    totalCal += calories;
}
else if(dinner.value == "Sandwich"){
    calories = dinquan.value * 310;
    totalCal += calories;
}
else if(dinner.value == "Beer, regular"){
    calories = dinquan.value * 150;
    totalCal += calories;
}
else if(dinner.value == "Coca-Cola Classic"){
    calories = dinquan.value * 97;
    totalCal += calories;
}
else if(dinner.value == "Diet Coke"){
    calories = dinquan.value * 3;
    totalCal += calories;
}
else if(dinner.value == "Milk, low-fat (1%)"){
    calories = dinquan.value * 104;
    totalCal += calories;
}
else if(dinner.value == "Milk, low-fat (2%)"){
    calories = dinquan.value * 121;
    totalCal += calories;
}
else if(dinner.value == "Milk, whole"){
    calories = dinquan.value * 150;
    totalCal += calories;
}
else if(dinner.value == "Orange Juice / Apple Cider"){
    calories = dinquan.value * 115;
    totalCal += calories;
}
else if(dinner.value == "Yogurt, low-fat"){
    calories = dinquan.value * 200;
    totalCal += calories;
}
else if(dinner.value == "Yogurt, non-fat"){
    calories = dinquan.value * 150;
    totalCal += calories;
}

//Calorie Intake Results
    alert("Your total calorie intake is: " + totalCal);
    document.getElementById("CalorieResult").innerHTML = ("Your total calorie intake is: " + totalCal);
}