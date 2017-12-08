import React, { Component } from "react";
import Taggle from "taggle";
let taggle = Taggle();

class Modal extends Component {
  render() {
    let modal = this.props.modal;


    return (
       <div className="modal" style={{display:modal ? "block": "none"}} >
          <div className="modal-content">
            <form onSubmit={this.props.addRecipe}>
              <div className="form-group">
                <label>Recipe Name:</label>
                <input name="recipe_Name" onChange={this.props.handleInputChange} />
                </div>



              <div className="form-group">
                <label>Ingredients</label>

                <input id="example1" name="recipe_Ingredients" onChange={this.props.handleInputChange}/>
                </div>



              <div className="form-group">
                <label>Directions</label>
                <textarea name="recipe_Directions" onChange={this.props.handleInputChange}/>
              </div>



              <button className="btn btn-primary">Add Recipe!</button>
            </form>
            <span className="close" onClick={this.props.modalController}>&times;</span>
          </div>

        </div>
    );
  }
}
export default Modal;
