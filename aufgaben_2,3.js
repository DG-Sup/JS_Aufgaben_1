
/* 2.3. a = function(….) { … } erstellt ja direkt eine Funktion. Versuche herauszufinden, wie man a gleich den Rückgabewert
 (Summe zweier Zahlen von 2.2.) zuweisen kann ohne a() in einer weiteren Zeile aufzurufen. 
 Bei Parameter 1, 2 soll a also den Wert 3 haben und NICHT eine Funktion sein.
Dies ist zwar nicht üblich, aber technisch möglich und zu Verständnis sinnvoll. */

a = function(a, b){
    return a + b;
}(1, 2);

console.log(a);
