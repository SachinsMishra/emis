
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PageAddEmployee } from './pages/PageAddEmployee';
import { PageLogin } from './pages/PageLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PageLogin />} />
        <Route path="/add-employee" element={<PageAddEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
