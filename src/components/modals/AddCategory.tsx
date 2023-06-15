import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import {ICategoryRequest} from "../../models/ICategoryRequest";
import {useAppDispatch} from "../../hooks/redux";
// import {addCategory} from "../../store/reducers/category/categorySlice";

interface AddCategoryProps {
    show: boolean;
    onHide: () => void;
}

const AddCategory: React.FC<AddCategoryProps> = ({show, onHide}) => {
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<ICategoryRequest>({
        mode: "onBlur"
    });

    const onSubmit = (data: ICategoryRequest) => {
        // dispatch(addCategory(data));

        reset();
        onHide();
    }

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
                    Add new category
                </Modal.Title>
            </Modal.Header>
            <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                        <div className="label-container">
                            <label htmlFor="name">Name</label>
                        </div>

                        <input {...register('name', {
                            required: "This field is required",
                            maxLength:{value: 50, message: "Maximum length is 50 symbols"
                            }})}
                               type="text" className="form-control" id="name" placeholder="Enter category name"/>

                        <div className="label-container">
                            <small className="text-danger pt-1">
                                {errors?.name && `${errors?.name?.message || `Error`}`}
                            </small>
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

export default AddCategory;
