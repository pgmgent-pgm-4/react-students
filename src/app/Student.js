import moment from 'moment';

const Student = ({studentData}) => {
  return (
    <li className={'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 student'}>
      <div className="card student">
        <img src={studentData.picture.large} className="card-img-top" alt={`${studentData.firstName} ${studentData.lastName}`} />
        <div className="card-body">
          <h5 className="card-title">{`${studentData.firstName} ${studentData.lastName}`}</h5>
          <p className="card-text">
            <span className="student__dob"><i className="fas fa-birthday-cake"></i>{moment(studentData.dayOfBirth).format('L')}</span>
            <span className="student__username"><i className="fas fa-user-graduate"></i>{studentData.username}</span>
            <span className="student__location"><i className="fas fa-compass"></i>{studentData.location.city}, {studentData.location.country}</span>
          </p>
        </div>
        <span className="student__age">{moment().diff(studentData.dayOfBirth, 'years')}</span> 
        <span className="student__country">
          <img src={`https://www.countryflags.io/${studentData.nationality}/flat/48.png`}></img>
        </span>
      </div>
    </li>
  )
};

export default Student;