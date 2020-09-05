import React, {Component} from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component{
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ]
  };

  handleDelete(counter) {
    let counters = this.state.counters.filter(cntr => cntr.id !== counter);
    this.setState({counters});
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    ++ counter.value;
    counters[index] = {...counter};
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    -- counter.value;
    counters[index] = { ...counter };
    this.setState({ counters });
  };

  handleReset () {
    const counters = [...this.state.counters];
    counters.forEach(counter => {
      counter.value = 0
    });
    this.setState({ counters });
  }
  render() {
    return (
        <React.Fragment>
          <NavBar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
          />
          <main className='container'>
            <Counters
              counters={this.state.counters}
              onDelete={this.handleDelete}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          </main>
        </React.Fragment>
    );
  }
}

export default App;
