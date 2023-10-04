import { CyanHeader } from './components/Header';
import { JobList } from './components/JobList';

const JobListing = () => {
  return (
    <div className="flex flex-col">
      <CyanHeader />
      <JobList />
    </div>
  );
};

export default JobListing;
