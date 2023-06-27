import iconList from './assets/images/icon-list.svg';
import Image from 'next/image';
import { NSForm } from './components/Form';

const NewsLetterForm = () => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl shadow-2xl bg-white md:p-5 md:rounded-3xl">
      <div className="h-[20em] sm:h-[22em] md:h-[36em] rounded-b-2xl bg-[url('/nf_images/nf-mobile.svg')] sm:bg-[url('/nf_images/nf-desktop.svg')] bg-cover bg-center bg-no-repeat md:rounded-lg md:order-2"></div>
      <div className="flex flex-col justify-center p-8 gap-6 text-nf-slate-700">
        <h1 className="text-5xl font-semibold ">Stay Updated!</h1>
        <p>Join 60,000+ product manages receiving monthly updates on:</p>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <Image src={iconList} alt="check list icon" />
            <p>Product discovery and building what matters</p>
          </li>
          <li className="flex items-center gap-4">
            <Image src={iconList} alt="check list icon" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li className="flex items-center gap-4">
            <Image src={iconList} alt="check list icon" />
            <p>And much more!</p>
          </li>
        </ul>
        <NSForm />
      </div>
    </article>
  );
};

export default NewsLetterForm;
