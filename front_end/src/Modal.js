import React, { Component } from "react";

class Modal extends Component {
  render() {
    let modal = this.props.modal;


    return (
       <div className="modal" style={{display:modal ? "block": "none"}} >
          <div className="modal-content container">
            <form id="create-recipe-form" >
              <div className="form-group row">
                <label className="col-sm-3 col-md-3 col-lg-2">Name:</label>
                <input className="col-sm-9 col-md-9 col-lg-10" name="recipe_Name" onChange={this.props.handleInputChange} />
                </div>
              <div className="form-group row">
                <label className="col-sm-3 col-md-3 col-lg-2">Ingredients:</label>

                <div className="col-sm-9 col-md-9 col-lg-10 input textarea" id="example1"/>
                </div>
              <div className="form-group row">
                <label className="col-sm-3 col-md-3 col-lg-2">Directions:</label>
                <textarea className="col-sm-9 col-md-9 col-lg-10" name="recipe_Directions" onChange={this.props.handleInputChange}/>
              </div>



              <button className="btn btn-primary" onClick={this.props.addRecipe}>Add Recipe!</button>
            </form>
            <span className="close" onClick={this.props.modalController}>&times;</span>
          </div>

        </div>
    );
  }
}
export default Modal;
