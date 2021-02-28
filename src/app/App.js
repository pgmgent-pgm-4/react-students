import {useState} from 'react';

import './App.css';
import students from './data/students';
import Header from './Header';

import StudentList from './StudentList';
import StudentSearchForm from './StudentSearchForm';

function App() {
  const [filteredStudentData, setFilteredStudentData] = useState(students);

  const handleSearch = (filter) => {
    const lcSearchStr = filter.searchStr.toLowerCase();
    let filteredStudents = students.filter(s => s.firstName.toLowerCase().includes(lcSearchStr) || s.lastName.toLowerCase().includes(lcSearchStr) || s.username.toLowerCase().includes(lcSearchStr));
    filteredStudents = (filter.gender !== 'all') ? filteredStudents.filter(s => s.gender === filter.gender) : filteredStudents;
    setFilteredStudentData(filteredStudents);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <StudentSearchForm onSearch={handleSearch} />
        <StudentList studentsData={filteredStudentData} />
      </div>
    </div>
  );
}

export default App;
