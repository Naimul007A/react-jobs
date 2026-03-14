import { create } from 'zustand'
import apiClient from '../lib/axiosInstance'
export const useJobStore = create((set) => ({
    jobs: [],
    job: {},
    isLoading: false,
    error: null,

    // The async action
    fetchJobs: async (per_page = 25) => {
        set({ isLoading: true, error: null })
        try {
            const response = await apiClient.get(`/jobs?_page=1&_per_page=${per_page}`)
            if (response.status !== 200) throw new Error('Failed to fetch jobs')
            set({ jobs: response.data.data, isLoading: false })
        } catch (err) {
            set({ error: err.message, isLoading: false })
        }
    },
    fetchJob: async (jobId) => {
        set({ isLoading: true, error: null })
        try {
            const response = await apiClient.get(`/jobs/${jobId}`)
            if (response.status !== 200) throw new Error('Failed to fetch jobs')
            set({ job: response.data, isLoading: false })
        } catch (err) {
            set({ error: err.message, isLoading: false })
        }
    }
}))
