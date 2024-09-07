var bottles = 99;


while (bottles >= 0){
    var statement = bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down and pass it around, "
    var statement2 = bottles +  " bottles of beer on the wall."

    var lastStatement =  "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
    if (bottles == 0){
        console.log(lastStatement);
    } else{
        console.log(statement)
        bottles--
        console.log(statement2)
    }
}