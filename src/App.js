
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddEmployee } from './pages/AddEmployee';
import { HRMenu } from './pages/HRMenu';
import { OtherDesign } from './pages/OtherDesign';
import { PageLogin } from './pages/PageLogin';
import { MENU_ROUTE } from './shared/Shared';
import IntakeForm from './pages/IntakeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={MENU_ROUTE.DEFAULT} element={<IntakeForm />} />
        <Route exact path={MENU_ROUTE.PageLogin} element={<PageLogin />} />
        <Route path={MENU_ROUTE.HR_MENU} element={<HRMenu />} />
        <Route path={MENU_ROUTE.ADD_EMPLOYEE} element={<AddEmployee />} />
        <Route path={MENU_ROUTE.OTHER_DESIGN} element={<OtherDesign />} />
      </Routes>
    </Router>
  );
}

export default App;
