import React, { useState } from 'react';

const UpdateStudentForm = ({ grade, module, onUpdate }) => {
  const [caMark, setCAMark] = useState(grade.ca_mark);
  const [examMark, setExamMark] = useState(grade.exam_mark);
  const [message, setMessage] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (caMark < 0 || caMark > 100 || examMark < 0 || examMark > 100) {
      setMessage('CA and Exam marks must both be between 0 and 100.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/grade/${grade.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ca_mark: caMark,
          exam_mark: examMark
        })
      });
      if (response.ok) {
        setMessage('Grade updated successfully.');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error updating grade:', error);
      setMessage('An error occurred while updating the grade.');
    }
  };

  return (
    <div className="container custom-box">
      <h1>Update Grade for {module}</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="caMark" className="form-label">CA Mark:</label>
        <input
          type="number"
          className="form-control"
          id="caMark"
          value={caMark}
          onChange={(e) => setCAMark(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="examMark" className="form-label">Exam Mark:</label>
        <input
          type="number"
          className="form-control"
          id="examMark"
          value={examMark}
          onChange={(e) => setExamMark(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
    {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateStudentForm;
