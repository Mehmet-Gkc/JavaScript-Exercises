# Rückrufe

#### Benutzer grüßen
* Erstelle eine Funktion namens 'greetMessage', die eine Begrüßungsnachricht ausgibt.
* Erstelle eine Funktion namens 'greetUsers', die ein Array mit verschiedenen Benutzern erhält und jeden Benutzer begrüßt.


```javascript
    greetMessage("John") // print "Good Morning, John"

    greetUsers(["John","Peter","Mark"], greetMessage)
    // "Good Morning, John"
    // "Good Morning, Peter"
    // "Good Morning, Mark"
```
#### Quadratzahl

-  Schreibe eine Funktion namens `squareNumber`, die die übergebenen Zahl im Quadrat zurückgibt.
-  Schreibe eine Funktion namens `square`, die ein Array mit Zahlen und `squareNumber` als Callback-Funktion annimmt und ein Array mit dem Quadrat jeder Zahl aus dem übergebenen Array zurückgibt.

```javascript
const array = [1, 2, 3, 4, 5];
square(array, squareNumber); // gibt [1, 4, 9, 16, 25] zurück
```


[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnisabzeichen](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-Functions-Callback-1/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-Functions-Callback-1/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-Functions-Callback-1/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
