import './style.scss';
import img from '../../assets/imgs/adobe.jpeg'
import logo from 'src/assets/imgs/logo-header.png';

import Slide from '../Slide';


function Error() {
  return (
    <div className='error'>
    <main>
    <p>Page non trouvée</p>
    <div>
      <img src={img} alt="Image d'erreur" className='error__img'/>
    </div> 
    </main>
    <aside>
      <p>Cependant, vous pouvez trouver nos produits ici :</p>
      
      <Slide />
  </aside>
    </div>
  );
}

export default Error;
