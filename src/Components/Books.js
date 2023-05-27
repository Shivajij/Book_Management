import React, { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { getbookData } from './Redux/action'
import Filter from './Filter'
import { useLocation, useSearchParams } from 'react-router-dom'


function Books() {
  const dispatch=useDispatch()
  const location = useLocation()
  const [searchParams,setSearchParams] = useSearchParams()
  const BookData=useSelector((store)=>{
    
    return {...store}
  })
  console.log(BookData,"check bookdata")

  useEffect(()=>{
    if(location){
      let queryParams ={
        params:{
          category : searchParams.getAll("category")
        }
      }
    dispatch(getbookData(queryParams))
    }
  },[location])
  // console.log(BooksData,"checkBooksData")
  return (
    <div>
      <Filter/>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
    {BookData.Book?.map((e, index) => (
      <div key={e.id}>
        <img src={e.cover_photo} alt={e.book_name} height={400} />
        <h5>Name: {e.book_name}</h5>
        <h5>Category: {e.category}</h5>
      </div>
    ))}
  </div>
  </div>
  
  
  )
}

export default Books
