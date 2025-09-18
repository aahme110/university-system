# University System

University System front-end built with React for a Django REST API.

## Features

- View all degrees  
- View details of a single degree with associated cohorts  
- Create new degrees  
- View all cohorts  
- View single cohort with student list  
- Create new cohorts with degree dropdown selection  
- View all modules  
- View single module with details and linked students  
- View modules delivered to a cohort  
- Create new modules  
- View a single student with modules and grades  
- Create new students  
- Enter and update grades for students  

## Accounts

### Admin
```bash
Username: admin@admin.com  
Password: testing123456   
Email: admin@admin.com  
```
Or create your own superuser by running:  
```bash
python manage.py createsuperuser  
```
### Demo User  
```bash
Username: user  
Email: user@user.com  
Password: user123456  
```
## Installation

Back-end (Django REST API)

Go into the backend folder and follow these steps:
```bash  
cd backend
python -m venv venv            # create virtual environment
source venv/bin/activate       # Linux/Mac, or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver    
```
The Django API should now be running at:
```bash  
http://127.0.0.1:8000/  
```
Front-end (React)

In another terminal window/tab:
```bash  
cd frontend
npm install
npm start  
```
The React front-end should now be running at:  
```bash
http://localhost:3000/  
```
## Usage

- Browse and manage degrees, cohorts, modules, and students  
- Create new records via forms (degrees, cohorts, modules, students)  
- View linked relationships (students in cohorts, cohorts in degrees, modules for cohorts)  
- Add and update student grades   
- Admins manage everything in the Django admin  
