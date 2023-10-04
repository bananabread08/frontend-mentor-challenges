'use client';

import data from '../data.json';
import { Job } from './Job';
import { useState } from 'react';
import Image from 'next/image';
export interface IJob {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export const JobList = () => {
  const [filter, setFilter] = useState<string[]>([]);

  const addToFilter = (job: string) => {
    if (filter.includes(job)) return;
    setFilter(filter.concat(job));
  };

  const removeFromFilter = (job: string) => {
    if (!filter.includes(job)) return;
    const newFilter = filter.filter((x) => x !== job);
    setFilter(newFilter);
  };

  const filteredData =
    filter.length === 0
      ? [...data]
      : data.filter((job) => {
          const tags: string[] = [job.role, job.level]
            .concat(job.languages)
            .concat(job.tools);
          return filter.every((t) => tags.includes(t));
        });

  return (
    <section className="mt-6 mx-auto grid grid-cols-1 place-items-center p-6 gap-10">
      {filter.length !== 0 ? (
        <div className="w-full -translate-y-20 -mb-20 bg-white p-4 flex gap-4">
          <ul className="w-full flex flex-wrap items-center justify-center gap-4">
            {filter.map((job) => (
              <li
                key={job}
                onClick={() => removeFromFilter(job)}
                className="cursor-pointer flex items-center justify-center gap-2 text-jl-darkcyan bg-jl-graycyan-100 font-semibold text-[1.1em] p-2"
              >
                <p>{job}</p>
                <Image
                  src={'/jl-images/icon-remove.svg'}
                  alt="delete-filter"
                  className="bg-jl-darkcyan hover:bg-jl-graycyan-600 hover:text-white p-1"
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>
          <button
            className="hover:text-jl-darkcyan hover:underline"
            onClick={() => setFilter([])}
          >
            Clear
          </button>
        </div>
      ) : null}
      {filteredData.map((job: IJob) => (
        <Job
          key={job.id}
          job={job}
          add={addToFilter}
          remove={removeFromFilter}
        />
      ))}
    </section>
  );
};
