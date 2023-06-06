import React from 'react';
import {useAppDispatch} from "../hooks/redux";
import {updateJob, removeJob} from "../store/reducers/jobSlice";

interface JobItemProps {
    id: string;
    categoryId: string;
    name: string;
    categoryName: string;
    dueDate: string;
    isCompleted: boolean;
    dateDifferenceInMinutes: number;
}

const JobItem: React.FC<JobItemProps> = ({id, categoryId, name, categoryName, dueDate, isCompleted, dateDifferenceInMinutes}) => {
    const dispatch = useAppDispatch();

    const handleCheck = (id: string) => {
        dispatch(updateJob(id));
    }

    const handleRemove = (id: string) => {
        dispatch(removeJob(id))
    }

    return (
        <>
            <div className={`jobs-list__item ${!isCompleted && dateDifferenceInMinutes <= 60 * 3 ? 'block-danger' : ''}`}>
                <p className="list-item job-name">{name}</p>
                <p className="list-item job-category">{categoryName}</p>
                <p className="list-item job-date">{new Date(dueDate).toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>
                <p className="list-item job-status">{isCompleted ? 'Done' : 'Not done'}</p>

                <div className="job-actions">
                    {isCompleted
                        ? <button type="submit" className="btn btn-secondary btn-80" onClick={() => handleCheck(id)}>Uncheck</button>
                        : <button type="submit" className="btn btn-primary btn-80" onClick={() => handleCheck(id)}>Check</button>
                    }

                    <button type="submit" className="btn btn-danger btn-80" onClick={() => handleRemove(id)}>Remove</button>
                </div>
            </div>

            <hr/>
        </>
    );
};

export default JobItem;
