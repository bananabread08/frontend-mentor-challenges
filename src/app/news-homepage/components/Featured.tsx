import Image from 'next/image';
import { IArticles } from './NewArticles';

interface IReads extends IArticles {
  image: string;
}
const reads: IReads[] = [
  {
    title: 'Reviving Retro PCs',
    content: 'What happens when old PCs are given modern upgrades?',
    image: '/nh-images/image-retro-pcs.jpg',
  },
  {
    title: 'Top 10 Laptops of 2022',
    content: 'Our best picks for various needs and budgets',
    image: '/nh-images/image-top-laptops.jpg',
  },
  {
    title: 'The Growth of Gaming',
    content: 'How the pandemic has sparked fresh opportunities.',
    image: '/nh-images/image-gaming-growth.jpg',
  },
];

export const Featured = () => {
  return (
    <>
      {reads.map((read, index) => (
        <article key={read.title} className="flex items-center gap-2">
          <Image
            src={read.image}
            alt={read.title + 'image'}
            width={100}
            height={100}
          />
          <div className="p-2 flex flex-col gap-2">
            <h1 className="text-2xl text-nh-grayblue-100">
              {'0' + (index + 1)}
            </h1>
            <h2 className="text-lg text-nh-gray-blue-300">{read.title}</h2>
            <p className="text-sm text-nh-grayblue-100">{read.content}</p>
          </div>
        </article>
      ))}
    </>
  );
};
