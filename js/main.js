// almeno una lettera maiuscola
let regexNomeCognome = /(?=.*[A-Z])(?=.*[a-z])/gm;
// [parola]@[parola].[parola da 2 a 4 caratteri] --> case insensitive
let regexMail = /[a-z0-9\.]+@[a-z\.]{1,3}[a-z]+/gm;
// +[prefisso lungo da 2 a 4 cifre][possibile spazio][prime 3 cifre][possibile spazio][altre 3 cifre][ultime 4 cifre] --> case insensitive
let regexTelefono = /\+\d{2,4}[ ]?\d{3}[ ]?\d{3}[ ]?\d{4}/gmi;
// [nome, comprensivo del numero civico], ([provincia: due lettere]) --> case insensitive
let regexIndirizzo = /\w,\s([a-z]{2})/gmi;

function validaInput(){
    let logErrori = document.getElementsByClassName("log");
    for (log in logErrori){
        log.innerHTML = "";
    }

    let nome = document.modulo.nome.value;
    if (!(nome != "" && isNaN(nome) && regexNomeCognome.test(nome))){
        document.modulo.nome.setAttribute("style", "border: 2px solid red");
        logErrori[0].innerHTML = "Errore! Nome mancante.";
        document.modulo.nome.focus();
        return false;
    } else {
        document.modulo.nome.setAttribute("style", 'border: ""');
        logErrori[0].innerHTML = "";
    }

    let cognome = document.modulo.cognome.value;
    if (!(cognome != "" && isNaN(cognome) && regexNomeCognome.test(cognome))){
        document.modulo.cognome.setAttribute("style", "border: 2px solid red");
        logErrori[1].innerHTML = "Errore! Cognome mancante.";
        document.modulo.cognome.focus();
        return false;
    } else {
        document.modulo.cognome.setAttribute("style", 'border: ""');
        logErrori[1].innerHTML = "";
    }

    let indirizzo = document.modulo.indirizzo.value;
    if (!(regexIndirizzo.test(indirizzo) && indirizzo != "" && isNaN(indirizzo))){
        document.modulo.indirizzo.setAttribute("style", "border: 2px solid red");
        if (indirizzo == ""){
            logErrori[2].innerHTML = "Errore! Indirizzo mancante.";
        } else{
            logErrori[2].innerHTML = "Errore! Indirizzo non valido.";
        }
        document.modulo.indirizzo.focus();
        return false;
    } else{
        document.modulo.indirizzo.setAttribute("style", 'border: ""');
        logErrori[2].innerHTML = "";
    }

    let numTelefono = document.modulo.numTelefono.value;
    if (!(regexTelefono.test(numTelefono) && numTelefono != "" && isNaN(numTelefono))){
        document.modulo.numTelefono.setAttribute("style", "border: 2px solid red");
        if (numTelefono == ""){
            logErrori[3].innerHTML = "Errore! Numero di telefono mancante.";
        } else{
            logErrori[3].innerHTML = "Errore! Numero di telefono non valido.";
        }
        document.modulo.numTelefono.focus();
        return false;
    } else{
        document.modulo.numTelefono.setAttribute("style", 'border: ""');
        logErrori[3].innerHTML = "";
    }

    let email = document.modulo.email.value;
    if (!(regexMail.test(email) && email != "" && isNaN(email))){
        document.modulo.email.setAttribute("style", "border: 2px solid red");
        if (email == ""){
            logErrori[4].innerHTML = "Errore! Email mancante."
        } else{
            logErrori[4].innerHTML = "Errore! Email non valida."
        }
        return false;
    } else{
        document.modulo.email.setAttribute("style", 'border: ""');
        logErrori[4].innerHTML = "";
    }

    let spedizione = document.modulo.spedizione;
    if (!(spedizione[0].checked || spedizione[1].checked)){
        document.modulo.spedizione.setAttribute("style", "border: 2px solid red");
        logErrori[5].innerHTML = "Errore! Selezionare un'opzione.";
        return false;
    } else{
        document.modulo.spedizione.setAttribute("style", 'border: ""');
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