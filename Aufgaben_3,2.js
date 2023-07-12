/*
3.2. Schreibe eine Funktion mit 3 Parametern: Zahl, Zahl, Funktion
Rufe diese mit beliebigen Zahlen und eine Anonymen Funktion auf. Die Anonyme Funktion soll

3.2.1. Die Summe zurück geben (die dann von einer Funktion ausgegeben werden soll)

3.2.3. Die Summe in ein JSON-Objekt { summe: … } zurück geben. Deine Funktion soll diese dann ebenfalls ausgeben.

3.2.4. Die Summe in 2 mögliche JSON Objekte zurück geben. Bei positiven Zahlen { pos: … } und bei  Nagativen { neg: ... } .
Deine Funktion soll dann entsprechend „Summe ist positiv und lautet 12" oder "Summe ist negativ und lautet -12“ ausgeben.

*/

function f1 (a, f) {
    return f(a);
}

let a = f1([10, 5, 8, 24, 9, 35, -100], (z1) => {
   let s = z1.reduce( (a,b) => a + b)
    if(s<0){
        return {
            Negativ: s
        }
    }    
    else{
        return {
            Positiv: s
        }
    }
}
)

if(a.Positiv != undefined){
    console.log(`Die Summe ist positiv ${a.Positiv}`);
}
else{
    console.log(`Die Summe ist negativ ${a.Negativ}`);
}
