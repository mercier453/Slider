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
    let shuffledarray = [...this.state.numarray];
    for(let i = shuffledarray.length-1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = shuffledarray[i]
      shuffledarray[i] = shuffledarray[j]
      shuffledarray[j] = temp;
    }
    let emptyIndex = shuffledarray.indexOf('');
    this.setState({
      emptyIndex: emptyIndex,
      numarray: shuffledarray
    })
  }
  handleClick(event) {
    let emptyindex = this.state.emptyIndex;
    let targetindex = parseInt(event.target.getAttribute('data-index'));
    if(targetindex === emptyindex-1 || targetindex === emptyindex+1 || targetindex === emptyindex-4 || targetindex === emptyindex+4) {
      let updatedArray = [...this.state.numarray];
      updatedArray[emptyindex] = updatedArray[targetindex];
      updatedArray[targetindex] = '';
      this.setState((prevState) => ({
        numarray: updatedArray,
        emptyIndex: targetindex,
        changedIndex: prevState.emptyIndex
      }))
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
