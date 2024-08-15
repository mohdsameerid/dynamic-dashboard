import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {
    "CSPM Executive Dashboard": [
      { id: 1, name: "Cloud Accounts", text: "Random text for Cloud Accounts" },
      { id: 2, name: "Cloud Account Risk Assessment", text: "Random text for Risk Assessment" }
    ],
    "CWPP Dashboard": [
      { id: 1, name: "Top 5 Namespace Specific Alerts", text: "Random text for Alerts" }
    ],
    "Registry Scan": [
      { id: 1, name: "Image Risk Assessment", text: "Random text for Assessment" }
    ]
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { selectedCategory, widget } = action.payload;
      state.categories[selectedCategory].push(widget);
    },
    removeWidget: (state, action) => {
      const { category, widgetId } = action.payload;
      state.categories[category] = state.categories[category].filter(widget => widget.id !== widgetId);
    },
    setInitialState: (state, action) => {
      state.categories = initialState.categories;
    }
  },
});

export const { addWidget, removeWidget, setInitialState } = dashboardSlice.actions;
export default dashboardSlice.reducer;
