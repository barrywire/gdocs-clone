// Firebase imports
import { app, database } from './firebaseConfig';

// React Router Dom imports
import { Routes, Route } from 'react-router-dom';

// Component imports
import Docs from './components/Docs';
import EditDocs from './components/EditDocs';

function App()
{
  return (
    <Routes>
      <Route path='/' element={<Docs database={database} />} />
      <Route path='/edit/:id' element={<EditDocs database={database} />} />
    </Routes>
  );
}

export default App;
