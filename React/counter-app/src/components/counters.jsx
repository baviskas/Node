import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{

    render() {
        const { counters, onDelete, onIncrement, onDecrement ,onReset } = this.props;
        return(
            <React.Fragment>
                <button
                    className='btn btn-primary btn-sm m-2'
                    onClick={onReset}
                >
                    Reset Counters
                </button>
                { counters
                    .map(counter =>
                        <Counter
                            key={counter.id}
                            counter={counter}
                            handleDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                        />
                    )
                }
            </React.Fragment>
        )
    }
}

export default Counters;
