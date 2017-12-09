import React, { Component } from "react";
import Modal from "./Modal";
import { Accordion, Panel } from "react-bootstrap";
import Taggle from "taggle";
// import "./style/taggle.css";
import "./style/taggle.min.css";
import "./style/projects.min.css";
import "./style/twilight.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      listOfRecipes: [],
      value: ""
    };
    this.modalController = this.modalController.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }
  modalController() {
    let showModal = this.state.modal;
    showModal = !showModal;
    this.setState({
      modal: showModal
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  addRecipe(event) {
    event.preventDefault();
    let listOfRecipes = this.state.listOfRecipes;
    let recipe = {
      name: this.state.recipe_Name,
      ingredients: [],
      directions: this.state.recipe_Directions,
      id: this.state.listOfRecipes.length
    };
    listOfRecipes.push(recipe);
    this.setState({
      listOfRecipes: listOfRecipes,
      modal: false
    });
    document.getElementById("create-recipe-form").reset();
    console.log(this.state.listOfRecipes);
  }

  componentDidMount(){
    const listOfTags = new Taggle("example1",{
    });
    console.log(listOfTags.list)

  }

  render() {
    let listOfRecipes = this.state.listOfRecipes.map(recipe => {
      return (
        <Panel header={recipe.name} eventKey={recipe.id} key={recipe.id}>
          {recipe.directions}
        </Panel>
      );
    });

    return (
      <div className="container">
        <button className="add_Recipe" onClick={this.modalController}>
          Add Recipe
        </button>
        <Modal
          modal={this.state.modal}
          addRecipe={this.addRecipe}
          handleInputChange={this.handleInputChange}
          modalController={this.modalController}
        />
        <Accordion>
          {listOfRecipes}
        </Accordion>

      </div>
    );
  }
}

export default App;
