import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewAllGrades() {
  const [grades, setGrades] = useState([]);
  const { student } = useParams();

  useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/grade/?student=${student}`);
      const data = await response.json();
      setGrades(data);
    } catch (error) {
      console.error('Error fetching grades:', error);
    }
  };

  fetchData();
}, [student]);

  const displayGrades = () => {
    return (
      <div className="container custom-box">
        <h1>Student Grades</h1>
        <table className="table table-hover">
        <thead>
    <tr>
      <th scope="col">Module</th>
      <th scope="col">CA Mark</th>
      <th scope="col">Exam Mark</th>
      <th scope="col">Total Grade</th>
    </tr>
  </thead>
  <tbody>
    {grades.map((grade, index) => (
      <tr key={index}>
        <td><a href={`/module/${grade.module.split('/').filter(part => !!part).pop()}`}>{grade.module.split('/').filter(part => !!part).pop()}</a></td>
        <td>{grade.ca_mark}</td>
        <td>{grade.exam_mark}</td>
        <td>{grade.total_grade}</td>
      </tr>
    ))}
  </tbody>
</table>
      <a href={`/update-grades/${student}`} className="btn btn-primary create-button">Update Grades</a>
    </div>
    )};

  return displayGrades();
}


export default ViewAllGrades;
