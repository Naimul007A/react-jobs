import JobListing from './JobListing';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../lib/axiosInstance';
const JobListings = ({ isHome = false }) => {
    const title = isHome ? 'Recent Jobs' : 'Browse Jobs'
    let url = '/jobs?_page=1&_per_page=25'
    if (isHome) url = '/jobs?_page=1&_per_page=3'
    const {data:jobs,isLoading} =useQuery({
        queryKey:["jobs"],
        queryFn:async ()=>{
            const res = await apiClient.get(url);
            return res.data.data
        },
    })
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {title}
                </h2>
                {isLoading ? <p>Loadign....</p> : (
                    <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* <!-- Job Listing 1 --> */}
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                </>
            )}
            </div>
        </section>
    )
}

export default JobListings
