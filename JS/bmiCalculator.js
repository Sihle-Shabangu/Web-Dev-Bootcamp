//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// bmi = Math.floor(weight / (height ** height))


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
function bmiCalculator(weight, height) {
    var bmi = Math.floor(weight / (height * height));
    if (bmi < 18.5){
        var interpretation = "Your BMI is " + bmi + ", so you are underweight."
    }else if (bmi > 18.5 && bmi < 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    }else{
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }
    return interpretation;
}
var bmi = bmiCalculator(65, 1.8); 

console.log(bmi);
