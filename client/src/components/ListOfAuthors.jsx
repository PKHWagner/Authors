import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListOfAuthors = ({ allAuthors, setAllAuthors, removeFromDom }) => {

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log("AUTHORS DATA--->", res);
        setAllAuthors(res.data);
      })
      .catch((err) => {
        console.log("SOMETHING WENT WRONG WITH GET ALL--->", err);
      })
  }, [])

  const remove = (id) => {
    axios.delete("http://localhost:8000/api/authors/" + id)
      .then(res => {
        console.log("DELETED FROM DOM", res);
        removeFromDom(id)
      })
      .catch(err => console.log("SOMETHING WENT WRONG WITH DELETE FROM DOM--->", err))
  }


  return (
    <>

      <div className='container mt-5'>
        <div>
          <h1>Favorite Authors</h1>
          <div className='m-3'>
            <Link to={"/new"}>Add an Author</Link>
            <p className='mt-2'>We have Titles from:</p>
          </div>
        </div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Author</th>
              <th className='text-end'>Actions available</th>
            </tr>
          </thead>
          <tbody>
            {
              allAuthors.map((data, i) => {
                return (
                  <tr>
                    <td>{data.lastName}, {data.firstName}</td>
                    <td className='text-end'>
                      <Link className='btn btn-outline-warning me-2' to={`/edit/${data._id}`}>Edit</Link>
                      <button className='btn btn-outline-danger' onClick={(e) => { remove(data._id) }}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default ListOfAuthors