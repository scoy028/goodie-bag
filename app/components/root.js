import React from 'react'
import {Route, Link} from 'react-router-dom'
import AllCandies from '../components/AllCandies'

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/candies'>Candy Bag</Link></li>
        </ul>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route path='/candies' component={AllCandies} />
      </main>
    </div>
  )
}

export default Root
