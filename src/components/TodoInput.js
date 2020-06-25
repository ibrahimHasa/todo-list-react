import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleSubmit, handleChange, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-dark text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input type="text" className='form-control text-capitalize'
            placeholder='add todo item'
            value={item} onChange={handleChange}
             />
          </div>
          <button type="submit" className='btn btn-block btn-dark mt-3  text-capitalize font-weight-bold '  >add item</button>
        </form>
      </div>
    );
  }
}
