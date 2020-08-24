import React, { Component } from 'react';
import './App.css'; //See here App.css is imported to apply css
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


//class based using state
class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Paul', age: 24 },
      { id: '2', name: 'John', age: 22 },
      { id: '3', name: 'Sam', age: 20 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'John', age: 22 },
        { name: 'Pete', age: 22 }
      ]
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //copy array
    const persons = [...this.state.persons];//cloned array
    persons.splice(personIndex, 1); //It mutates original array
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons =  <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>;

      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    

    return (
      <div className="App">
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;

// ---------------------------------------------END--------------------------------------------------
// function based using hook
// How to use states in function based components

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
