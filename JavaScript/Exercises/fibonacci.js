function fibonacciGenerator(n){
    var fiblist = [];

    if (n == 1){
        fiblist = [0]
    } else if (n == 2){
        fiblist = [0,1]
    }else{
        fiblist = [0,1]

        for (var i = 2; i < n; i++){
            fiblist.push(fiblist[fiblist.length-2] + fiblist[fiblist.length-1])
        }
        
    }
    return fiblist;
}


