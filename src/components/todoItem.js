import React, { Component } from 'react';

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
    };

    removeTask({id}) {
        this.props.removeTask(id);
    }

    render() {
        return (
            <div>
                <button className="removeTodo" onClick={(e) => this.removeTask(this.props.task)}>remove</button>{this.props.task.text}
            </div>
        )
    }
}