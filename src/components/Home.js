import React from 'react'
import Wagamama from '../img/Wagamama.png'
import Nandos from '../img/Nandos.png'
import Tortilla from '../img/Tortilla.png'
import Travelodge from '../img/travelodge.jpeg'
import British from '../img/British.png'
import Commonwealth from '../img/Commonwealth.png'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render(){
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-6">Freelance Human Resources Consultant</h1>
          <p className="lead">
            In business, it’s{' '}
            <span className="lead-title">The People Element</span> that
            counts......
          </p>
          <ul>
            <li>Recruiting, engaging and retaining talent</li>
            <li>Identifying learning and development needs</li>
            <li>Designing and delivering interactive training workshops</li>
            <li>Creating user-friendly forms, guides and manuals</li>
            <li>Providing pragmatic employee relations advice</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="border-white">
              <div className="card-body">
                <h5 className="card-title">
                  Consultancy and Training Products
                </h5>
                <ul>
                  <li>
                    Commercially focused interventions and solutions to develop
                    organisations
                  </li>
                  <li>
                    Interacting with and influencing all key stakeholders to
                    gain commitment
                  </li>
                  <li>Operational background in hospitality management</li>
                </ul>
                <Link to="/consultancy" className="btn btn-primary">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="border-white">
              <div className="card-body">
                <h5 className="card-title">Interim Management</h5>
                <ul>
                  <li>Human Resources and Learning and Development roles</li>
                  <li>
                    Proven track record in both private and public sector
                    organisations
                  </li>
                  <li>
                    Experience of managing teams and of operating as a business
                    partner
                  </li>
                </ul>
                <Link to="/management" className="btn btn-primary">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="clients-title">Clients:</p>
        <div className="clients">
          <img src={Nandos} className="mx-auto" alt="Nando/'s logo" />
          <img
            src={British}
            className="mx-auto"
            alt="British Transport Police logo"
          />
          <img src={Wagamama} className="mx-auto" alt="Wagamama logo" />
          <img
            src={Commonwealth}
            className="mx-auto"
            alt="Rossopomodoro logo"
          />
          <img src={Tortilla} className="mx-auto" alt="Tortilla logo" />
          <img src={Travelodge} className="mx-auto" alt="Travelodge logo" />
        </div>
      </div>
    )
  }
}

export default Home