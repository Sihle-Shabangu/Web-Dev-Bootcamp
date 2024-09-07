var names = ["Bob", "Jack", "Jill", "John", "Jane"];
function whosPaying(names) {

    var randomNumber = Math.floor(Math.random()*names.length);
    var buyer = names[randomNumber];

    console.log(buyer + " is buying lunch for us today");

}

// whosPaying(names);
