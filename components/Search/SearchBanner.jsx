const SearchBanner = ({ location, numGuests, dateRange }) => {
  return (
    <>
      <p className="text-xs">
        300+ stays - {dateRange} - for {numGuests} guests
      </p>
      <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays in {location}</h1>
      <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
        <p className="button">Cancellation Flexibity</p>
        <p className="button">Type of Places</p>
        <p className="button">Price</p>
        <p className="button">Rooms & Beds</p>
        <p className="button">More Filters</p>
      </div>
    </>
  )
}

export default SearchBanner
