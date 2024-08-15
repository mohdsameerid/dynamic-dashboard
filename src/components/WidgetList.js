import React from 'react';
import Widget from './Widget';

const WidgetList = ({ widgets, categoryId }) => {
    return (
        <div className="widget-list">
            {widgets?.map((widget) => (
                <Widget key={widget.id} widget={widget} categoryId={categoryId} />
            ))}
        </div>
    );
};

export default WidgetList;
