import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewAllStudents() {
  const [data, setData] = useState([]);
  const { cohort } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/student/?cohort=${cohort}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [cohort]);

  const displayAllStudents = () => {
    return (
      <div className="container custom-box">
        <h1>All Students Taking {cohort}</h1>
        <div className="row">
          {data.map((cohort, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{cohort.first_name} {cohort.last_name}</h5>
                  <div className="button-container">
                    <a href={`/student/${cohort.student_id}`} className="btn btn-primary mr-2">View Student Information</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  
  }

  return displayAllStudents();
}

export default ViewAllStudents;