
import { Routes, Route } from 'react-router-dom';
import './App.css';
import EnrollmentButton from './components/EnrollmentButton';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<EnrollmentButton />} />
        <Route path='/chatboat' element={<Chatbot />} />
      </Routes>
    </div>
  );
}

export default App;
