import React, { useState } from 'react';

const CreateNewModule = () => {
  const [code, setCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [deliveredTo, setDeliveredTo] = useState([]);
  const [caSplit, setCaSplit] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (caSplit < 0 || caSplit > 100) {
      setMessage('CA Split must be between 0 and 100.');
      return;
    }

    

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/module/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code, full_name: fullName, delivered_to: updateCohort(deliveredTo), ca_split: parseInt(caSplit) })
      });

      if (response.ok) {
        setMessage('Module created successfully.');
        setCode('');
        setFullName('');
        setDeliveredTo('');
        setCaSplit('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error creating module:', error);
      setMessage('An error occurred while creating the module.');
    }
  };

  const updateCohort = (input) => {
    const cohorts = input.split(", ");
    const urls = cohorts.map(cohort => `${process.env.REACT_APP_API_URL}/cohort/${cohort}/`);
    return urls;
  };
  

  return (
<div>
  <div className="container custom-box single-box">
    <h2>Create a New Module</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="code">Code:</label>
        <input
          type="text"
          className="form-control"
          id="code"
          placeholder="Example: CA106"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={5}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Example: Web Design"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="form-group">
            <label htmlFor="deliveredTo">Delivered To:</label>
            <input
              type="text"
              className="form-control"
              id="deliveredTo"
              value={deliveredTo}
              onChange={(e) => setDeliveredTo(e.target.value)}
              placeholder="Example: COMBUS1, COMSCI1"
            />
          </div>
      <div className="form-group">
        <label htmlFor="caSplit">CA Split:</label>
        <input
          type="number"
          className="form-control"
          id="caSplit"
          placeholder="Example: 100"
          value={caSplit}
          onChange={(e) => setCaSplit(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Module</button>
    </form>
    {message && <p>{message}</p>}
  </div>
</div>
  );
};

export default CreateNewModule;
