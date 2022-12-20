// == Import : npm
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// == Import : local
// Composants
import App from 'src/components/App';
import store from 'src/store';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
   <BrowserRouter>  
      <App />
  </BrowserRouter>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);


/*
  Mise en place d'un router
  1. installer la dépendance
    - `yarn add react-router-dom`
  2. connecter notre application à l'URL
    - BrowserRouter
  3. ajouter des liens
    - <NavLink> et <Link>
  4. ajouter des routes
    - <Routes> et <Route>
  5. gérer les routes paramétrées
    - `<Route path="/path/:param" element={<Component />}`
    - dans `<Component />`, on récupère le paramètre `:param`
    avec `const { param } = useParams()`
*/


