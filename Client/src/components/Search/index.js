import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

import data from 'src/Data/data';
import noix from 'src/assets/imgs/noix.png';

import { changeSearch, displaySearchRequest } from '../../actions/searchBar';

import './style.scss';

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // I get the value of the search bar
  const search = useSelector((state) => state.searchBar.search);
  // I get the products from the data
  const products = data.produits;
  // I filter the products according to the search bar value
  const filteredProducts = products.filter((product) => (
    product.nom.toLowerCase().includes(search.toLowerCase())
      || product.categorie.toLowerCase().includes(search.toLowerCase())));

  // I dispatch the value of the search bar
  const handleChange = (event) => {
    dispatch(changeSearch(event.target.value));
  };

  // I dispatch the filtered products to the store
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(displaySearchRequest(filteredProducts));
    // I redirect to the search page
    navigate('/search');
  };

  return (
    
    <div className="search">
      <IoSearch className="search__icon" />
      <form action="" className="search__form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          placeholder="Rechercher un article..."
          value={search}
          onChange={handleChange}
        />
      </form>
      <img src={noix} className="search__noix" alt="noix de karité" />
    </div>
  );
}

export default Search;
