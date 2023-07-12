function f1(){
    console.log("Hallo Carsten, alles fit?");
}

let x = f1;

function f2(y){
    y();
}

f2(f1);