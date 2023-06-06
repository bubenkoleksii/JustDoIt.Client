import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useForm} from "react-hook-form";
import {IJobRequest} from "../../models/IJobRequest";
import {addJob} from "../../store/reducers/jobSlice";

interface AddJobProps {
    show: boolean;
    onHide: () => void;
}

const AddJob: React.FC<AddJobProps> = ({show, onHide}) => {
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IJobRequest>({
        mode: "onBlur"
    });

    const onSubmit = (data: IJobRequest) => {
        data.dueDate = new Date(data.dueDate).toISOString();
        dispatch(addJob(data));

        reset();
        onHide();
    }

    const {categories} = useAppSelector(state => state.categoryReducer);

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new job
                </Modal.Title>
            </Modal.Header>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                    <div className="form-group">
                            <div className="label-container">
                                <label htmlFor="name">Name</label>
                            </div>

                            <input {...register('name', {
                                required: "This field is required",
                                maxLength:{value: 100, message: "Maximum length is 100 symbols"
                                }})}
                                   type="text" className="form-control" id="name" placeholder="Enter category name"
                            />

                            <div className="label-container">
                                <small className="text-danger pt-1">
                                    {errors?.name && `${errors?.name?.message || `Error`}`}
                                </small>
                            </div>
                    </div>

                    <div className="form-group">
                        <div className="label-container">
                            <label htmlFor="name">Category</label>
                        </div>

                        <select className="form-control my-select" {...register('categoryId')}>
                            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                        </select>

                        <div className="label-container">
                            <small className="text-danger pt-1">
                                {errors?.categoryId && `${errors?.categoryId?.message || `Error`}`}
                            </small>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <div className="label-container">
                            <label htmlFor="name">Due date</label>
                        </div>

                        <input {...register('dueDate', {
                            required: "This field is required",
                            })}
                               type="datetime-local" className="form-control" id="name" placeholder="Enter category name"
                        />

                        <div className="label-container">
                            <small className="text-danger pt-1">
                                {errors?.dueDate && `${errors?.dueDate?.message || `Error`}`}
                            </small>
                        </div>
                    </div>

                    <div className="form-group check-container mt-3">
                        <input {...register('isCompleted')}
                               type="checkbox" id="isCompleted" className="zoom2"
                        />

                        <div className="label-container">
                            <label htmlFor="isCompleted">Status</label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit">Add</Button>
                    <Button variant="danger" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default AddJob;
