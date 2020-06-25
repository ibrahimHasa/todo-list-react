import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items: [
      { id: 1, title: 'wake up' },
      { id: 2, title: 'make beakfast' },
    ],
    id: uuidv4(),
    item:'',
    editItem: false
  };
  handleChange = (e) => {}
  handleSubmit = (e) => {}
  clearList = () => {}
  handleDelete = (id) => {console.log(`handle delete ${id}`)}
  handleEdit = (id) => {console.log(`handle edit ${id}`)
  };
  render() {
  return (
    <div>
    <div className="container text-center">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
         <h3 className='text-uppercase text-center text-primary'>todo input</h3>
      <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem = {this.state.editItem} />
      <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} editItem = {this.state.editItem} />
      </div>
        
      </div>
    </div>
     
    </div>
  );
}
}

export default App;
