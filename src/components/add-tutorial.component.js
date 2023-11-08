import React, { Component } from "react";
import TutorialService from "../services/tutorial.service.js";
import { withRouter } from '../common/with-router.js';

class AddTutorial extends Component{

    constructor(props) {

        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTechnology = this.onChangeTechnology.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
      
    
        //inizializzazione dello state della component
        //(si può fare nelk costruttore oppure si può fare
        // utilizzando uno strumento sintattico React chiamato 
        //hook-> fuori dal costruttore)

        this.state = {
          name: "",
          technology: "",
          description: ""
        };
      }

    /*
      Tre metodi (onChange) che gestiscono
      il cambiato di stato ogni
      volta che si verifica una
      modifica rispetto al DOM
      originario

      Tutti e tre i metodo devono
      essere bindati allo stato 
      della component all'interno del
      costruttore della component
      (in generale è necessario per tutti 
      quei metodi di una Component che gestiscono
      lo stato)
      */
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
  
    onChangeTechnology(e) {
      this.setState({
        technology: e.target.value
      });
    }

    onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
      }


      /*
      tale metodo viene invocato al click
      sul button della form e invoca a sua
      volta il metodo saveTutorial della
      classe TutorialService che riceverà
      un Oggetto Javascript con dentro lo stato
      della component e sarà trasformato in un JSON
      da inviare all'operazione da consumare del
      Web Service Provider
      */
      saveTutorial() {
        var data = {
          name: this.state.name,
          technology: this.state.technology,
          description: this.state.description,
        };

        TutorialService.saveTutorial(data)
        .then(response => {
          this.setState({
            name: response.data.name,
            technology: response.data.technology,
            description: response.data.description
  
          });

          /*
          redirect verso una Component che viene caricata
          da Node.js sulla base dell'id indicato nella
          funzione navigate. Node.js, visto l'id inserito
          nel navigate, va a vedere se nell'App.js esiste
          una rotta di navigazione che corrisponde all'id
          e,se esiste, vede qual è la Component associata
          all'id e la carica a Runtime
          */

          console.log(response.data);
          this.props.router.navigate('/tutorials');

        })
        .catch(e => {
          console.log(e);
        });
    }

    render() {
        return (
          <div className="submit-form">
              <div>
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={this.state.name}
                    onChange={this.onChangeName}
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Technology</label>
                  <input
                    type="text"
                    className="form-control"
                    id="technology"
                    required
                    value={this.state.technology}
                    onChange={this.onChangeTechnology}
                    name="technology"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                  />
                </div>
    
                
                <button onClick={this.saveTutorial} className="btn btn-success">
                  Submit
                </button>
              </div>
          </div>
        );
      }
    }

    export default withRouter(AddTutorial);
