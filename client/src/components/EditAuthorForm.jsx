import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditAuthorForm = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [favoriteTitle, setFavoriteTitle] = useState();

  const [errors, setErrors] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + id)
      .then(res => {
        console.log("CHECKING MY UPDATE GET--->", res)
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setFavoriteTitle(res.data.favoriteTitle);
      })
      .catch(err => console.log("UPDATE GET IS NOT WORKING--->", err))
  }, [])

  const fromValidator = () => {
    let isValid = true
    if (firstName.length < 2) {
      return false
    }
    if (lastName.length < 2) {
      return false
    }
    if (favoriteTitle.length < 2) {
      return false
    }
    return isValid
  };

  const update = (e) => {
    e.preventDefault();
    if (fromValidator()) {
      axios.patch("http://localhost:8000/api/authors/" + id, {
        firstName,
        lastName,
        favoriteTitle
      })
        .then(res => {
          console.log("CHECKING THE ACTUAL UPDATE--->", res)
          navigate("/")
        })
        .catch(err => console.log("SOMETHING WENT WRONG WITH THE UPDATE", err))
    }
    else {
      setErrors({
        firstName: "First Name must at least contain 2 characters!",
        lastName: "Last Name must at least contain 2 characters!",
        favoriteTitle: "Favorite Title must at least contain 2 characters!"
      })
    }
  }

  return (
    <>
      <div className='container mt-5'>
        <div>
          <h1>Favorite Authors</h1>
          <div className='m-3'>
            <Link to={"/"}>Author List</Link>
            <p className='mt-2'>Edit Author:</p>
          </div>
        </div>
        <form onSubmit={update}>
          <div className='mb-3 text-start'>
            <label htmlFor="firstName" className='form-label'>First Name:</label>
            <input type="text" className='form-control' name='firstName' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {errors.firstName ? <p className='text-danger'>{errors.firstName}</p> : ""}
          </div>
          <div className='mb-3 text-start'>
            <label htmlFor="lastName" className='form-label'>Last Name:</label>
            <input type="text" className='form-control' name='lastName' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {errors.lastName ? <p className='text-danger'>{errors.lastName}</p> : ""}
          </div>
          <div className='mb-3 text-start'>
            <label htmlFor="favoriteTitle" className='form-label'>Favorite Title:</label>
            <input type="text" className='form-control' name='favoriteTitle' id='favoriteTitle' value={favoriteTitle} onChange={(e) => setFavoriteTitle(e.target.value)} />
            {errors.favoriteTitle ? <p className='text-danger'>{errors.favoriteTitle}</p> : ""}
          </div>
          <div className='mb-3 text-end'>
            <Link to={"/"} className='btn btn-outline-warning'>Cancel</Link>
            <button type='submit' className='btn btn-outline-primary ms-3'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditAuthorForm