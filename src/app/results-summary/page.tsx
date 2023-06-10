import React from 'react';
import Image from 'next/image';
import data from './data.json';
import memory from './assets/images/icon-memory.svg';
import reaction from './assets/images/icon-reaction.svg';
import verbal from './assets/images/icon-verbal.svg';
import visual from './assets/images/icon-visual.svg';

type Result = {
  category: string;
  score: number;
  icon: string;
};

const images = [reaction, memory, verbal, visual];

const ResultsSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[600px] mx-auto shadow-2xl md:rounded-[2em]">
      <section className="grid place-content-center p-6 rounded-b-[2em] md:rounded-[1.5em] overflow-hidden text-center text-rs-light-lavender gap-4 bg-gradient-to-b from-rs-light-slateblue to-rs-light-royalblue">
        <h1 className="font-semibold">Your Result</h1>
        <div className="flex flex-col items-center justify-center w-36 h-36 mx-auto rounded-full bg-gradient-to-b from-rs-violetblue to-rs-persianblue">
          <p className="text-[3em] font-extrabold text-white">76</p>
          <p className="mt-[-1em] font-semibold text-[0.8em] text-gray-400">
            of 100
          </p>
        </div>
        <div>
          <p className="text-white text-[1.2em] font-medium">Great</p>
          <p className="mx-4 mt-2 text-[0.9em]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </section>
      <section className="p-6 flex flex-col gap-4">
        <h2 className="font-bold">Summary</h2>
        <ul className="flex flex-col gap-3">
          {data.map((result: Result, index) => {
            return (
              <li
                key={result.category}
                className={`flex justify-between items-center py-3 px-4 rounded-xl text-[0.8em] ${result.category.toLowerCase()}`}
              >
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src={images[index]}
                    alt={`${result.category} icon`}
                    width={20}
                    height={20}
                  />
                  <p className="font-semibold">{result.category}</p>
                </div>
                <p className="text-gray-500">
                  <span className="text-black font-bold">{result.score} </span>/
                  100
                </p>
              </li>
            );
          })}
        </ul>
        <button className="w-full py-3 bg-rs-dark-grayblue text-white text-[0.8em] font-semibold rounded-full">
          Continue
        </button>
      </section>
    </div>
  );
};

export default ResultsSummary;
