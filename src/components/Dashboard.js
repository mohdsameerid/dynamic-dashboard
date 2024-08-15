import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import { setInitialState } from '../features/dashboardSlice';
import { TbRefresh } from "react-icons/tb";

const Dashboard = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.dashboard.categories);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [searchEmpty, setSearchEmpty] = useState(false);

    const handleRefresh = () => {
        dispatch(setInitialState({}));
        setSearchEmpty(!searchEmpty);
    }

    return (
        <div className="dashboard">
            <div className="category" >
                <div className="dashboard-title-header">
                    <h3>CNAPP Dashboard</h3>
                    <div className='widget-refresh'>
                        <button onClick={() => setIsPopupOpen(true)} className="add-widget" >Add Widget +</button>
                        <TbRefresh className="add-widget" onClick={handleRefresh} />
                    </div>
                </div>
                {Object.keys(categories)?.map((category) => (
                    <Category key={category} category={category} widgets={categories[category]} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} searchEmpty={searchEmpty} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
