import React, {Component} from 'react';

export default class TodoInput extends Component{
    constructor(props) {
        super(props)

        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);


    }

    handleChange(e) {
        console.log(e.target);
        this.setState({value: e.target.value});
    }

    addTask(value) {
        console.log("Task: " , value );
        if(value.length > 0) {
            this.props.addTask(value);
            this.setState({value: ""});
        }
    }



    render() {
        return (
            <div>
                <input className = "todo-input" size = "35" type = "text" value ={this.state.value} placeholder = "Your to do?" onChange={this.handleChange} />
                <button className = "todo-btn btn btn-primary" onClick={() => this.addTask(this.state.value)}>Submit</button>
            </div>
        );
    }
}