import Student from "./Student";

const StudentList = ({studentsData}) => {
  return (
    <ul className={'row student-list'}>
      {studentsData.map(stud => <Student key={stud.id} studentData={stud} />)}
    </ul>
  )
};

export default StudentList;