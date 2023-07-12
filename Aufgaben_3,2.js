/*
3.2. Schreibe eine Funktion mit 3 Parametern: Zahl, Zahl, Funktion
Rufe diese mit beliebigen Zahlen und eine Anonymen Funktion auf. Die Anonyme Funktion soll

3.2.1. Die Summe zurück geben (die dann von einer Funktion ausgegeben werden soll)

3.2.3. Die Summe in ein JSON-Objekt { summe: … } zurück geben. Deine Funktion soll diese dann ebenfalls ausgeben.

3.2.4. Die Summe in 2 mögliche JSON Objekte zurück geben. Bei positiven Zahlen { pos: … } und bei  Nagativen { neg: ... } .
Deine Funktion soll dann entsprechend „Summe ist positiv und lautet 12" oder "Summe ist negativ und lautet -12“ ausgeben.

*/

function f1 (a, b, f) {
    return f(a, b);
}
// Summe zurückgeben
console.log(f1(10, 5, (z1, z2) => z1 + z2));

// Summe als Block ausgeben
console.log(f1(20, 5, (z1, z2) => {
    return z1+z2;
}));

// Summe als JSON
console.log(f1(30, 5, (z1, z2) => ({
    summe: z1 + z2,
    produkt: z1 * z2,
    differenz: z1 - z2,
    differenz2: z1 < z2 ? z2 - z1 : z1 -z2
    })));
    


console.log(f1(5, 40, (z1, z2) => {
    if (z1 < z2){
        var d = z2 - z1;
    }
    else{
        var d = z1 - z2;
    }
    return {
        summe: z1 + z2,
        produkt: z1 * z2,
        differenz: d
    }
}));

