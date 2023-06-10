import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getbookData } from './Redux/action';
import Filter from './Filter';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

function Books() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const BookData = useSelector((store) => ({ ...store }));
  const [ascendingOrder, setAscendingOrder] = useState('');
  

  useEffect(() => {
    if (location) {
      let queryParams = {
        params: {
          category: searchParams.getAll('category'),
        },
      };
      dispatch(getbookData(queryParams,ascendingOrder));
    }
  }, [location,ascendingOrder]);

 
  return (
    <div>
      <Filter />
      <button onClick={()=>setAscendingOrder("asc")} >Sort by release_year</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {BookData.Book?.map((e, index) => (
          <div key={e.id}>
            <Link to={`/books/${e.id}`}>
              <img src={e.cover_photo} alt="Book_Name" height={400} />
              <h5>Name: {e.book_name}</h5>
              <h5>Category: {e.category}</h5>
              <h5>Category: {e.release_year}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
