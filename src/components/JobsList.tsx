import React from 'react';
import {IJobResponse} from "../models/IJobResponse";
import JobItem from "./JobItem";

interface JobsListProps {
    jobs: IJobResponse[];
}

const JobsList : React.FC<JobsListProps> = ({jobs}) => {
    return (
        <div className="jobs-list">
            <div className="jobs-list__item">
                <h3 className="list-title job-name">Name</h3>
                <h3 className="list-title job-category">Category</h3>
                <h3 className="list-title job-date">Due date</h3>
                <h3 className="list-title job-status">Status</h3>
                <h3 className="list-title job-actions">Actions</h3>
            </div>

            <hr/>

            {jobs && jobs.length > 0
                ? jobs.map(job => <JobItem key={job.id} id={job.id} categoryId={job.categoryId} name={job.name} categoryName={job.categoryName} dueDate={job.dueDate} isCompleted={job.isCompleted} dateDifferenceInMinutes={job.dateDifferenceInMinutes}/>)
                : <div className="jobs-list__item"><h3 className="list-item">There are no any jobs</h3></div>
            }
        </div>
    );
};

export default JobsList;
