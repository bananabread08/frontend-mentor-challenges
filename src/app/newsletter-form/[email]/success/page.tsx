'use client';

import iconList from '../../assets/images/icon-list.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SuccessPage = ({ params }: { params: { email: string } }) => {
  const router = useRouter();
  return (
    <article className="flex flex-col gap-6 bg-white justify-center max-w-md mx-auto w-full p-10 md:rounded-xl">
      <div className="flex flex-col w-full flex-1 mt-8 md:mt-0 gap-6 text-nf-slate-700">
        <Image src={iconList} alt="check list icon" className="w-20 h-20" />
        <h1 className="text-5xl font-semibold">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{' '}
          <span className="font-bold">{params.email}</span>. Please open it and
          click the button inside to confirm your subscription
        </p>
      </div>
      <button
        onClick={() => router.push('/newsletter-form')}
        className="px-4 py-3 bg-nf-slate-700 text-white font-medium rounded-lg active:bg-gradient-to-r from-pink-500 via-nf-tomato to-orange-500 focus:outline-none focus:ring focus:ring-nf-tomato"
      >
        Dismiss message
      </button>
    </article>
  );
};

export default SuccessPage;
