# Übungen

> Alle Übungen am besten mit einen Git-Repository versehen und nach jeder Übung ein Commit erstellen.

```javascript
git add .                             git a
git commit -m "Übung 1.1"             git c "Übung 1.1"
```

> Dann kannst Du zu jedem Punkt in den Übungsaufgaben springen und sie dir jederzeit nochmal anschauen, ändern, erweitern… und neu commiten.

Solltest Du ein Commit vergessen haben (z.B. 1.1 commitet, 1.2 vergessen, 1.3 gemerkt das Du 1.2 nicht commitet hast), dann setzte alle Dateien mit `git restore .` zurück. Schreib die Aufgabe 1.2, commite sie und dann 1.3.

Regelmäßiges Commiten von wichtigen Entwicklungsständen darf nicht vergessen werden. Weil man u.a.

- evtl. Fehler besser finden kann (commit x geht, commit x + 1 nicht mehr… was ist der Unterschied
- Änderung einfach sind, da man von anderen Ständen aus Anpassungen vornehmen kann
- und viele mehr

#### Funktionen, Anonyme Funktionen und Arrow => Function

1. # Normale Funktionen

```javascript
function Test() {
  console.log("Test() wurde aufgerufen")
}
```

Ist eine Deklaration einer normalen Funktion und kann mit

```javascript
Test();
```

aufgerufen werden.

In JavaScript ist alles ein Objekt. Selbst eine Funktion. D.h. eine Funktion kann

- in eine Variable gespeichert werden

```javascript
let f = Test;
```

Wichtig hierbei ist, **NUR** den Funktionsnamen zu übergeben **NICHT** `let f = Test();` . Dies wäre ein Funktionsaufruf und f würden den Rückgabewert von `Test` erhalten.

- oder als Argument für eine andere Funktion verwendet werden

```javascript
function AndereFunktion(f) {
  f();
}

AndereFunktion(Test);
```

Auch hier wird die Funktion `Test()` aufgerufen. Und zwar innerhalb der `AndereFunktion(f)` Funktion mit`f();` .

Der Parameter `f` ist ja eine Funktion als Argument übergeben worden. Nun kann diese aufgerufen werden als wäre `f` der Name der Funktion (anhängen von `()` und ggfs. Argumenten).

## Übungen

1.1. Erstelle eine Funktion und eine zweite Funktion, die diese Funktion aufruft (wie oben).

1.2. Erstelle eine Funktion mit Parametern (z.B. 2 Zahlen) und eine Funktion, die diese Funktion mit entsprechenden Argumenten (2 Zahlen) aufruft. Berechne in der Funktion z.B. deren Summe und gib diese aus.

1.3. Erweitere die zweite Übung in dem Du die zweite Funktion ebenfalls 2 Parameter gibst und diese dann für den Aufruf der ersten Funktion (innerhalb der Zweiten) verwendet. `ZweiteFunktion(1, 2, ErsteFunktion);`

---

2. # Anonyme Funktionen

```javascript
funtion Test() { ... }
```

Erstellt eine benannte Funktion. D.h. sie hat einen Namen und ein Lebensraum (innerhalb de {}-Blocks in der sie deklariert wurde).

```javascript
let f = function() { console.log("Die anonyme Funktion wurde aufgerufen"); }
```

Ist die „gleiche“ Funktion wie oben. Nur wird sie OHNE vorher eine benannte Funktion erstellt zu haben, direkt in eine Variable abgelegt. Diese nennt man **anonyme Funktion** (weil sie keinen Namen hat).

Die Variable IST kein Name sondern eine Variable, auch wenn es eine Konstante wäre. Die Variable hat einen Namen `f` aber nicht die Funktion. Gibt man später `f = 5`  ein, wäre es immer noch die gleiche Variable, aber keine Funktion mehr.

```javascript
AndereFunktion(f);
```

Würde dann die `AndereFunktion` mit dieser Funktion als Argument aufrufen.

Man kann natürlich auch direkt im der Argumentenliste diese Funktion erstellen:

```javascript
AndereFunktion( function() { console.log("Die anonyme Funktion wurde aufgerufen"); });
```

Anstelle die Funktion in eine Variable zu speichern um dann diese zu verwenden um sie der `AndereFunktion`-Funktion zu übergeben, wurde sie direkt als Argument extra für diesen einen Aufruf erstellt (man kann sie dann NUR in der `AndereFunktion` verwenden.  Nach dem Funktionsaufruf ist diese anonyme Funktion nicht mehr existend.

### Übungen

2.1. Passe die Aufgaben von oben mit der Normalen Funktion so an, das Du keine benannte Funktion `Test` mehr hast sondern nur anonyme Funktionen. Einmal mit einer Variable und einmal ohne.

2.2. Füge der anonymen Funktion 2 Parameter hinzu, addiere diese und gebe die Summe zurück.

2.3. `a = function(….) { … }` erstellt ja direkt eine Funktion. Versuche herauszufinden, wie man `a` gleich den Rückgabewert (Summe zweier Zahlen von 2.2.) zuweisen kann ohne `a()` in einer weiteren Zeile aufzurufen. Bei Parameter 1, 2 soll `a` also den Wert 3 haben und NICHT eine Funktion sein.
Dies ist zwar nicht üblich, aber technisch möglich und zu Verständnis sinnvoll.

---

3. # Arrow => Function

Eine Arrow => Function ist nichts anderes als kürzere Schreibweise von den anoynamen Funktionen. D.h. eine Arrow => Function ist auch eine anonyme Funktion. Nur wird diese andere deklariert.

Das Schlüsselwort `function` ist nicht mehr notwendig. Auch werden Ausdrücke immer zurückgegeben und man braucht kein `return` .

Steht der Ausdruck (oder Ausdrücke/Anweisungen) in {}-Klammern, bedarf es wieder ein `return` !

```javascript
let a = () => { console.log("Anonyme Funktion wurde aufgerufen "); }
a();
```

Arrow => Function bestehen auf 3 Teilen:

1. Parameter-Liste in () `()`   → kein Parameter `(a)`  oder `a`  → ein Parameter (Regel: IMMER mit `()`, also immer `(a)` ) `(a,b,c…)` 2 oder mehr Parameter
2. `=>` Dies kennzeichnet eine Arrow => Function.
Und macht aus z.B. `(a)` ein Parameter und nicht nur die Verwendung von der Variable `a`
3. Ausdruck
Dies kann eine reine Berechnung sein (`a,b) => a + b` Oder auch ein oder mehrere Anweisungen, die Rückgabe (falls nötig) erfolg dann durch r`eturn` (`a, b) ⇒ { int summe = a + b;
console.log(`Summe: ${summe}`);
return summe; } );`

Achtung: Soll die Rückgabe (Ausdruck nach => ) ein JSON-Objekt sein (z.B. `{ id: 5 }`, dann muss diese geklammert werden `({ id: 5 })` . Ansonsten stehen die {}-Klammern für ein Anweisungs-Block und nicht für ein JSON-Objekt!!!

### Übungen

3.1. Verwende in den Aufgaben von 2. nun Arrow => Function anstelle der mit `function` erstellen anonyme Funktionen

3.2. Schreibe eine Funktion mit 3 Parametern: Zahl, Zahl, Funktion
Rufe diese mit beliebigen Zahlen und eine Anonymen Funktion auf. Die Anonyme Funktion soll

3.2.1. Die Summe zurück geben (die dann von einer Funktion ausgegeben werden soll)

3.2.2. Die Summe ausgeben ({}-Block)

3.2.3. Die Summe in ein JSON-Objekt `{ summe: … }` zurück geben. Deine Funktion soll diese dann ebenfalls ausgeben.

3.2.4. Die Summe in 2 mögliche JSON Objekte zurück geben. Bei positiven Zahlen `{ pos: … }` und bei  Nagativen `{ neg: ... }` . Deine Funktion soll dann entsprechend „Summe ist positiv und lautet 12" oder "Summe ist negativ und lautet -12“ ausgeben.

#### Async, Sync, callback Function

Übungsbeispiele im Repository: [https://github.com/bugfrei/NodeExercise.git](https://github.com/bugfrei/NodeExercise.git)

