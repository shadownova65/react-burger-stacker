import React from 'react';
import './App.css';
import Ingredients from './Ingredients'
import Stacks from './Stacks'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      stacks: [],
      newIngredient: ''
    }
    this.addToStack = this.addToStack.bind(this);
    this.clearStacks = this.clearStacks.bind(this);
    this.undoStack = this.undoStack.bind(this);
    this.addAnIngredient = this.addAnIngredient.bind(this);
    this.setNewIngredient = this.setNewIngredient.bind(this);
  }

  addToStack(e) {
    let stackscopy = Array.from(this.state.stacks);
    var x = parseInt(e.target.value)
    console.log(x);
    stackscopy.unshift(x);
    this.setState({
      stacks: stackscopy
    })
  }

  undoStack(e) {
    let stackscopy = Array.from(this.state.stacks);
    stackscopy.shift();
    this.setState({
      stacks: stackscopy
    })
  }

  clearStacks(e) {
    this.setState({
      stacks: []
    })
  }

  addAnIngredient(e) {
    e.preventDefault();
    let ingredientsCopy = Array.from(this.state.ingredients);
    let newIngredient = {
                          name: this.state.newIngredient,
                          color: 'white'
                        };
    ingredientsCopy.push(newIngredient);
    this.setState({
      ingredients: ingredientsCopy,
      newIngredient: ''
    })
  }

  setNewIngredient(e) {
    this.setState({
      newIngredient: e.target.value
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='ingredient pane'>
          <form onSubmit={this.addAnIngredient}>
            <input type='text' placeholder='add a new ingredient' value={this.state.newIngredient} onChange={this.setNewIngredient}/>
          </form>
          <hr/>
          <Ingredients ingredients={this.state.ingredients} addToStack={this.addToStack}/>
        </div>

        <div className='stack pane'>
          <button onClick={this.undoStack}>Undo</button>
          <hr/>
            <Stacks stacks={this.state.stacks} ingredients={this.state.ingredients}/>
          <hr/>
          <button onClick={this.clearStacks}>Clear</button>
        </div>

      </div>
    );
  }
}

export default App;
