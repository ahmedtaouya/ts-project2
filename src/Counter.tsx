import React, { Component } from 'react';

// Define state type for the Counter component
interface CounterState {
    count: number;
}

class Counter extends Component<void, CounterState> { // Pass void as the first generic type parameter
    state: CounterState = {
        count: 0
    };

    increment = (): void => {
        this.setState({ count: this.state.count + 1 });
    };

    render(): JSX.Element {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
