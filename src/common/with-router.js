import { useLocation, useNavigate, useParams } from "react-router-dom";

/*
questo file dichiara sotto forma di costante 
una funzione JS che centralizza e uniforma
l'uiso delle funzioni predefinite dell'API 
react-touter-dom da parte di tutte le componenti
di progetto

ad esempio per ogni component basterà usare la 
variabile location per invocare e usare la funzione 
userlocation che è una delle funzioni predefinite
da react-router-dom per gestire il flusso di navigazione
*/

export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
};
