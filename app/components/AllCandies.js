import React from 'react'

export default class AllCandies extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>hey</p>
        <ul>
        {this.props.candies.map((candy) => {
          return (
            <li key={props.candy.id}>{candy.name}</li>
          )
        })}
        </ul>
      </div>
    )
  }
}
