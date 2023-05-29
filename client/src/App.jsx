import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListOfAuthors from './components/ListOfAuthors';
import NewAuthorForm from './components/NewAuthorForm';
import EditAuthorForm from './components/EditAuthorForm';
import ViewAuthor from './components/ViewAuthor';


const App = () => {

  const [allAuthors, setAllAuthors] = useState([]);

  const removeFromDom = id => {
    console.log("REMOVED FROM DOM--->", id)
    setAllAuthors(allAuthors.filter(item => item._id !== id))
    console.log("REMOVE FROM DOM SUCCESSFULL")
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ListOfAuthors allAuthors={allAuthors} setAllAuthors={setAllAuthors} removeFromDom={removeFromDom} />} path="/" />
          <Route element={<NewAuthorForm allAuthors={allAuthors} setAllAuthors={setAllAuthors} />} path="/new" />
          <Route element={<EditAuthorForm />} path="/edit/:id" />
          <Route element={<ViewAuthor />} path="/view/:id" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App