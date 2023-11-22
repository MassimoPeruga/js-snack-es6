## Snack 1

Il programma identifica la bici più leggera tra un array di oggetti bicicletta, estrae le sue informazioni e aggiorna dinamicamente il contenuto HTML della pagina per visualizzarle.

1. Vengono definiti gli oggetti bicicletta con le loro caratteristiche.

2. Si inizializza una variabile contenente la prima bicicletta nell'array come punto di partenza per confrontare i pesi.

3. Viene eseguito un ciclo che attraversa tutte le biciclette nell'array. Per ogni bicicletta, viene verificato se il suo peso è inferiore al peso della bici considerata più leggera finora. Se sì, la bici corrente diventa la nuova bici più leggera. Alla fine del ciclo, si utilizza la destructuring per estrarre le proprietà (nome, peso, img) della bici considerata più leggera.

5. Viene selezionato il contenitore nel DOM e viene creato un template literal che rappresenta la struttura HTML. Le variabili ottenute dalla destructuring vengono utilizzate per inserire dinamicamente le informazioni della bici più leggera nel template.

7. Il contenuto del DOM viene aggiornato con il template literal, sostituendo il contenuto precedente.

8. Viene selezionata l'immagine nel DOM e vengono aggiornati gli attributi `src` e `alt` con i valori dell'immagine della bici più leggera.



## Snack 2

Il programma dato un array di squadre NBA, genera casualmente due numeri per squadra che rappresentano i punti segnati e i falli subiti, successivamente crea un nuovo array contenente solo il nome della squadra e i falli subiti e stampa entrambi gli array in console.

1. Viene dichiarata la funzione `generaNumeroCasuale`, che accetta due parametri `min` e `max` e restituisce un numero intero casuale compreso tra `min` e `max`.

2. Viene creato un array contenente oggetti rappresentanti squadre NBA, ogni oggetto, oltre alla proprietà `nome`, ne possiede altre due inizialmente inizializzate a 0.

3. Utilizzando un ciclo `forEach`, che viene iterato per ciascuna squadra nell'array, vengono generati casualmente i valori di `puntiFatti` e `falliSubiti` utilizzando la funzione `generaNumeroCasuale` e questi valori vengono assegnati alle rispettive proprietà dell'oggetto squadra.

4. Viene creato un nuovo array chiamato utilizzando il metodo `map` sull'array di partenza, viene utilizzata la destrutturazione per estrarre solo le proprietà `nome` e `falliSubiti` di ciascuna squadra e creare nuovi oggetti con queste proprietà.

5. Utilizzando due cicli `forEach`, vengono stampate in console tutte le proprietà e i loro valori di ogni squadra presente, sia nell'array di partenza che nel nuovo.



## Snack 3

Il programma è una funzione che esegue le seguenti operazioni:

1. **Input**: La funzione riceve tre argomenti:
   - `array`: un array di valori.
   - `a`: un numero.
   - `b`: un numero maggiore di `a`.

2. **Verifica**: Controlla se `a` è effettivamente più piccolo di `b`. Se non lo è, stampa un messaggio di avviso e termina l'esecuzione della funzione.

3. **Filtraggio**: Utilizza il metodo `filter` degli array per creare un nuovo array che contiene solo gli elementi dell'array di input la cui posizione è compresa tra `a` e `b`.

4. **Output**: Restituisce il nuovo array creato.

Ad esempio, se richiamiamo la funzione princiapale con: `[1, 2, 3, 4, 5, 6, 7]`, `2`, `5`, la funzione restituirà un nuovo array `[3, 4, 5]`. Questo perché gli elementi con posizione compresa tra `a = 2` e `b = 5` nell'array di input sono 3, 4 e 5.