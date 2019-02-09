import React from 'react'
import { connect } from 'react-redux'
import {showAllCandies, fetchCandies} from '../reducers'

class AllCandies extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //use fetchCandies to grab candies data to use in props area
    this.props.fetchCandies()
  }
  render() {
    return (
      <div>
        <ul>
        {this.props.candies.map((candy) => {
          return (
            <div key={candy.id}>
              <img src={candy.imageUrl} height='20%' width='20%' />
              <li>{candy.name}</li>
              <p>{candy.quantity}</p>
            </div>
          )
        })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state, candies: [...state.candies]}
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAllCandies: (candies) => {dispatch(showAllCandies(candies))},
    fetchCandies: () => {dispatch(fetchCandies())}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCandies)
