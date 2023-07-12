function f1 (a, b){
    console.log(a+b);
}

let x = f1;

function f2 (x){
x(2, 2);
}

f2(f1);
