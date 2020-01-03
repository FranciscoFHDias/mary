import React from 'react'
import Nandos from '../img/Nandos.png'
import Travelodge from '../img/travelodge.jpeg'
import Wagamama from '../img/Wagamama.png'
import British from '../img/British.png'
import Tortilla from '../img/Tortilla.png'
import Rossopomodoro from '../img/Rossopomodoro.png'
import Creams from '../img/creams.png'
import Colten from '../img/colten.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

class Consultancy extends React.Component {

  render(){
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-6">Consultancy and Training</h1>
          <p className="lead">
            Offering a flexible approach - a quick fix to solve a particular
            issue or long-term input for sustainable change.
          </p>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src={Nandos}
                className="card-img-top"
                alt="Nandos Restaurants logo"
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Designing and delivering a wide range of management
                  development programmes including Coaching Skills, Train the
                  Trainer, Career Development, Influencing Positive Behaviour,
                  Working in Management Teams and Planning, Organising and
                  Delegating
                </li>
                <li className="list-group-item">
                  Training and assessing new Regional Trainers
                </li>
                <li className="list-group-item">
                  Designing and delivering Project Management and Presentation
                  Skills workshops, using participative learning and individual
                  feedback to support internal candidates for promotion
                </li>
                <li className="list-group-item">
                  Writing skills training manuals
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://www.nandos.co.uk/"
                  target="_"
                  className="card-link"
                >
                  <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={Travelodge}
                className="card-img-top"
                alt="Travelodge Hotels logo"
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Creating an accredited development programme to support
                  internal career progression, including the design of the
                  training course and all support materials
                </li>
                <li className="list-group-item">
                  Working in collaboration with a full range of internal
                  stakeholders from Learning and Development and Operations, and
                  the external qualification providers
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://www.travelodge.co.uk/"
                  target="_"
                  className="card-link"
                >
                  <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={Wagamama}
                className="card-img-top"
                alt="Wagamama Restaurants logo"
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Reviewing all HR policies, contracts and the company’s
                  Employee Handbook to ensure legal compliance, ease of use by
                  managers and employees and the right fit to company culture
                </li>
                <li className="list-group-item">
                  Design and delivery of a comprehensive and fully interactive
                  Train the Trainer workshop, rolling it out nationwide in
                  conjunction with the Learning and Development team
                </li>
                <li className="list-group-item">
                  Adapting and delivering a practical and case study based
                  Employee Relations workshop for General Managers and Head
                  Chefs across the whole company
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://www.wagamama.com/"
                  target="_"
                  className="card-link"
                >
                  <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={British}
                className="card-img-top"
                alt="British Transport Police logo"
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Running focus groups representing 2000 employees in order to
                  analyse identified issues around communication, development
                  and motivation
                </li>
                <li className="list-group-item">
                  Reporting back to the Chief Constable with recommendations for
                  action
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="http://www.btp.police.uk/"
                  target="_"
                  className="card-link"
                >
                  <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={Tortilla}
                className="card-img-top"
                alt="Tortilla Restaurants logo"
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Designing and delivering a modular leadership development
                  programme for Area Managers and Heads of Department to
                  increase collaborative working and improve consistency in
                  operational management across the company
                </li>
                <li className="list-group-item">
                  Designing and delivering Communication Skills and Customer
                  Service Management training workshops for managers across the
                  whole company
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://www.tortilla.co.uk/"
                  target="_"
                  className="card-link"
                >
                  <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={Rossopomodoro}
                className="card-img-top"
                alt="Rossopomodoro Restaurants logo"
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Facilitating company growth through the implementation of a
                  new career structure including running management assessment
                  days
                </li>
                <li className="list-group-item">
                  Designing and delivering a series of training workshops in all
                  aspects of people management skills, and using these to engage
                  managers in the creation of all supporting HR and training
                  documentation
                </li>
                <li className="list-group-item">
                  Supporting the operational team, in particular around
                  recruitment, training and the application of TUPE, for
                  restaurant openings within John Lewis stores
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://www.rossopomodoro.co.uk/"
                  target="_"
                  className="card-link"
                >
                  <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Creams} className="card-img-top" alt="Creams logo" />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Rewriting the Employee Handbook to suit the needs of
                  franchisees, managers and employees
                </li>
                <li className="list-group-item">
                  Supporting an internally promoted Recruitment and Development
                  Manager to develop consistency in recruitment advertising
                  copy, HR documentation and the competency framework
                </li>
                <li className="list-group-item">
                  Designing and delivering a modular programme of Supervisory
                  Skills training and a Train the Trainer workshop during a
                  period of rapid company expansion
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://www.creamscafe.com/"
                  target="_"
                  className="card-link"
                >
                  <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={Colten}
                className="card-img-top"
                alt="Colten Care logo"
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Designing and delivering a modular development programme for
                  care home Managers and Receptionists, which provided training
                  in customer service and selling skills
                </li>
                <li className="list-group-item">
                  Enabling cross organisational sharing of good practice in
                  order to increase customer satisfaction levels, market share
                  and profitability
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://www.coltencare.co.uk/"
                  target="_"
                  className="card-link"
                >
                  <FontAwesomeIcon className="icon" icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Consultancy