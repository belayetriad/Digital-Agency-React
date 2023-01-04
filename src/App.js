import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';
import HomeComponent from './pages/home';
function App() {
  return (
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomeComponent />} />
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
