import React, {Component} from 'react';
import ToDoItems from './ToDoItems'

export default class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state={
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        e.preventDefault();
        if (this._inputElement.value !== ''){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = '';
        }
        console.log(this.state.items);
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render(){
        return(
            <div className="App">
                <h1>To Do List</h1>
                <div className="App-intro">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Task"></input>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        )
    }
}