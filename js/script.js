/* 
Descrizione:
Inizializzare Vue e stampare a schermo un messaggio
 all’interno di un h1, utilizzando le properietà di Vue presenti in data.
Bonus
Aggiungere alla pagina un’immagine, la cui sorgente derivi anch'essa dai data di Vue.
POST BONUS:
Chi non lo ha già fatto, recuperi e completi gli esercizi precedenti
Chi invece è in regola con la consegna degli esercizi può sperimentare,
 in file separato, tutto quello che abbiamo visto oggi!
*/

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        saluto: 'Hello World',
        nome: 'Riccardo',
        cognome: 'Pagni',
        introduce: 'Io sono',
        img: './img/download.png'
    },
    methods: {},
})