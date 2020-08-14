import React, { Component } from 'react';
import './App.css'; //See here App.css is imported to apply css
import Person from './Person/Person';     //Here name could be anything as it is default export


//class based using state
class App extends Component {
  state = {
    persons : [
      {name: 'Paul', age: 24},
      {name: 'John', age: 22},
      {name: 'Sam', age: 20}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age: 24},
        {name: 'John', age: 22},
        {name: 'Pete', age: 22}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name: event.target.value, age: 24},
        {name: 'John', age: 22},
        {name: event.target.value, age: 22}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return(
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button  style={style} onClick= {() => this.switchNameHandler('Don Bosco')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Andre')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Kevin')}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Steve')}
        />
      </div>
    );
  }
}

export default App;

// function based using hook
/* /*const app = props => {
  const [ personState, setPersonState] = useState({
    persons: [
      {name: 'Paul', age: '24'},
      {name: 'John', age: '22'},
      {name: 'San', age: '20'}
    ]
  });

  const switchNameHandler = () => {
    // this.state.persons[0].name = 'Doe';
    // Here this refers to class !!
    setPersonState({
      persons: [
        {name: 'Donald', age: '24'},
        {name: 'John', age: '22'},
        {name: 'San', age: '21'}
      ]
    });
  }
  // switchNameHandler = function () {
  //   console.log('clicked');
      // Here this is undefined
  //   console.table(this.state);
  // }

    return (
      <div className="App">
        <h1>I'm React App</h1>
        <p>This is really working fine!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}> My hobbies : Racing </Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );

    //Alternative way to render it
    //where to render, config, what to render
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this works now'));
  }

export default app; */
