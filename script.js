// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

// Deklarerar variabler som kommer att användas
SET variabel totalOrder = 0; // Totalt ordervärde
SET variabel nmbrOfGuests = 0; // Antal gäster
SET variabel tipsDecimal = 0; // Dricks i decimal
SET variabel totalWithTips = 0; // Totalsumma inklusive dricks
SET variabel sumPerGuest = 0; // Summan varje gäst ska betala

// Användarinmatning
INPUT "Ange den totala summan för notan" INTO totalOrder;
INPUT "Ange antalet gäster" = nmbrOfGuests;
INPUT "Ange dricks i decimal" = tipsDecimal;

// Kontrollera att inmatningen är korrekt
IF nmbrOfGuests == 0 || totalOrder == 0 THEN
	PRINT "Antalet gäster eller order kan inte vara 0. Försök igen"
	STOP

// Räkna ihop värde och dricks
SET totalWithTips = totalOrder + (totalOrder * (tipsPercentage));

// Räkna ut vad varje gäst ska betala
SET sumPerGuest = totalWithTips / nmbrOfGuests;

// Skriv ut data
PRINT "Varje gäst ska betala" + sumPerGuest;

*/












// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*


// Deklarerar variabler
SET variabel ordbok = [] // Ordboken innehåller alla giltiga ord
SET variabel startOrd = ''
SET variabel slutOrd = ''
SET variabel nuvarandeOrd = ''
SET variabel count = 0

function startGame() {
    // Väljer två slumpmässiga ord från ordboken
    DO
        SET startOrd = välj ett random ord ur array ordbok
        SET slutOrd = välj ett random ord ur array ordbok
    WHILE LENGTH(startOrd) != LENGTH(slutOrd) // Loopa tills orden är lika långa

    PRINT "Ditt startord är: " + startOrd
    PRINT "Ditt slutord är: " + slutOrd

    play() // Starta spel-loopen
}

function play() {
    SET nuvarandeOrd = startOrd // Starta med startordet
    SET count = 0

    WHILE nuvarandeOrd != slutOrd
        PRINT "Nuvarande ord är: " + nuvarandeOrd
        PRINT "Skriv in ett nytt ord som skiljer sig med en bokstav:"

        INPUT användarInput INTO nyttOrd

        // Validera användarens inmatning
        IF isValidWord(nyttOrd) && isOneLetterApart(nuvarandeOrd, nyttOrd)
            SET nuvarandeOrd = nyttOrd
            ADD 1 TO count
            PRINT "Bra jobbat! Ditt nuvarande ord är: " + nuvarandeOrd + " och ditt slutord är: " + slutOrd
        ELSE
            PRINT "Ogiltig inmatning! Ordet måste skilja sig med exakt en bokstav och finnas i ordboken."
        ENDIF
    ENDWHILE

    PRINT "Grattis! Du klarade spelet på " + count + " försök."
}

function isValidWord(nyttOrd) {
    RETURN ordbok.includes(nyttOrd) // Kontrollera om ordet finns i ordboken. True om det finns, false om det inte finns.
}

function isOneLetterApart(wordOne, wordTwo) {
    IF LENGTH(wordOne) != LENGTH(wordTwo)
        RETURN FALSE // Orden måste vara lika långa

    SET variabel diffCount = 0

    FOR varje index i i wordOne
        IF wordOne[i] != wordTwo[i]
            diffCount++
        ENDIF
    ENDFOR

    // Returnera true om exakt en skillnad finns, annars false
    RETURN diffCount == 1
}


*/