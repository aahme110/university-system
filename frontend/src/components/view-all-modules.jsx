import { useState, useEffect } from "react";

function ViewAllModules() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/module/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const displayAllModules = () => {

    return(<div className="container custom-box">
        <h1>All Modules</h1>
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
                    <a href={`/module/${module.code}`} className="btn btn-primary mr-2">View Module</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>);
  
  }

  return displayAllModules();
}

export default ViewAllModules;