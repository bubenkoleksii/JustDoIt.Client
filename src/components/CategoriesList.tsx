import React from 'react';
import {ICategoryResponse} from "../models/ICategoryResponse";
import CategoryItem from "./CategoryItem";

interface CategoriesListProps {
    categories: ICategoryResponse[];
}

const CategoriesList : React.FC<CategoriesListProps> = ({categories}) => {
    return (
        <>
            <div className="categories-list">
                <div className="categories-list__item">
                    <h3 className="list-title category-name">Name</h3>
                    <h3 className="list-title category-count">Jobs</h3>
                    <h3 className="list-title category-actions">Actions</h3>
                </div>

                <hr/>

                {categories.map(categoryItem => <CategoryItem key={categoryItem.id} id={categoryItem.id} name={categoryItem.name} countOfJobs={categoryItem.countOfJobs}/>)}
            </div>

            <hr/>
        </>
    );
};

export default CategoriesList;
