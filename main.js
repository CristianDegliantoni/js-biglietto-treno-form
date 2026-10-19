const kmUtente = document.getElementById("chilometri"); // stessa cosa di "esegui"
const bottone = document.getElementById("esegui"); // oppure element.queryselector("esegui")
const selettoreta = document.getElementById("menueta");
const risultato = document.getElementById("risultato");
const nomeInput = document.getElementById("inseriscinome");
const form = document.getElementById("form-biglietto")


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = nomeInput.value;
    const chilometri = Number(kmUtente.value);
    const tariffa = selettoreta.value;
    // 3. Calcolo prezzi
    const prezzoBase = chilometri * 0.21;
    const sconti = {
        adulto: 0,
        minorenne: 0.2,
        over65: 0.4,
    };
    const sconto = sconti[tariffa];
    const prezzoFinale = prezzoBase * (1 - sconto);
    risultato.innerHTML = `
        <h3>Dettagli Biglietto:</h3>
        <p>Passeggero: ${nome}</p>
        <p>Tariffa applicata: ${tariffa}</p>
        <p>Prezzo base: ${prezzoBase.toFixed(2)} €</p>
        <p>Prezzo finale scontato: ${prezzoFinale.toFixed(2)} €</p>
    `;
});

