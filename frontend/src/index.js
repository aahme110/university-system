import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewAllDegrees from './components/view-all-degrees';
import ViewSingleDegree from './components/view-single-degree';
import ViewAllCohorts from './components/view-all-cohorts';
import ViewSingleCohort from './components/view-single-cohort';
import ViewAllStudents from './components/view-all-students';
import ViewAllModules from './components/view-all-modules';
import ViewSingleModule from './components/view-single-module';
import ViewSingleStudent from './components/view-single-student';
import ViewAllGrades from './components/view-all-grades';
import ViewAllModulesCohort from './components/view-all-modules-cohort';
import CreateNewDegree from './components/create-new-degree';
import CreateNewCohort from './components/create-new-cohort';
import CreateNewModule from './components/create-new-module';
import CreateNewStudent from './components/create-new-student';
import ViewAllCohortsDegree from './components/view-all-cohorts-degree';
import GradeUpdateList from './components/grade-update-list';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <div>
          <App />
          </div>
        } />
        <Route path="/create-degree" element={
        <div>
          <CreateNewDegree />
          <a href="/" className="btn btn-primary create-button">Return Home</a>
          </div>
        } />
        <Route path="/create-cohort" element={
        <div>
          <CreateNewCohort />
          <a href="/" className="btn btn-primary create-button">Return Home</a>
          </div>
        } />
        <Route path="/create-module" element={
        <div>
          <CreateNewModule />
          <a href="/" className="btn btn-primary create-button">Return Home</a>
          </div>
        } />
        <Route path="/create-student" element={
        <div>
          <CreateNewStudent />
          <a href="/" className="btn btn-primary create-button">Return Home</a>
          </div>
        } />
        <Route path="/update-grades/:student" element={<div>
          <ViewSingleStudent />
          <GradeUpdateList />
          <a href="/" className="btn btn-primary create-button">Return Home</a>
          </div>
        } />
        <Route path="/students/:cohort" element={
        <div>
          <ViewAllStudents />
          <a href="/create-student" className="btn btn-primary create-button">Create New Student</a>
          <a href="/" className="btn btn-primary create-button">Return Home</a>
          </div>
        } />
        <Route path="/degrees" element={
        <div>
          <ViewAllDegrees />
          <a href="/create-degree" className="btn btn-primary create-button">Create New Degree</a>
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/cohorts" element={
        <div>
          <ViewAllCohorts />
          <a href="/create-cohort" className="btn btn-primary create-button">Create New Cohort</a>
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/modules" element={
        <div>
          <ViewAllModules />
          <a href="/create-module" className="btn btn-primary create-button">Create New Module</a>
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/degree/:degree" element={
        <div>
          <ViewSingleDegree />
          <ViewAllCohortsDegree />
          <a href="/create-degree" className="btn btn-primary create-button">Create New Degree</a>
          <a href="/create-cohort" className="btn btn-primary create-button">Create New Cohort</a>
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/cohort/:cohort" element={
        <div>
          <ViewSingleCohort />
          <ViewAllStudents />
          <a href="/create-student" className="btn btn-primary create-button">Create New Student</a>
          <a href="/create-cohort" className="btn btn-primary create-button">Create New Cohort</a>
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/module/:module" element={
        <div>
          <ViewSingleModule />
          <a href="/create-module" className="btn btn-primary create-button">Create New Module</a>
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/student/:student" element={
        <div>
          <ViewSingleStudent />
          <ViewAllGrades />
          <a href="/create-student" className="btn btn-primary create-button">Create New Student</a>
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/modules-cohort/:module" element={
        <div>
          <ViewAllModulesCohort />
          <a href="/create-module" className="btn btn-primary create-button">Create New Module</a>
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
