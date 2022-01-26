import Image from 'next/image'

const Banner = () => {
  const img = 'https://links.papareact.com/0fm'
  return (
    <div className="relative h-96">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="my-3 transform rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
