import React, { useState } from 'react';

const CreateNewDegree = () => {
  const [fullName, setFullName] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/degree/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ full_name: fullName, shortcode: shortcode })
      });

      if (response.ok) {
        setMessage('Degree created successfully.');
        setFullName('');
        setShortcode('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error creating degree:', error);
      setMessage('An error occurred while creating the degree.');
    }
  };

  return (
    <div>
      <div className="container custom-box single-box">
      <h2>Create a New Degree</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Example: Computing for Business"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shortcode">Shortcode:</label>
          <input
            type="text"
            className="form-control"
            id="shortcode"
            placeholder="Example: COMBUS"
            value={shortcode}
            maxLength={5}
            onChange={(e) => setShortcode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Degree
        </button>
      </form>
      
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default CreateNewDegree;
