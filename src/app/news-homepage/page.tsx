import Image from 'next/image';

interface IArticles {
  title: string;
  content: string;
}

interface IReads extends IArticles {
  image: string;
}

const NewsHomepage = () => {
  const newArticles: IArticles[] = [
    {
      title: 'Hydrogen VS Electric Cars',
      content: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      title: 'The Downsides of AI Artistry',
      content:
        'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      title: 'Is VC Funding Drying Up?',
      content:
        'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ];

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
  return (
    <div className="container px-3">
      <nav></nav>
      <main className="grid grid-cols-1 lg:grid-cols-3 lg:auto-rows-max gap-6">
        <section className="lg:col-span-2">
          <div>
            <picture>
              <source
                srcSet="/nh-images/image-web-3-desktop.jpg"
                type="image/jpg"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/nh-images/image-web-3-mobile.jpg"
                typeof="image/jpg"
                media="(max-width: 768px)"
              />
              <img alt="hero-image" className="w-auto h-auto" />
            </picture>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-end p-6">
            <h1 className="text-5xl font-bold lg:flex-1">
              The Bright Future of Web 3.0?
            </h1>
            <div className="flex flex-col gap-4 lg:flex-1">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="w-fit bg-nh-softred py-2 px-6 uppercase text-nh-offwhite">
                Read More
              </button>
            </div>
          </div>
        </section>
        <section className="bg-nh-darkblue p-6">
          <h1 className="text-nh-softorange text-3xl font-bold mb-4">New</h1>
          <div className="flex flex-col gap-4 text-nh-offwhite">
            {newArticles.map((article, index) => (
              <article key={article.title} className="flex flex-col gap-2">
                <h2 className="text-nh-offwhite text-xl font-semibold">
                  {article.title}
                </h2>
                <p className="text-nh-grayblue-100 text-sm">
                  {article.content}
                </p>
                {index !== newArticles.length - 1 ? (
                  <hr className="h-px my-4 bg-nh-offwhite border-0 dark:bg-gray-700"></hr>
                ) : null}
              </article>
            ))}
          </div>
        </section>

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
      </main>
    </div>
  );
};

export default NewsHomepage;
