import React from "react";

import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout title="Home" page="home" url="/">
      <section className="w-full h-screen bg-gold bg-cane-pattern">
        <article className="grid-main h-full py-8 md:py-16">
          <div className="col-span-full md:col-start-2 md:col-end-12 flex flex-col items-center justify-evenly px-4 py-4 bg-blue">
            <h1 className="font-house text-d1 text-brown text-center">
              Coolie Cut Cane:
            </h1>
            <h2 className="font-house text-h2 text-brown text-center">
              The Sugar Empire of the South Pacific
            </h2>
            <h3 className="font-house text-b1 text-brown">
              Esha Pillay & Quishile Charan
            </h3>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Home;
