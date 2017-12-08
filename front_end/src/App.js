import React, { Component } from "react";
import Modal from "./Modal";
import taggle from "taggle"
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal:false,

      listOfRecipes: [],
      recipe: {
            recipe_name: "",
            ingredients: [],
            directions: ""
          },
      value:"",
      recipe_name:"",
      recipe_directions:"",
      recipe_ingredients:""
    }
    this.modalController = this.modalController.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }
  modalController(){
    let showModal = this.state.modal;
    showModal = !showModal;
    this.setState({
      modal:showModal

    })
    console.log(showModal)
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  addRecipe(event){
    event.preventDefault();
    let listOfRecipes = this.state.listOfRecipes;
    let recipe = {
            recipe_name: this.state.recipe_Name,
            ingredients: [],
            directions: this.state.recipe_Directions
          }
    console.log(recipe)


    // alert(`recipe name: ${this.state.recipe_Name} \nrecipe ingredients:${this.state.recipe_Ingredients} \nrecipe directions:${this.state.recipe_Directions}`)


  }

  render() {
    return (
      <div className="container">
        <button className="add_Recipe" onClick={this.modalController}>Add Recipe</button>
        <Modal modal={this.state.modal} addRecipe={this.addRecipe} handleInputChange={this.handleInputChange} modalController={this.modalController} />


        <ul className="list-group">
          <li className="list-group-item">
            <label>hello</label>
          </li>
          <li className="list-group-item">
            <label>hello</label>
          </li>
          <li className="list-group-item">
            <label>hello</label>
          </li>
          <li className="list-group-item">
            <label>hello</label>
          </li>
        </ul>


        <div id="example1" className="input textarea"></div>
      </div>
    );
  }
}

export default App;
