import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ResortDetail from './screens/ResortDetail'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router> 
       <Header />
          <div className="container">
             <Route path='/' component={HomeScreen} exact />
             <Route path='/resorts/:id' component={ResortDetail} />
          </div>
       <Footer />
    </Router>
  )
}

export default App