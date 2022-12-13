
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddEmployee } from './pages/AddEmployee';
import { HRMenu } from './pages/HRMenu';
import { PageLogin } from './pages/PageLogin';
import { MENU_ROUTE } from './shared/Shared';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={MENU_ROUTE.DEFAULT} element={<PageLogin />} />
        <Route path={MENU_ROUTE.HR_MENU} element={<HRMenu />} />
        <Route path={MENU_ROUTE.ADD_EMPLOYEE} element={<AddEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
