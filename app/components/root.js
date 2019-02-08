import React from 'react'
import AllCandies from './AllCandies'
import {Route} from 'react-router-dom'
import {showAllCandies} from '../store'

const Root = (props) => {
  return (
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        {/* <Route path='/candies' component={AllCandies} /> */}
        <AllCandies candies={showAllCandies}/>
      </main>
    </div>
  )
}

export default Root
