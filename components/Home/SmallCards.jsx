import Image from 'next/image';
import React from 'react';

const SmallCards = ({ data }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold py-8">Explore Nearby</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map(({ img, location, distance }) => (
          <div
            key={img}
            className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
          >
            <div className="relative h-16 w-16">
              <Image
                src={img}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                className="rounded-xl"
              />
            </div>
            <div>
              <h2>{location}</h2>
              <h3 className="text-gray-500">{distance}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmallCards;
