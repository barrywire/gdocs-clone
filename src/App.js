import Docs from './components/Docs';

// Firebase imports
import { app, database } from './firebaseConfig';

function App()
{
  return (
    <Docs database={database} />
  );
}

export default App;
