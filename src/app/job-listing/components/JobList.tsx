import data from '../data.json';
import { Job } from './Job';
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
  return (
    <section className="container mx-auto grid grid-cols-1 place-items-center p-6 gap-6">
      {data.map((job: IJob) => (
        <Job key={job.id} job={job} />
      ))}
    </section>
  );
};
