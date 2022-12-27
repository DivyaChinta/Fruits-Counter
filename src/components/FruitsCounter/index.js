// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onMangoesIncrement = () => {
    this.setState(prevMangoesCount => ({
      mangoesCount: prevMangoesCount.mangoesCount + 1,
    }))
  }

  onBananasIncrement = () => {
    this.setState(prevBananasCount => ({
      bananasCount: prevBananasCount.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="fruits-counter-bg-container">
        <div className="fruits-counter-container">
          <h1 className="fruits-counter-heading">
            Bob ate <span className="fruits-count">{mangoesCount}</span> mangoes{' '}
            <span className="fruits-count">{bananasCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruits-item-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onMangoesIncrement}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruits-item-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onBananasIncrement}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
