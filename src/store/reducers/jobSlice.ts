import {IJobResponse} from "../../models/IJobResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IJobRequest} from "../../models/IJobRequest";

interface JobState {
    jobs: IJobResponse[];
}

const initialState: JobState = {
    jobs: [],
}

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        getJobs: (state, action: PayloadAction<IJobResponse[]>) => {
            state.jobs = action.payload;
        },
        getJobsByCategory: (state, action: PayloadAction<IJobResponse[]>) => {

        },
        addJob: (state, action: PayloadAction<IJobRequest>) => {

        },
        removeJob: (state, action: PayloadAction<string>) => {
            state.jobs = state.jobs.filter(job => job.id !== action.payload);
        },
        updateJob: (state, action: PayloadAction<string>) => {
            const toggleJob = state.jobs.find(job => job.id === action.payload);
            if (toggleJob) {
                toggleJob.isCompleted = !toggleJob.isCompleted;
            }
        }
    }
});

export const {getJobs, addJob, removeJob, updateJob} = jobSlice.actions;

export default jobSlice.reducer;