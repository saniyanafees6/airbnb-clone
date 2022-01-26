import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import dynamic from 'next/dynamic'

import { Footer, Navigation } from '../components'
import { SearchBanner, InfoCard } from '../components/Search'
// Client Side Render as we need Global Window Object
const Map = dynamic(() => import('../components/Search/Map'), {
  loading: () => 'Loading...',
  ssr: false,
})
const Search = ({ searchResults }) => {
  const router = useRouter()
  const { location, startDate, endDate, numGuests } = router.query
  console.log(searchResults)
  const formatDateRange = (startDate, endDate) => {
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')

    return `${formattedStartDate} to ${formattedEndDate}`
  }
  return (
    <div>
      <Navigation
        placeholder={`${location} | ${formatDateRange(
          startDate,
          endDate
        )} | ${numGuests} guests`}
      />
      <main className="flex">
        <section className=" flex-grow px-6 pt-14">
          <div className="max-h-screen overflow-scroll scrollbar-hide">
            <SearchBanner
              location={location}
              dateRange={formatDateRange(startDate, endDate)}
              numGuests={numGuests}
            />
            {console.log(searchResults)}
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export const getServerSideProps = async () => {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
