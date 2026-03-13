import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-600 md:flex-row md:text-left">
          <p>&copy; {new Date().getFullYear()} React Jobs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-indigo-500">
              Home
            </a>
            <a href="/jobs.html" className="hover:text-indigo-500">
              Jobs
            </a>
            <a href="/add-job.html" className="hover:text-indigo-500">
              Post a Job
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
