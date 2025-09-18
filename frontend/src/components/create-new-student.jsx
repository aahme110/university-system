import React, { useState } from 'react';

const CreateNewStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cohort, setCohort] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/student/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ student_id: studentId, first_name: firstName, last_name: lastName, cohort: `${process.env.REACT_APP_API_URL}/cohort/${cohort}/`, email: email })
      });

      if (response.ok) {
        setMessage('Student created successfully.');
        setStudentId('');
        setFirstName('');
        setLastName('');
        setCohort('');
        setEmail('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error creating student:', error);
      setMessage('An error occurred while creating the student.');
    }
  };

  return (
<div>
  <div className="container custom-box single-box">
    <h2>Create a New Student</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          className="form-control"
          id="studentId"
          placeholder="Example: 12345678"
          maxLength={8}
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder='Example: John'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder='Example: Doe'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cohort">Cohort:</label>
        <input
          type="text"
          className="form-control"
          id="cohort"
          placeholder='Example: COMBUS1'
          value={cohort}
          onChange={(e) => setCohort(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder='Example: john.doe@dcu.ie'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Student</button>
    </form>
    {message && <p>{message}</p>}
  </div>
</div>
  );
};

export default CreateNewStudent;
