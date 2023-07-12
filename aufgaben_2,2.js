function f2(f){
    // f ist der Parameter bzgl. der Deklaration der Funktion
    f(2, 2);
}

f2( function(a, b){ 
    // Aufruf der Funktion: Argumente für den Parameter f
    let x = a + b;
    console.log(`Die Summe beträgt: ${x}`);
});

