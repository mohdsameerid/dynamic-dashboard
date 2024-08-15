import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AddWidgetPopup = ({ onClose, onAdd }) => {
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState([]);
    const categoryData = useSelector((state) => state.dashboard.categories);
    const category = Object.keys(categoryData);
    const [errors, setErrors] = useState({
        selectedCategory: '',
        widgetName: '',
        widgetText: ''
    });

    const handleAdd = () => {
        const newErrors = {};

        if (!selectedCategory.length) newErrors.selectedCategory = 'Select Category';
        if (!widgetName.trim()) newErrors.widgetName = 'Enter Widget Name';
        if (!widgetText.trim()) newErrors.widgetText = 'Enter Widget Text';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onAdd({ name: widgetName, text: widgetText }, selectedCategory);
            onClose();
        }
    };


    return (
        <>
            <div className="right-side-popup">
                <div className="popup-title">
                    <div>Personalize your dashboard by adding the following widget</div>
                    <button className="button" onClick={onClose}>X</button>
                </div>
                <div className="popup-content">
                    <h4>Add New Widget</h4>
                    <select
                        type="text"
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className='custom-input'
                    >
                        <option >
                            Select Category
                        </option>
                        {category?.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    {errors.selectedCategory && <span className='error-text'>{errors.selectedCategory}</span>}
                    <input
                        type="text"
                        placeholder="Widget Name"
                        value={widgetName}
                        onChange={(e) => setWidgetName(e.target.value)}
                        className="custom-input"
                    />
                    {errors.widgetName && <span className='error-text'>{errors.widgetName}</span>}
                    <input
                        type="text"
                        placeholder="Widget Text"
                        value={widgetText}
                        onChange={(e) => setWidgetText(e.target.value)}
                        className="custom-input"
                    />
                    {errors.widgetText && <span className='error-text'>{errors.widgetText}</span>}
                    <div className="button-group">
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={handleAdd}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddWidgetPopup;
