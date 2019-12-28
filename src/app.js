import React from'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

class App extends React.Component {

  render() {
    return(
      <HashRouter>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer/>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))