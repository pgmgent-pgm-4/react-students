import {useState, useEffect} from 'react';

const StudentSearchForm = ({onSearch}) => {
  const [filter, setFilter] = useState({
    searchStr: '',
    gender: 'all'
  });

  const handleChange = (ev) => {
    setFilter(prevState => {
      return {
        ...prevState,
        searchStr: ev.target.value
      }
    })
  };

  const handleGenderChange = (ev) => {
    setFilter(prevState => {
      return {
        ...prevState,
        gender: ev.target.value
      }
    })
  };

  useEffect(() => {
    if (typeof onSearch === 'function') {
      onSearch(filter);
    }

    return () => {
      //
    }
  }, [filter]);

  return (
    <div className="student-search-form">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Search</label>
        <input type="email" className="form-control" id="txt-search-str" placeholder="name@example.com" value={filter.searchStr} onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="genderOptions" id="inlineRadio1" value="all" checked={filter.gender === 'all'} onChange={handleGenderChange} />
          <label className="form-check-label" htmlFor="inlineRadio1">All</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="genderOptions" id="inlineRadio2" value="female" checked={filter.gender === 'female'} onChange={handleGenderChange} />
          <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="genderOptions" id="inlineRadio3" value="male" checked={filter.gender === 'male'} onChange={handleGenderChange} />
          <label className="form-check-label" htmlFor="inlineRadio3">Male</label>
        </div>
      </div>
    </div>
  )
};

export default StudentSearchForm;