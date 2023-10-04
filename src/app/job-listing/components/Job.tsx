import { IJob } from './JobList';
import Image from 'next/image';

export const Job = ({
  job,
  add,
  remove,
}: {
  job: IJob;
  add: (job: string) => void;
  remove: (job: string) => void;
}) => {
  const tags: string[] = [job.role, job.level]
    .concat(job.languages)
    .concat(job.tools);

  return (
    <article className="w-full relative flex flex-col lg:flex-row gap-4 bg-white border-l-4 border-jl-darkcyan rounded-md p-6 shadow-xl">
      <Image
        className="absolute lg:static -top-6 lg:w-[100px] lg:h-[100px]"
        src={job.logo}
        alt={job.company + ' logo'}
        width={50}
        height={50}
      />
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-4">
          <div className="text-jl-darkcyan font-semibold">{job.company}</div>
          <div className="flex gap-2">
            {job.new ? (
              <span className="flex bg-jl-darkcyan text-white font-bold uppercase px-3 py-1 rounded-full">
                New!
              </span>
            ) : null}
            {job.featured ? (
              <span className="bg-jl-graycyan-600 text-white font-bold uppercase px-3 py-1 rounded-full">
                Featured
              </span>
            ) : null}
          </div>
        </div>
        <div className="font-semibold text-jl-graycyan-600">{job.position}</div>
        <div className="text-jl-graycyan-400">
          {job.postedAt} · {job.role} · {job.level}
        </div>
      </div>
      <hr></hr>
      <ul className="flex flex-wrap lg:flex-nowrap items-center lg:justify-end gap-4 flex-1">
        {tags.map((tag) => (
          <li
            key={job.id + tag}
            className="text-jl-darkcyan bg-jl-graycyan-100 p-2 font-semibold text-[1.1em] hover:bg-jl-darkcyan hover:text-white"
            onClick={() => add(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
};
