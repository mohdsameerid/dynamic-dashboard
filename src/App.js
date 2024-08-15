import './App.css';
import { Provider } from 'react-redux';
import WidgetList from './components/WidgetList';
import Dashboard from './components/Dashboard';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <WidgetList />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
