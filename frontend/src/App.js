

function App() {
  return (
    <div className="home-page">
      <h1>University Management System</h1>
        <a href="/degrees" className="btn btn-primary create-button">View All Degrees</a>
        <a href="/cohorts" className="btn btn-primary create-button">View All Cohorts</a>
        <a href="/modules" className="btn btn-primary create-button">View All Modules</a>
        <a href="/create-degree" className="btn btn-primary create-button">Create New Degree</a>
        <a href="/create-cohort" className="btn btn-primary create-button">Create New Cohort</a>
        <a href="/create-module" className="btn btn-primary create-button">Create New Module</a>
        <a href="/create-student" className="btn btn-primary create-button">Create New Student</a>
    </div>
  );
}

export default App;
