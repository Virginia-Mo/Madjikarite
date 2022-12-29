import './style.scss';
import img from '../../assets/imgs/adobe.jpeg'
import logo from 'src/assets/imgs/logo-header.png';

import Slide from '../Slide';


function Error() {
  return (
    <div className='error'>
    <div>
    <p>404 Erreur</p>
    <p>Page non trouvée</p>
    </div>
    <br />
    <div>
      <img src={img} alt="Image d'erreur" className='error__img'/>
    </div>
    <div>
 <p>Cependant, vous pouvez trouver nos produits ici :</p>
 <br/>
 <Slide /></div>
    </div>
  );
}

export default Error;
