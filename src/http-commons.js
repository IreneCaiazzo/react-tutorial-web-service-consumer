import axios from "axios";

/*
configurazione centralizzata utile per non
ripetere all'interno della classe service
che conterrà tutti i metodi che si occupano di 
consumare le operazioni Rest, in ogni metodo
il superpath di chiamata
*/

export default axios.create({
  baseURL: "http://localhost:9090/rest/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});
