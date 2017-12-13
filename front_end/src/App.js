import React, { Component } from "react";
import Modal from "./Modal";
import { Accordion, Panel } from "react-bootstrap";
import Taggle from "taggle";
import "./style/taggle.min.css";
import "./style/projects.min.css";
import "./style/twilight.css";
import "./App.css";
import axios from 'axios';

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

  componentWillMount(){
    axios.get('http://localhost:8080/api/recipes')
      .then(res =>{
        this.setState({listOfRecipes:res.data})
      })
  }

  // componentWillUpdate(){
  //   axios.post('http://localhost:8080/api/recipes/update', this.state.listOfRecipes);
  // }


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
    }, ()=>{
      axios.delete('http://localhost:8080/api/recipes/:id', deleteRecipe)
    })
  }

  addRecipe(event) {
    event.preventDefault();
    let listOfRecipes = this.state.listOfRecipes;
    let listOfInputIngredients = this.taggle.getTagValues();
    let recipe = {
      name: this.state.recipe_Name,
      ingredients: listOfInputIngredients,
      directions: this.state.recipe_Directions,
    };
    if(recipe.name !== undefined && recipe.directions !== undefined){
      document.getElementById("create-recipe-form").reset();
      listOfRecipes.push(recipe);
      this.setState({
        recipe_Name:"",
        recipe_Directions:"",
        listOfRecipes: listOfRecipes,
        modal: false
      }, ()=>{
        axios.post('http://localhost:8080/api/recipes/update', recipe);
      })
    }
    this.taggle.removeAll();
  }

  componentDidMount(){
    this.taggle = new Taggle("example1");
  }

  render() {

    let listOfRecipes = this.state.listOfRecipes.map((recipe, index) => {
      return (
        <Panel header={recipe.name} eventKey={index} key={index}>
          {recipe.directions}
          <span className="close" onClick={()=>{this.deleteRecipe(index)}}>&times;</span>
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
