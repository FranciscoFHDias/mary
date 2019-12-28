import React from 'react'

class Home extends React.Component {


  render(){
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-4">People Management, Skills and Systems</h1>
          <p className="lead">
            In business, it’s The People Element that counts......
          </p>
          <ul>
            <li>Recruiting, engaging and retaining talent</li>
            <li>Identifying learning and development needs</li>
            <li>
              Designing and delivering interactive training workshops Creating
              user-friendly forms, guides and manuals
            </li>
            <li> Providing pragmatic employee relations advice</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card border-white">
              <div className="card-body">
                <h5 className="card-title">
                  Consultancy and Training Projects
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
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border-white">
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
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="clients-title">Clients:</p>
        <div className="clients">
          <img
            src="../img/Nandos.png"
            className="rounded mx-auto"
            alt="Nando/'s logo"
          />
          <img
            src="../img/British.png"
            className="rounded mx-auto"
            alt="British Transport Police logo"
          />
          <img
            src="../img/Wagamama.png"
            className="rounded mx-auto"
            alt="Wagamama logo"
          />
          <img
            src="../img/Rossopomodoro.png"
            className="rounded mx-auto"
            alt="Rossopomodoro logo"
          />
          <img
            src="../img/Tortilla.png"
            className="rounded mx-auto"
            alt="Tortilla logo"
          />
          <img
            src="../img/travelodge.jpeg"
            className="rounded mx-auto"
            alt="Travelodge logo"
          />
        </div>
      </div>
    )
  }
}

export default Home