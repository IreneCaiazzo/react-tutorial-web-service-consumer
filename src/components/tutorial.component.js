import React, { Component } from "react";
import TutorialService from "../services/tutorial.service.js";
import { withRouter } from '../common/with-router.js';

class Tutorial extends Component {

  constructor(props) {

    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTechnology = this.onChangeTechnology.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.findTutorialById = this.findTutorialById.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.removeTutorial = this.removeTutorial.bind(this);

    this.state = {
      currentTutorial: {
        name: "",
        technology: "",
        description: ""

      }
    };
  }

  componentDidMount() {

    /*
    invocazione del metodo findTutorialById() della 
    Component stessa, che a sua volta invoca il 
    metodo del Service di React che a sua volta
    consuma l'operazione esposta dal Web Service Provider
    e restituisce il tutorial che verrà visualizzato
    all'interno della form per cancellare o aggiornare 
    */ 
   
    this.findTutorialById(this.props.router.params.id);
  }

  onChangeName(e) {

    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          name: name
        }
      };
    });
  }

  onChangeTechnology(e) {

    const technology = e.target.value;
    
    this.setState(prevState => ({

      currentTutorial: {
        ...prevState.currentTutorial,
        technology: technology
      }
    }));
  }

  onChangeDescription(e) {

    const description = e.target.value;
    
    this.setState(prevState => ({

      currentTutorial: {
        ...prevState.currentTutorial,
        description: description
      }
    }));
  }

  findTutorialById(id) {
   
    TutorialService.findTutorialById(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  
  updateTutorial() {

    TutorialService.updateTutorial(
      
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/tutorials');
      })
      .catch(e => {
        console.log(e);
      });
  }

  removeTutorial() {    
    TutorialService.removeTutorial(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/tutorials');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial} = this.state;

    return (
      <div>
          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentTutorial.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="technology">Technology</label>
                <input
                  type="text"
                  className="form-control"
                  id="technology"
                  value={currentTutorial.technology}
                  onChange={this.onChangeTechnology}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>
            </form>

            

            <button
              className="btn btn-danger"
              onClick={this.removeTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
          </div>
      </div>
    );
  }
}

export default withRouter(Tutorial);
