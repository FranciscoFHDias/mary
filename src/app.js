import React from'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import Home from './components/Home'
import Consultancy from './components/Consultancy'
import Management from './components/Management'
import Contact from './components/Contact'
import Footer from './components/Footer'

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navbar />
        <ToastContainer position="bottom-right" hideProgressBar={true} />
        <Switch>
          <Route path="/management" component={Management} />
          <Route path="/consultancy" component={Consultancy} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </HashRouter>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))