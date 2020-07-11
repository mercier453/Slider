import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: 4,
      numarray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''],
      emptyIndex: 15
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
   // on load shuffle array
    // create copy of state array
    let shuffledarray = [...this.state.numarray];
    for(let i = shuffledarray.length-1; i > 0; i--){
      // set random index
      const j = Math.floor(Math.random() * i)
      // get current item at i index
      const temp = shuffledarray[i]
      // set i index to j index
      shuffledarray[i] = shuffledarray[j]
      // set j index to temp held item
      shuffledarray[j] = temp;
    }
    // get location of empty tile
    let emptyIndex = shuffledarray.indexOf('');
    // set numarray and empty index state
    this.setState({
      emptyIndex: emptyIndex,
      numarray: shuffledarray
    })
  }
  handleClick(event) {
    // get empty tile location
    let emptyindex = this.state.emptyIndex;
    // get target tile index location
    let targetindex = parseInt(event.target.getAttribute('data-index'));
    // if target is +/- 1 or +/- grid size
    if(targetindex === emptyindex-1 || targetindex === emptyindex+1 || targetindex === emptyindex- this.state.grid || targetindex === emptyindex + this.state.grid) {
      // make copy of state array
      let updatedArray = [...this.state.numarray];
      // set empty tile to target tile data
      updatedArray[emptyindex] = updatedArray[targetindex];
      // set target to empty
      updatedArray[targetindex] = '';
      // set state for revised array and emptyindex
      this.setState({
        numarray: updatedArray,
        emptyIndex: targetindex
      })
    }
  }
  render() {
    
    return (
      <div className="App">
        <Tiles grid={this.state.grid} array={this.state.numarray} onclick={this.handleClick} emptyIndex={this.state.emptyIndex} />
      </div>
    );
  }
}
const Tiles = (props) => {
    const tiles = props.array.map((item, index) => {
      let classname = '';
      switch(index){
        case props.emptyIndex:
          classname = "empty";
          break;
        case props.emptyIndex - 1:
          classname = "active tile";
          break;
        case props.emptyIndex + 1:
          classname = "active tile";
          break;
        case props.emptyIndex + props.grid:
          classname = "active tile";
          break;
        case props.emptyIndex - props.grid:
          classname = "active tile";
          break;
        default:
          classname = "tile"
      }
      return <li className={classname} key={item.toString()} data-index={index} id={'item_' + item.toString()} onClick={props.onclick}>{item}</li>
    })
    return (
      <ul id="board">
        {tiles}
      </ul>    
    )
}
export default App;
