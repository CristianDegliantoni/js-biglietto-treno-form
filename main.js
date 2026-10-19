const kmUtente = document.getElementById("chilometri"); // stessa cosa di "esegui"
const bottone = document.getElementById("esegui"); // oppure element.queryselector("esegui")
const selettoreta = document.getElementById("menueta");
const risultato = document.getElementById("risultato")

bottone.addEventListener("click", () => {
    const chilometri = Number(kmUtente.value);
    const prezzoBase = chilometri * 0.21;

    const sconti = {
        adulto: 0,
        minorenne: 0.2,
        over65: 0.4,
    }

    const sconto = sconti[selettoreta.value]
    const prezzoBiglietto = prezzoBase * (1 - sconto);
    risultato.textContent = "prezzo del biglietto: " + prezzoBiglietto.toFixed(2) + " euro";
})
