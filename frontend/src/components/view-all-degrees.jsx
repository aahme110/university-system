import { useState, useEffect } from "react";

function ViewAllDegrees() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/degree/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const displayAllDegrees = () => {
    return (
      <div className="container custom-box">
        <h1>All Degrees</h1>
        <div className="row">
          {data.map((degree, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{degree.full_name}</h5>
                  <div className="button-container">
                    <a href={`/degree/${degree.shortcode}`} className="btn btn-primary mr-2">View Degree & Cohorts</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return displayAllDegrees();
}

export default ViewAllDegrees;