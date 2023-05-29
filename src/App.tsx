import React from 'react';
import JobsList from "./components/JobsList";
import CategoriesList from "./components/CategoriesList";
import {Button} from "react-bootstrap";

const App : React.FC = () => {
  const categories : string[] = [];

  return (
    <div className="text-center App">
        <h1 className="display-8">
            <span className="my-title">JustDoIt</span><span> Job Manager</span>
        </h1>

        <div className="content-container display-2">
            <div className="content-container__job-container__title">
                <h2 className="my-second-title">Jobs</h2>

                {categories
                    ? <Button variant="success">Add Job</Button>
                    : <p className="list-item">Add a category to add a job</p>
                }
            </div>

            <div className="content-container__categories-container">
                <div className="content-container__categories-container__title">
                    <h2 className="my-second-title">Categories</h2>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;