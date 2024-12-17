# Exam Pseudo Code

Figjam board med flödesscheman hittas [här](https://www.figma.com/board/CIzezKpW59yBs4X8qaRTIZ/exam-pseudo-code?node-id=1-227&t=9PpEZbTQNK6vn6c0-0)

## Instruktioner

Pusslet går ut på att du får ett startord och ett slutord och du ska genom att byta ut bokstäver i ditt startord få det till ditt slutord med så få byten som möjligt.

## Regler

    Du får enbart byta ut en bokstav åt gången.
    Varje ord som bildas måste vara ett korrekt engelskt ord, dvs. det måste finnas i variabeln vid namn ordbok.

## Exempel

I detta exempel så ska vi få FOUR att bli FIVE. Observera att själva spelet är på engelska.

    FOUR (startord)
    FOUL (Bytte ut R till L)
    FOOL (Bytte ut U till O)
    FOOT (Bytte ut L till T)
    FORT (Bytte ut O till R)
    FORE (Bytte ut T till E)
    FIRE (Bytte ut O till I)
    FIVE (Slutord)

## Hur

Börja med att testa pusslet med papper och penna gör ett pussel så du förstår hur det fungerar. Skriva varje nytt ord under det förgående ordet som jag har gjort ovan och håll dig till reglerna.

Testa med detta pussel:

EYE (startord)

LID (Slutord)

Därefter går du över till att skriva pseudokod för pusslet.
Tänk på!

Din pseudokod måste innefatta kontroller som kontrollerar användarens input. Användaren får inte:

    Ange ett ord som inte inkluderas i varaibeln ordbok.
    Ändra fler eller färre bokstäver än 1 per runda. (Koden för detta MÅSTE abstraheras i en separat funktion)

## Krav

För Godkänt måste du:

    Göra G-uppgiften
    Skapa ett flödesdiagram över processen
    Skapa pseudokod som skulle fungera

För Väl Godkänt måste du:

    Göra G- och VG-uppgiften
    Skapa ett flödesdiagram över processerna
    Skapa pseudokod som skulle fungera för båda programmen

## Inlämning
Uppladdning av ditt repo på Github senast 20/12 23:59! Ta en printscreen över ditt / dina flödesdiagram och klistra in i readme-filen i ditt repo.