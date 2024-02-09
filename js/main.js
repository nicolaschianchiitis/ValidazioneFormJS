// [parola]@[parola].[parola da 2 a 4 caratteri] --> case insensitive
let regExpEmail = /\w[@]\w+\.+\w{2,4}/i;
// +[prefisso lungo da 2 a 4 cifre][possibile spazio][prime 3 cifre][possibile spazio][altre 3 cifre][ultime 4 cifre] --> case insensitive
let regExpTelefono = /\+\d{2,4}[ ]?\d{3}[ ]?\d{3}[ ]?\d{4}/i;
// [nome, comprensivo del numero civico], ([provincia: due lettere]) --> case insensitive
let regExpIndirizzo = /\w[, ][(][a-z]{2}[)]/i;

function validaInput(){
    let logErrori = document.getElementsByClassName("log");
    for (log in logErrori){
        log.innerHTML = "";
    }

    let nome = document.modulo.nome.value;
    if (!(nome != "" && isNaN(nome))){
        logErrori[0].innerHTML = "Errore! Nome mancante.";
        document.modulo.nome.focus();
        return false;
    } else {
        logErrori[0].innerHTML = "";
    }

    let cognome = document.modulo.cognome.value;
    if (!(cognome != "" && isNaN(cognome))){
        logErrori[1].innerHTML = "Errore! Cognome mancante.";
        document.modulo.cognome.focus();
        return false;
    } else {
        logErrori[1].innerHTML = "";
    }

    let indirizzo = document.modulo.indirizzo.value;
    if (!(regExpIndirizzo.test(indirizzo) && indirizzo != "" && isNaN(indirizzo))){
        if (indirizzo == ""){
            logErrori[2].innerHTML = "Errore! Indirizzo mancante.";
        } else{
            logErrori[2].innerHTML = "Errore! Indirizzo non valido.";
        }
        document.modulo.indirizzo.focus();
        return false;
    } else{
        logErrori[2].innerHTML = "";
    }

    let numTelefono = document.modulo.numTelefono.value;
    if (!(regExpTelefono.test(numTelefono) && numTelefono != "" && isNaN(numTelefono))){
        if (numTelefono == ""){
            logErrori[3].innerHTML = "Errore! Numero di telefono mancante.";
        } else{
            logErrori[3].innerHTML = "Errore! Numero di telefono non valido.";
        }
        document.modulo.numTelefono.focus();
        return false;
    } else{
        logErrori[3].innerHTML = "";
    }

    let email = document.modulo.email.value;
    if (!(regExpEmail.test(email) && email != "" && isNaN(email))){
        if (email == ""){
            logErrori[4].innerHTML = "Errore! Email mancante."
        } else{
            logErrori[4].innerHTML = "Errore! Email non valida."
        }
        return false;
    } else{
        logErrori[4].innerHTML = "";
    }

    let spedizione = document.modulo.spedizione;
    if (!(spedizione[0].checked || spedizione[1].checked)){
        logErrori[5].innerHTML = "Errore! Selezionare un'opzione.";
        return false;
    } else{
        logErrori[5].innerHTML = "";
    }

    document.modulo.submit.disabled = false;
    return true;
}

function reset(){
    document.modulo.nome.value = "";
    document.modulo.cognome.value = "";
    document.modulo.indirizzo.value = "";
    document.modulo.numTelefono.value = "";
    document.modulo.email.value = "";
    document.modulo.spedizione[0].checked = false;
    document.modulo.spedizione[1].checked = false;
    document.modulo.ricevutaEmail.checked = false;
    document.modulo.ricevutaCartacea.checked = false;
    document.modulo.submit.disabled = true;
    document.getElementById("esito").innerHTML = "";
}

function invia(){
    document.getElementById("esito").innerHTML = "Dati trasmessi correttamente!";
}