import { useLoaderData, useLocation, useNavigate} from "react-router-dom"

const Pagination = () => {
    const { pagination } = useLoaderData()
    const { page, totalPage } = pagination
    const { search, pathname } = useLocation()
    const navigation = useNavigate()

    function handlePageChane(number) {
        const searchParams = new URLSearchParams(search)
        searchParams.set("page", number)
        navigation(`${pathname}?${searchParams.toString()}`)
        //top 
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
  });
    }

    const pages = Array.from({length: totalPage}, (_, index) => {
        return index + 1
    }) 

  return (
    <>
        <div className="join">
            {pages.map((pageNumber) => {
                return (
                    <button key={pageNumber} onClick={() => handlePageChane(pageNumber)} className={`btn btn-l border-none join-item ${pageNumber === page ? "bg-accent" : "bg-neutral text-white"}`}>{pageNumber}</button>
                )
            })}
        </div>
    </>
  )
}

export default Pagination
