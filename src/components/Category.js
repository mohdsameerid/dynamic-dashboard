import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Widget from './Widget';
import AddWidgetPopup from './AddWidgetPopup';
import { addWidget } from '../features/dashboardSlice';
// import './Category.css'; // Assuming your CSS is in Category.css

const Category = ({ category, widgets, isPopupOpen, setIsPopupOpen, searchEmpty }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setSearchTerm('');
    }, [searchEmpty]);

    const filteredWidgets = widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddWidget = (widget, selectedCategory) => {
        const newWidget = { ...widget, id: Date.now() };
        dispatch(addWidget({ selectedCategory, widget: newWidget }));
    };

    return (
        <div className='category-section'>
            <h3 className='margin-bottom'>{category}</h3>
            <input
                type="text"
                placeholder="Search Widgets"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="custom-input"
            />

            <div className="widget-container">
                {filteredWidgets.map((widget) => (
                    <Widget key={widget.id} widget={widget} category={category} />
                ))}
            </div>

            {/* Overlay */}
            {isPopupOpen && <div className="overlay show" onClick={() => setIsPopupOpen(false)}></div>}

            {/* Popup */}
            {isPopupOpen && (
                <AddWidgetPopup
                    onClose={() => setIsPopupOpen(false)}
                    onAdd={handleAddWidget}
                />
            )}
        </div>
    );
};

export default Category;
