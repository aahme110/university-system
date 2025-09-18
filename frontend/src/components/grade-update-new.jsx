import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const GradeForm = ({ handleAddInfo }) => {
  const [module, setModule] = useState('');
  const [caMark, setCaMark] = useState(0);
  const [examMark, setExamMark] = useState(0);
  const [cohort, setCohort] = useState('');
  const [totalGrade, setTotalGrade] = useState(0);
  const { student } = useParams();
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/grade/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          module,
          caMark,
          examMark,
          cohort,
          totalGrade,
          student: `${process.env.REACT_APP_API_URL}/student/${student}/`
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add grade.');
      }

      const data = await response.json();
      setMessage('Grade updated successfully.');
      
      handleAddInfo(data);
      
      setModule('');
      setCaMark(0);
      setExamMark(0);
      setTotalGrade(0);
      setCohort('');
    } catch (error) {
      setMessage(error.message || 'Failed to add grade. Please try again.');
    }
  };

  return (
    <div className="container custom-box">
            <h1>Add New Grade To  {student}</h1>
    <form onSubmit={handleSubmit}>
      
      <label>
        Module:
        <input type="text" className="form-label" value={module} onChange={(e) => setModule(e.target.value)} />
      </label>
      <br />
      <label>
        CA Mark:
        <input type="number" className="form-label" value={caMark} onChange={(e) => setCaMark(parseFloat(e.target.value))} />
      </label>
      <br />
      <label>
        Exam Mark:
        <input type="number" className="form-label" value={examMark} onChange={(e) => setExamMark(parseFloat(e.target.value))} />
      </label>
      <br />
      <label>
        Cohort:
        <input type="text" className="form-label" value={cohort} onChange={(e) => setCohort(e.target.value)} />
      </label>
      <br />
      {message && <p>{message}</p>}
      <button type="submit" className="btn btn-primary">Add Grade</button>
    </form>
  </div>
  );
};

export default GradeForm;
