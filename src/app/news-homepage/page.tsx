import Image from 'next/image';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewArticles } from './components/NewArticles';
import { Featured } from './components/Featured';

const NewsHomepage = () => {
  return (
    <div className="container py-12 px-6 flex flex-col gap-6">
      <Navbar />
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Hero />
        <NewArticles />
        <Featured />
      </main>
    </div>
  );
};

export default NewsHomepage;
