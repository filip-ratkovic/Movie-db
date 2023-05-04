import React from 'react'
import ReactPaginate from 'react-paginate'

function Movie() {
  const handlePageChange = (data) => {
    console.log(data.selected)
  }
  return (
   <main>
    

      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={1000}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
      />
   </main>
  )
}

export default Movie