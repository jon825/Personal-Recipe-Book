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
    this.deleteRecipe = this.deleteRecipe.bind(this);
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

  deleteRecipe(index){
    let listOfRecipes = this.state.listOfRecipes;
    let deleteRecipe = listOfRecipes.splice(index,1);
    console.log(deleteRecipe)
    this.setState({
      listOfRecipes:listOfRecipes
    })
    console.log(this.state.listOfRecipes)
  }

  addRecipe(event) {
    event.preventDefault();
    let listOfRecipes = this.state.listOfRecipes;
    let arrayOfIngredients = document.getElementsByClassName("taggle");
    arrayOfIngredients = Object.keys(arrayOfIngredients).map(key=>{
      return arrayOfIngredients[key].innerText;
    })
    let recipe = {
      name: this.state.recipe_Name,
      ingredients: arrayOfIngredients,
      directions: this.state.recipe_Directions,
      id: this.state.listOfRecipes.length
    };
    if(recipe.name !== undefined && recipe.directions !== undefined){
      document.getElementById("create-recipe-form").reset();

      listOfRecipes.push(recipe);
      this.setState({
        recipe_Name:"",
        recipe_Directions:"",
        listOfRecipes: listOfRecipes,
        modal: false
      });
    }
  }

  componentDidMount(){
    const listOfTags = new Taggle("example1");
    listOfTags.removeAll();

  }

  render() {
    let listOfRecipes = this.state.listOfRecipes.map((recipe, index) => {
      return (
        <Panel header={recipe.name} eventKey={recipe.id} key={recipe.id}>
          {recipe.directions}
          <span className="close" onClick={()=>{this.deleteRecipe(recipe.id)}}>&times;</span>
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
