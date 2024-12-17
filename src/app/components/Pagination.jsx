

export const Pagination = ({ totalLinks, linksPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    for (let i = 1; i<= Math.ceil(totalLinks/linksPerPage); i++){
        pages.push(i)
    }
    

  return (
    <div className=''>
        {
            pages.map((page, index) => {
                return <button key={index} className={page == currentPage ? 'text-red-900 font-semibold text-xl p-2' : 'font-semibold text-xl p-2'}
                    onClick={() => setCurrentPage(page)}
                >
                            {page}
                     </button>
                    
                
            })
        }

    </div>
  )
}
