// == Import
import Header from 'src/components/Header';

import './styles.scss';
import WelcomePage from '../WelcomePage';
// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <WelcomePage />
    </div>
  );
}

// == Export
export default App;
