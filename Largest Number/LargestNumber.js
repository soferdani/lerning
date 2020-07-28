var arry = [4, 6, 2, 7, 8, 2, 44, 1];

function larg (arr) {
    var b = 0 ;
    //console.log(arr.length);
    for (var i = 0; i<arr.length ; i++ ){
       // console.log(arr[i]);
        if (b < arr[i]) {
            b = arr[i]; 
            //console.log(b);
        }
    }
    return b;
}

var temp = larg(arry);
console.log(temp);