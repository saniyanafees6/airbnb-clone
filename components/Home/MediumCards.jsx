import Image from 'next/image'

const MediumCards = ({ data }) => {
  return (
    <section className="pt-6">
      <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
      <div className="scrollbar-hide flex space-x-3 overflow-scroll p-3">
        {data?.map(({ img, title }) => (
          <div
            key={img}
            className="-ml-3 transform  cursor-pointer rounded-xl transition duration-300 ease-out hover:scale-105"
          >
            <div className="relative h-80 w-80">
              <Image
                src={img}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                className="rounded-xl"
              />
            </div>
            <div>
              <h3 className="mt-3 text-2xl">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MediumCards
