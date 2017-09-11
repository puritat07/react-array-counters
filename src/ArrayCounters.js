import React, { Component } from 'react'
import ScalarCounter from './ScalarCounter'

export default class ArrayCounters extends Component {

  constructor() {
    super()
    this.state = {
      count: []
    }
  }

  handleAddCounter = () => {
    this.setState({
      count: [...this.state.count,0]
    })
  }

  handleRemoveCounter = () => {
    this.setState({
      count: [...this.state.count.slice(0,this.state.count.length-1)]
    })
  }

  handleAdd = (index) => () => {
    let i = this.state.count
    i[index] += 1
    this.setState({
      count: i
    })
  }

  handleSubtract = (index) => () => {
    let i = this.state.count
    i[index] -= 1
    this.setState({
      count: i
    })
}
  render() {
    console.log(`Counter state: [ ${this.state.count.map(value=>value+' ')}]`)
    return (
      <div>
        <h1>React Array Counters</h1>
        <h3>[ {this.state.count.map(value=>value+' ')}]</h3>
        {
          this.state.count.map(
            (value,index) => <ScalarCounter key={index} value={value} onAdd={this.handleAdd(index)} onSubtract={this.handleSubtract(index)}/>
          )
        }
        <hr />
        <button onClick={this.handleAddCounter}>
          Add Counter
        </button>
        <button onClick={this.handleRemoveCounter}>
          Remove Counter
        </button>
        <hr />
        <h3>Press <kbd id="shortcut" className="shortcut">⌘⌥J</kbd> to open Developer Tools.</h3>
      </div>
    )
  }
}
