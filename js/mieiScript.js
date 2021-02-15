var elencoNominativi = [];
var blocco;
var i = 0;
var fullName;
             
jQuery(function () {

    // listener per aggiungere un nome
    jQuery("#btnAccetta, #btnAnnulla").on("click", function () {
        if (this.id == "btnAccetta")
            InserisciContatto(fullName);
    });

    // prendo i dati
    jQuery("#btnInserisci").on("click", function () {
        var nome = jQuery("#txtNome").val();
        var cognome = jQuery("#txtCognome").val();
        fullName = nome + " " + cognome;
        
        // controllo che i dati inseriti siano unici
        if (ControlloSeInserito(fullName))
            MandaMessaggioInserimento("Per confermare l'inserimento di " + fullName +" cliccare su accetto");
    });
});

// Metodo per attivare il modal
function MandaMessaggioInserimento(testo) {
    jQuery("#testo-modal").html(testo);
    jQuery("#modal-accettazione").modal("toggle");
}

// richiamo il modal per l'errore
function MandaMessaggioErrore(testo) {
    jQuery("#modal-error-text").html(testo);
    jQuery("#error-modal").modal("toggle");
}

function InserisciContatto(contatto) {
    // Lo aggiungo alla lista di persone
    elencoNominativi[i] = contatto;
    // Creo un blocco gli aggiungo una clase e lo appendo al div numero 7
    blocco = jQuery("<p>" + contatto + "</p>");
    blocco.addClass("inseriti");
    blocco.appendTo("#nominativi");
    i++;
}

function ControlloSeInserito(contatto) {

    for (var i = 0; i < elencoNominativi.length; i++)
        if (contatto == elencoNominativi[i]) {
            MandaMessaggioErrore("Il contatto " + contatto + " è gi&#225 stato inserito!");
            return false;
        }

    return true;
}