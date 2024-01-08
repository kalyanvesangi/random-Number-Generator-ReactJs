import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  randomNumberGenerator = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">Generate a random number between 0 and 100</p>
          <button
            className="button"
            type="button"
            onClick={this.randomNumberGenerator}
          >
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
