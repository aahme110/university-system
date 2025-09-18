import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewSingleCohort() {
  const [data, setData] = useState([]);
  const { cohort } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/cohort/${cohort}/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [cohort]);

  const displayCohort = () => {
    return (
      <div className="container custom-box single-box">
        <h1>Cohort Information</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><strong>Cohort Code: </strong>{data.id}</h5>
                <h5 className="card-title"><strong>Cohort Name: </strong>{data.name}</h5>
                <h5 className="card-title"><strong>Cohort Year: </strong>{data.year}</h5>
                <div className="button-container">
                  <a href={`/modules-cohort/${data.id}`} className="btn btn-primary mr-2">View All Modules</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    )};

    return displayCohort();
}

export default ViewSingleCohort;