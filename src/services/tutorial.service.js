import http from "../http-commons.js";

/*
Axios fornisce tanti metodi per quanti
sono i verbi HTTP regolamentati dalle 
specifiche REST
*/

class TutorialService {

    //http://localhost8081/rest/api/tutorials (GET)
    findAllTutorials() {

        return http.get(``);
    }

    //http://localhost8081/rest/api/tutorials/id/{id} (GET)
    findTutorialById(id) {

        return http.get(`/id/${id}`);

    }

    /*
    http://localhost8081/rest/api/tutorials (POST)
    occorre inviare un JSON al Web Service Provider

    una Component di progetto invocherà tale metodo
    passando in input un oggetto JS che avrà come
    contenuto tutti i dati inseriti dall'utente 
    nella form di registrazione di nuovo tuttorial.
    
    Invocando il metodo POST su http (API Axios) 
    abbiamo la garanzia passando come secondo argomento
    al metodo POST stesso un Oggetto JS, l'Oggetto JS
    venga convertito automaticamente dal method POST
    un file JSON pronto per essere inviato verso il
    Web Service Provider
    */
    saveTutorial(tutorial) {

        return http.post(``, tutorial);

    }

    //http://localhost8081/rest/api/tutorials(PUT)
    updateTutorial(tutorial) {

        return http.put(``, tutorial);
    }

    //http://localhost8081/rest/api/tutorials/id/{id}(DELETE)
    removeTutorial(id) {

        return http.delete(`/id/${id}`);

    }

}

export default new TutorialService();

// TutorialService.saveTutorial();