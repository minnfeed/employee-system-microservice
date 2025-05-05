import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout/MainLayout';
import Dashboard from './pages/DashBoard';
import DashBoardLayout from './layouts/DashBoard/DashBoardLayout';
import Header from './components/Header/Header';
import EmployeeLayout from './layouts/Employee/EmployeeLayout';
import Employee from './pages/Employee';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<DashBoardLayout />}>
            <Route path="/DashBoard" element={<Dashboard />} />
          </Route>
          <Route element={<EmployeeLayout />}>
            <Route path="/Employee" element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
