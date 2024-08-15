import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/dashboardSlice';

const Widget = ({ widget, category }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeWidget({ category, widgetId: widget.id }));
    };

    return (
        <div className="widget">
            <div className='title-and-remove'>
                <h4>{widget.name}</h4>
                <button onClick={handleRemove}>X</button>
            </div>
            <p>{widget.text}</p>
        </div>
    );
};

export default Widget;
