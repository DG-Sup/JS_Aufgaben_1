function f2(c, d, f){
    // f ist der Parameter bzgl. der Deklaration der Funktion
    f(c, d);
}




f2(5, 10, function(a, b){ 
    // Aufruf der Funktion: Argumente für den Parameter f
    let x = a + b;
    console.log(`Die Summe beträgt: ${x}`);
});

f2(5, 10, function(a, b){
    let x = a* b;
    console.log(`Das Produkt beträgt: ${x}`);
})