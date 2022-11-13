// Write your code here
import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    displayId: 0,
  }

  leftReview = () => {
    this.setState(previousState => ({
      displayId:
        previousState.displayId !== 0
          ? previousState.displayId - 1
          : previousState.displayId,
    }))
  }

  rightReview = () => {
    const {reviewsList} = this.props
    this.setState(previousState => ({
      displayId:
        previousState.displayId !== reviewsList.length - 1
          ? previousState.displayId + 1
          : previousState.displayId,
    }))
  }

  render() {
    const {displayId} = this.state
    const {reviewsList} = this.props
    const filteredReview = reviewsList.filter(
      (each, index) => index === displayId,
    )
    const {imgUrl, username, companyName, description} = filteredReview[0]
    return (
      <div className="home">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} />
          <div className="arrow-buttons-container">
            <button
              type="button"
              className="arrow-btn"
              testid="leftArrow"
              onClick={this.leftReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="username">{username}</p>
            <button
              type="button"
              className="arrow-btn"
              testid="rightArrow"
              onClick={this.rightReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p>{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
