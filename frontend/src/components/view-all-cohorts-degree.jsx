import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ViewAllCohortsDegree() {
  const [data, setData] = useState([]);
  const { degree } = useParams();

  useEffect(() => {
    let apiUrl = `${process.env.REACT_APP_API_URL}/cohort/`;
    if (degree) {
      apiUrl += `?degree=${degree}`;
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [degree]);

  const displayAllCohorts = () => {
    return (
      <div className="container custom-box">
        <h1>Cohorts</h1>
        <div className="row">
          {data.map((cohort, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{cohort.name}</h5>
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
  };

  return displayAllCohorts();
}

export default ViewAllCohortsDegree;
