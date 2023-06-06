import React, {useEffect, useState} from 'react';
import JobsList from "./components/JobsList";
import CategoriesList from "./components/CategoriesList";
import {Button} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {getJobs, jobSlice} from "./store/reducers/jobSlice";
import {categoriesSeed, jobsSeed} from "./store/dataSeed";
import {getCategories} from "./store/reducers/categorySlice";
import AddCategory from "./components/modals/AddCategory";
import AddJob from "./components/modals/AddJob";

const App : React.FC = () => {
    const dispatch = useAppDispatch();
    const {jobs} = useAppSelector(state => state.jobReducer);
    const {categories} = useAppSelector(state => state.categoryReducer);

    useEffect(() => {
        dispatch(getJobs(jobsSeed));
        dispatch(getCategories(categoriesSeed))
    }, []);

    const [addCategoryVisible, setAddCategoryVisible] = useState<boolean>(false);
    const [addJobVisible, setAddJobVisible] = useState<boolean>(false);

    return (
        <div className="text-center App container my-container">
            <main className="pb-3">
                <div className="text-center">
                    <h1 className="display-8">
                        <span className="my-title">JustDoIt</span><span> Job Manager</span>
                    </h1>

                    <div className="d-end">
                        <form method="get" id="#" action="#">
                            <select className="form-select storage-select">
                                <option value="MsSqlServer">MS SQL Server</option>
                                <option value="Xml">XML</option>
                            </select>
                        </form>
                    </div>

                    <div className="content-container display-2">
                        <div className="content-container__job-container">
                            <div className="content-container__job-container__title">
                                <h2 className="my-second-title">Jobs</h2>

                                {categories && !(categories.length === 0)
                                    ? <Button onClick={() => setAddJobVisible(true)} variant="success">Add Job</Button>
                                    : <p className="list-item">Add a category to add a job</p>
                                }

                                <AddJob show={addJobVisible} onHide={() => setAddJobVisible(false)}/>
                            </div>

                            <JobsList jobs={jobs}/>
                        </div>

                        <div className="content-container__categories-container">
                            <div className="content-container__categories-container__title">
                                <h2 className="my-second-title">Categories</h2>

                                <button onClick={() => setAddCategoryVisible(true)} type="button" className="btn btn-success">
                                    Add Category
                                </button>

                                <AddCategory show={addCategoryVisible} onHide={() => setAddCategoryVisible(false)}/>
                            </div>

                            <CategoriesList categories={categories}/>
                        </div>
                    </div>
                </div>
            </main>
       </div>
  );
}

export default App;