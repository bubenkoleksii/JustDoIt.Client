import React from 'react';
import {useAppDispatch} from "../hooks/redux";
// import {removeCategory} from "../store/reducers/category/categorySlice";

interface CategoryItemProps {
    id: string;
    name: string;
    countOfJobs: number;
}

const CategoryItem: React.FC<CategoryItemProps> = ({id, name, countOfJobs}) => {
    const dispatch = useAppDispatch();

    const handleRemove = (id: string) => {
        // dispatch(removeCategory(id));
    }

    return (
        <>
            <div className="categories-list__item">
                <h3 className="list-item category-name">{name}</h3>
                <h3 className="list-item category-count">{countOfJobs}</h3>
                <div className="category-actions">
                    <button type="submit" className="btn btn-primary btn-80">Choose</button>

                    <button type="submit" className="btn btn-danger btn-80" onClick={() => handleRemove(id)}>Remove</button>
                </div>
            </div>

            <hr/>
        </>
    );
};

export default CategoryItem;
