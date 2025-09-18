import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewSingleModule() {
  const [data, setData] = useState([]);
  const { module } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/module/${module}/`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [module]);

  const displayModule = () => {

    return (
      <div className="container custom-box single-box">
        <h1>Module Information</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><strong>Module Name: </strong>{data.full_name}</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Module Code: </strong>{data.code}</li>
                  <li className="list-group-item"><strong>CA Split: </strong>{data.ca_split}</li>
                  <li className="list-group-item"><strong>Module is taken by: </strong></li>
                  {data && data.delivered_to && data.delivered_to.map((url, index) => {
                    const cohortId = url.split('/').filter(part => !!part).pop();
                    return (
                      <li className="list-item" key={index}>
                        <a href={`/cohort/${cohortId}`}>{cohortId}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return displayModule();
}

export default ViewSingleModule;