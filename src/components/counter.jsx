import React, {Component} from "react";

class Counter extends Component {

    formatCount = () => {
        return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    }

    render() {
        return (
            <div>
                <span> {this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
        )
    }

}

export default Counter;