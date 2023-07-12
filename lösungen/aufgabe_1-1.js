/*
    1.1. Erstelle eine Funktion und eine zweite Funktion, die diese Funktion aufruft (wie oben).
*/

function EineFunktion() {
    // Und das wird dann ausgegeben.
    console.log( "EineFunktion wurde aufgerufen." );
}

function ZweiteFunktion() {
    // das ist der geforderte Aufruf der zweiten Funktion, die die erste Funktion aufruft...
    EineFunktion();
}

// Damit überhaupt was passiert, muss ich die ZweiteFunktion aufrufen
ZweiteFunktion();
