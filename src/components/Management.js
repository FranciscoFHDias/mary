import React from 'react'
import Nandos from '../img/Nandos.png'
import Wagamama from '../img/Wagamama.png'
import Commonwealth from '../img/Commonwealth.png'

class Management extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-6">Interim Management</h1>
          <p className="lead">
            Able to “hit the ground running” and bring a fresh perspective,
            based on a wide range of experience across different organisations
            and markets.
          </p>
        </div>
        <div className="media">
          <div className="media-body">
            <a
              href="https://www.nandos.co.uk/"
              target="_"
              className="card-link"
            >
              <img
                src={Nandos}
                className="align-self-center"
                alt="Nandos Restuarants logo"
              />
            </a>
            <h5 className="mt-0">Lead HR Advisor</h5>
            <ul>
              <li>
                Providing on call employee relations advice to managers and
                employees nationwide
              </li>
              <li>
                Supporting Regional Managing Directors to manage complex issues
                within their operational groups
              </li>
              <li>
                Supporting Regional Managing Directors to manage complex issues
                within their operational groups
              </li>
              <li>
                Managing the successful defence of two employment tribunal
                claims against the company
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="media">
          <div className="media-body">
            <a
              href="https://www.wagamama.com/"
              target="_"
              className="card-link"
            >
              <img
                src={Wagamama}
                className="align-self-center"
                alt="Wagamama Restaurants logo"
              />
            </a>
            <h5 className="mt-0">HR Business Partner</h5>
            <ul>
              <li>
                Supporting five Area Managers with employee engagement and
                retention in a fast paced and demanding business environment
              </li>
              <li>
                Managing the communication of the annual salary review,
                providing employee relations advice at all levels and supporting
                online talent reviews for managers to enable regional succession
                planning
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="media">
          <div className="media-body">
            <a
              href="https://www.nandos.co.uk/"
              target="_"
              className="card-link"
            >
              <img
                src={Nandos}
                className="align-self-center"
                alt="Nandos Restaurants logo"
              />
            </a>
            <h5 className="mt-0">Regional Learning and Development Manager</h5>
            <ul>
              <li>
                Supporting both operations and projects in the London region,
                with direct responsibility for a team of three full-time
                Regional Trainers
              </li>
              <li>
                Overseeing training for new restaurant openings, co-ordinating a
                review of the operational training manual and setting up and
                managing an e-learning pilot for health and safety training
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="media">
          <div className="media-body">
            <a
              href="https://thecommonwealth.org/"
              target="_"
              className="card-link"
            >
              <img
                src={Commonwealth}
                className="align-self-center"
                alt="The Commonwealth logo"
              />
            </a>
            <h5 className="mt-0">Learning and Development Manager</h5>
            <ul>
              <li>
                Training needs analysis for a complex international development
                organisation
              </li>
              <li>
                Designing and delivering training workshops in a range of
                management and interpersonal skills
              </li>
              <li>
                Re-designing the performance appraisal system with key
                stakeholders
              </li>
              <li>
                Creating a new induction presentation and process for overseas
                recruited staff
              </li>
              <li>Managing a review of the competency framework</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="media">
          <div className="media-body">
            <a
              href="https://www.nandos.co.uk/"
              target="_"
              className="card-link"
            >
              <img
                src={Nandos}
                className="align-self-center"
                alt="Nandos Restaurants logo"
              />
            </a>
            <h5 className="mt-0">Regional Human Resources Manager</h5>
            <ul>
              <li>
                Working for the People team in collaboration with other
                functional specialists within a business partnering model, to
                support Operations
              </li>
              <li>
                Managing employee relations, supporting management recruitment,
                talent management and succession planning, co-ordinating staff
                survey results and overseeing salary review and partnership
                qualification processes
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Management
