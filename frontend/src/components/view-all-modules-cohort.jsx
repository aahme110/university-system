import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewAllModulesCohort() {
  const [data, setData] = useState([]);
  const { module } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/module/?delivered_to=${module}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [module]);

  const displayAllModulesCohort = () => {
    return (
      <div className="container custom-box">
        <h1>All Modules Taken By {module} </h1>
        <div className="row">
          {data.map((module, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{module.full_name}</h5>
                  <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Module Code: </strong>{module.code}</li>
                  <li className="list-group-item"><strong>CA Split: </strong>{module.ca_split}</li>
                  <li className="list-group-item"><strong>Module is taken by: </strong></li>
                  {module.delivered_to.map((item, index) => (
                    <li className="list-item" key={index}>
                      <a href={`/cohort/${item.split('/').filter(part => !!part).pop()}`}>{item.split('/').filter(part => !!part).pop()}</a>
                    </li>
                  ))}
                </ul>
                  <div className="button-container">
                    <a href={`/module/${module.code}`} className="btn btn-primary mr-2">View Module Info</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  
  }

  return displayAllModulesCohort();
}

export default ViewAllModulesCohort;