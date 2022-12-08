import { useDispatch, useSelector } from 'react-redux';

import Field from '../../LoginForm/Field';

import { USER_SAVE } from 'src/actions/user';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';

import './style.scss';

function CustomerAdress() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const data = new FormData(form);
    const user = {
      firstname: data.get('Prénom'),
      lastname: data.get('Nom'),
      password: data.get('Mot de passe'),
      passwordConfirm: data.get('Confirmation du mot de passe'),
      email: data.get('Email'),
      address: data.get('Adresse de livraison'),
      postalCode: data.get('Code postal'),
      city: data.get('Ville'),
      phone: data.get('Téléphone'),
    };

    dispatch({
      type: USER_SAVE,
      payload: { user },
    });
  };  

  return (
    <>
    <Header />
    <NavBar />
    <h1 className="customerAdress__title">Adresse de livraison</h1>
    <div className="customerAdress">
      <form className="customerAdress__form" onSubmit={handleSubmit}>
        
           
        <Field
          name="Adresse de livraison"
          type="text"
          placeholder="Adresse de livraison"
        />
        <Field
          name="Code postal"
          type="text"
          placeholder="Code postal"
        />
        <Field

          name="Ville"
          type="text"
          placeholder="Ville"
        />
        <Field
          name="Téléphone"
          type="text"
          placeholder="Téléphone"
        />
        <button className="customerAdress__button" type="submit">Ajouter une nouvelle adresse</button>
      </form>
    </div>
  
    <Footer />
    </>
  );
}

export default CustomerAdress;
