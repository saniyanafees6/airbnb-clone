import Head from 'next/head';
import React from 'react';
import { Banner, SmallCards, MediumCards, LargeCard } from '../components/Home';
import { Navigation, Footer } from '../components';

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <SmallCards data={exploreData} />
        <MediumCards data={cardsData} />
        <LargeCard
          description="Wishlist curated by Airbnb"
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
export const getStaticProps = async () => {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
