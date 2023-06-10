import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateData } from './Redux/action';


function SingleBook() {
  const { id } = useParams();
  const bookData = useSelector((store) => store.Book);
  const singleBookData = bookData.find((book) => book.id === parseInt(id));
  const [editMode, setEditMode] = useState(false);
  const [editedBookName, setEditedBookName] = useState(singleBookData.book_name);
  const [editedReleaseYear, setEditedReleaseYear] = useState(singleBookData.release_year);

  const dispatch = useDispatch();

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    const updatedBook = {
      book_name: editedBookName,
      release_year: editedReleaseYear
      
    };

    dispatch(updateData(singleBookData, updatedBook));
    setEditMode(false);
  };

  useEffect(() => {
    setEditedBookName(singleBookData.book_name);
    setEditedReleaseYear(singleBookData.release_year);
  }, [singleBookData]);

  if (!singleBookData) {
    return (
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", textAlign: "center", flexDirection: "column", alignItems: "center" }}>
      <img src={singleBookData.cover_photo} alt={singleBookData.book_name} height={400}></img>
      <h3>Name: {editMode ? <input value={editedBookName} onChange={(e) => setEditedBookName(e.target.value)} /> : singleBookData.book_name}</h3>
      <h4>Category: {singleBookData.category}</h4>
      <h4>Release Year: {editMode ? <input value={editedReleaseYear} onChange={(e) => setEditedReleaseYear(e.target.value)} /> : singleBookData.release_year}</h4>
      {editMode ? <button onClick={handleSaveClick}>Save</button> : <button onClick={handleEditClick}>Edit</button>}
    </div>
  );
}

export default SingleBook;
