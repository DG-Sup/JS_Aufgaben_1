function f1 (a, b){
    console.log(a+b);
}

let x = f1;

function f2 (n, m, x){
x(n, m);
}

f2(5, 3, f1);
