import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GradeUpdateForm from './grade-update-form';
import GradeForm from './grade-update-new';

const GradeUpdateList = ({ studentId }) => {
  const [grades, setGrades] = useState([]);
  const [error, setError] = useState('');
  const { student } = useParams();
  const [showAddForm, setShowAddForm] = useState(false);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/grade/?student=${student}`);
        if (!response.ok) {
          throw new Error('Failed to fetch grades');
        }
        const data = await response.json();
        setGrades(data);
      } catch (error) {
        setError('Error fetching grades');
      }
    };

    fetchData();
  }, [student]);

  const handleAddInfo = () => {
    setShowAddForm(true);
  };

  return (
    <div>
      {showAddForm ? (
        <GradeForm student={student} handleAddInfo={handleAddInfo} />
      ) : (
        <>
          {error && <p>{error}</p>}
          {!error && (
            <div>
              {grades.length === 0 ? (
                <div>
                  <p className="grade-centre">No grades found.</p>
                  <button className="btn btn-primary create-button" onClick={handleAddInfo}>Add Grades</button>
                </div>
              ) : (
                <>
                  {grades.map((grade, index) => (
                    <div key={index}>
                      <GradeUpdateForm grade={grade} module={grade.module.split('/').filter(part => !!part).pop()} />
                    </div>
                  ))}
                  <button className="btn btn-primary create-button" onClick={handleAddInfo}>Add More Grades</button>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GradeUpdateList;
