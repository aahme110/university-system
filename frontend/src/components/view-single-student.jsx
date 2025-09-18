import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewSingleStudent() {
  const [data, setData] = useState([]);
  const { student } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/student/${student}/`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [student]);

  const displayStudent = () => {

    return (       
    <div className="container custom-box single-box">
      <h1>Student Information</h1>
      <div className="row">
        <div className="col-md6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><strong>{data.first_name} {data.last_name}</strong></h5>
              <ul className="list-group list-group-flush"> 
                <li className="list-group-item"><strong>Student ID: </strong>{data.student_id}</li>
                <li className="list-group-item"><strong>Cohort: </strong>{data.cohort}</li>
                <li className="list-group-item"><strong>Email: </strong>{data.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};

  return displayStudent();
}

export default ViewSingleStudent;