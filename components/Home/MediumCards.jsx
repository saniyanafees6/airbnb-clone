import Image from 'next/image';

const MediumCards = ({ data }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
        {data?.map(({ img, title }) => (
          <div
            key={img}
            className="rounded-xl cursor-pointer  hover:scale-105 transition transform duration-300 ease-out -ml-3"
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
              <h3 className="text-2xl mt-3">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediumCards;
