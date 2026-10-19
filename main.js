const kmUtente = document.getElementById("chilometri"); // stessa cosa di "calcola"
const bottone = document.getElementById("esegui"); // oppure element.queryselector("calcola")



bottone.addEventListener("click", () => {
    const chilometri = Number(kmUtente.value);

    const prezzoBase = chilometri * 0.21;

    console.log(prezzoBase);
})

