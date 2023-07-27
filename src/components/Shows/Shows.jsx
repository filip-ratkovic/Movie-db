import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import ShowsCard from './ShowsCard';
import { Link } from 'react-router-dom';

const showsURL = 
'https://api.themoviedb.org/3/tv/popular?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=';

function Shows() {
  const [showsData, setShowsData] = useState([]);
  // const [apiData, setAPIData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchShowsData = async (currentPage) => {
    try {
        const data = await fetch(showsURL + currentPage);
        const resData = await data.json();
        setShowsData(resData.results);
        console.log(resData.results)
        // setAPIData(resData.results)
        setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };



  useEffect(() => {
    
   fetchShowsData()
  }, [])
  

  const handlePageChange = (data) => {
    fetchShowsData(data.selected+1)
  }

  if(loading) {
    return(
      <div>Loading</div>
    )
  }
  
  return (
   <main className="movie-main-container">
      <div className="movies-container">
      {showsData.map((show) => {
        return (
          <Link to={`/shows/${show.id}`} >
          <ShowsCard showData={show} key={show.id}/></Link>
        )
      })}
      </div>

     <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={100}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName='pagination justify-content-center'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        activeClassName='active'
      />
   </main>
  )
}

export default Shows