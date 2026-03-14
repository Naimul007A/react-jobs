import React, { useEffect } from 'react'
import JobListing from './JobListing';
import { useJobStore } from '../store/useJobStore'
const JobListings = ({ isHome = false }) => {
    const { jobs, isLoading, error, fetchJobs } = useJobStore()
    const title = isHome ? 'Recent Jobs' : 'Browse Jobs'
    useEffect(() => {
        if (isHome) {
            fetchJobs(3)
        } else {
            fetchJobs()
        }
    }, [fetchJobs, isHome])
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
