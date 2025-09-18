import React, { useState } from 'react';

const CreateNewCohort = () => {
  const [id, setId] = useState('');
  const [year, setYear] = useState('');
  const [degree, setDegree] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cohort/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, year: parseInt(year), degree: `${process.env.REACT_APP_API_URL}/degree/${degree}/`, name })
      });

      if (response.ok) {
        setMessage('Cohort created successfully.');
        setId('');
        setYear('');
        setDegree('');
        setName('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error creating cohort:', error);
      setMessage('An error occurred while creating the cohort.');
    }
  };

  return (
<div>
  <div className="container custom-box single-box">
    <h2>Create a New Cohort</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          className="form-control"
          id="id"
          value={id}
          maxLength={50}
          placeholder="Example: COMBUS1"
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          className="form-control"
          id="year"
          value={year}
          placeholder="Example: 1"
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          className="form-control"
          id="degree"
          value={degree}
          placeholder="Example: COMBUS"
          onChange={(e) => setDegree(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          placeholder="Example: 1st year Computing for Business"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Cohort</button>
    </form>
    {message && <p>{message}</p>}
  </div>
</div>
  );
};

export default CreateNewCohort;
