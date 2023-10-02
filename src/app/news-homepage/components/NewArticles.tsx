export interface IArticles {
  title: string;
  content: string;
}

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

export const NewArticles = () => {
  return (
    <section className="bg-nh-darkblue p-6">
      <h1 className="text-nh-softorange text-3xl font-bold mb-4">New</h1>
      <div className="flex flex-col gap-4 text-nh-offwhite">
        {newArticles.map((article, index) => (
          <article key={article.title} className="flex flex-col gap-2">
            <h2 className="text-nh-offwhite text-xl font-semibold">
              {article.title}
            </h2>
            <p className="text-nh-grayblue-100">{article.content}</p>
            {index !== newArticles.length - 1 ? (
              <hr className="h-px my-6 bg-nh-offwhite border-0 dark:bg-gray-700"></hr>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};
