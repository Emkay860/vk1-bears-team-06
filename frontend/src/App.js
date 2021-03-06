import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ResortDetailScreen from './screens/ResortDetailScreen'
import LoginScreen from './screens/LoginScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ResortListAdminScreen from './screens/ResortListAdminScreen'
import ResortListOwnerScreen from './screens/ResortListOwnerScreen'
import ResortEditAdminScreen from './screens/ResortEditAdminScreen'
import ResortEditOwnerScreen from './screens/ResortEditOwnerScreen'
import ResortCreateAdminScreen from './screens/ResortCreateAdminScreen'
import ResortCreateOwnerScreen from './screens/ResortCreateOwnerScreen'
import SearchResultScreen from './screens/SearchResultScreen'
import ActivateAccountScreen from './screens/ActivateAccountScreen'
import SentEmailScreen from './screens/SentEmailScreen'



const App = () => {
  return (
    <Router>  
       <Header />
          <div className="container">
             <Route path='/login' component={LoginScreen} exact />
             <Route path='/register' component={RegisterScreen} exact />
             <Route path='/profile' component={ProfileScreen} exact />
             <Route path='/admin/userslist' component={UserListScreen} exact />
             <Route path='/admin/resortslist' component={ResortListAdminScreen} exact />
             <Route path='/admin/resorts/create' component={ResortCreateAdminScreen} exact />
             <Route path='/admin/resort/:id/edit' component={ResortEditAdminScreen} exact />

             <Route path='/resort-owner/resortslist' component={ResortListOwnerScreen} exact />
             <Route path='/resort-owner/resorts/create' component={ResortCreateOwnerScreen} exact />
             <Route path='/resort-owner/resort/:id/edit' component={ResortEditOwnerScreen} exact />

             <Route path='/admin/user/:id/edit' component={UserEditScreen} exact />
             <Route path='/' component={HomeScreen} exact />
             <Route path='/search/:keyword' component={SearchResultScreen} exact />
             <Route path='/search/:keyword/page/:pageNumber' component={SearchResultScreen} exact />
             <Route path='/resorts/:id' component={ResortDetailScreen} />
             <Route path='/auth/activate/:token' component={ActivateAccountScreen} />
             <Route path='/confirm-email/email=:email' component={SentEmailScreen} />
          </div>
       <Footer />
    </Router>
  )
}

export default App