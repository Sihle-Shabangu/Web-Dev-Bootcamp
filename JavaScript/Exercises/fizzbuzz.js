var list = [];
var count = 1;

function FizzBuzz() {

    while (count <= 100){
        if (count % 3 == 0 && count % 5 == 0) {
            list.push("FizzBuzz")
        } else if (count % 3 == 0){
            list.push("Fizz")
        } else if (count % 5 == 0){
            list.push("Buzz")
        }else{
            list.push(count);
        }
        count++;
        
    }
    // console.log(list);
    
}
FizzBuzz();
