import { useState, useEffect } from "react";

function ViewAllCohorts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/cohort/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const displayAllCohorts = () => {
    return (
      <div className="container custom-box">
        <h1>All Cohorts</h1>
        <div className="row">
          {data.map((cohort, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{cohort.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Cohort ID: </strong>{cohort.id}</li>
                    <li className="list-group-item"><strong>Cohort Year: </strong>{cohort.year}</li>
                    <li className="list-group-item"><strong>Cohort Degree: </strong><a href={`/degree/${cohort.degree.split('/').filter(part => !!part).pop()}`}>{cohort.degree.split('/').filter(part => !!part).pop()}</a></li>
                  </ul>
                  <div className="button-container">
                    <a href={`/students/${cohort.id}`} className="btn btn-primary mr-2">View All Students</a>
                    <a href={`/modules-cohort/${cohort.id}`} className="btn btn-secondary">View All Modules</a>
                    <a href={`/cohort/${cohort.id}`} className="btn btn-primary mr-2">View Cohort</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  
  }

  return displayAllCohorts();
}

export default ViewAllCohorts;