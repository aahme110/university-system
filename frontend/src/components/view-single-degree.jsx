import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewSingleDegree() {
  const [data, setData] = useState([]);
  const { degree } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/degree/${degree}/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [degree]);

  const displayDegree = () => {
    return (
      <div className="container custom-box single-box">
        <h1>Degree Information</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><strong>Degree Name: </strong>{data.full_name}</h5>
                <h5 className="card-title"><strong>Degree Code: </strong>{data.shortcode}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )};

  return displayDegree();
}

export default ViewSingleDegree;