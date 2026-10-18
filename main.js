const kmUtente = document.getElementById("chilometri"); // stessa cosa di "calcola"
const bottone = document.getElementById("esegui"); // oppure element.queryselector("calcola")



const prezzoAlKm = function (prezzo) {
    return prezzo * 0.21
}

bottone.addEventListener("click", function () {
    const chilometriInseriti = Number(kmUtente.value);
    prezzoAlKm = chilometriInseriti;

    console.log(prezzoAlKm);
})

