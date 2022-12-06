import { Link } from 'react-router-dom';

import SheaCream from 'src/assets/imgs/sheaCream.jpeg';
import Producers from 'src/assets/imgs/producers.jpg';
import { BsArrowRight } from 'react-icons/bs';
import Slide from '../Slide';

import './style.scss';

function WelcomePage() {
  return (
    <main className="welcomePage">
      {/* <h1 className='app__mainTitle'>Chaque femme est une étoile</h1> */}
      <h1 className="welcomePage__h1">Nos Produits</h1>
      <Slide />
      <hr className="hr" />
      <section className="welcomePage__section">
        <article className="bloc__article">
          <div className="bloc__imgDiv">
            <img src={Producers} alt="" className="bloc__img" />
          </div>
          <div className="bloc__pDiv">
            <h3 className="bloc__h3">Nos Productrices</h3>
            <p className="bloc__p">Madjikarité est une entreprise spécialisée dans le développement et la fabrication de gamme cosmétique biologique fait main à base de beurre de karité. l’ambition de Madjikarité est celle de promouvoir l’autonomisation financière des <strong>femmes</strong> en milieu rural, de lutter contre l’excision en donnant une activité aux exciseuses , contre la désertification par la plantation d’arbre de karité, de lutter contre la dépigmentation de la peau en proposant des produits naturels et bio et de promouvoir un développement durable au Tchad.</p>
            <Link className="bloc__p__link" to="/producers"><span className="bloc__arrow">&#8594;</span>  Lire la suite de l'article</Link>
          </div>
        </article>
        <article className="bloc__article bloc__article--mobile">
          <div className="bloc__pDiv">
            <h3 className="bloc__h3">Les vertus du Karité</h3>
            <p className="bloc__p">Naturellement riche en vitamine E et en acides gras, le beurre de karité possède des propriétés exceptionnelles pour les peaux délicates et sèches. Il est idéal pour nourrir, adoucir, protéger et revitaliser votre corps: talons, coudes, lèvres, cheveux secs et fatigués…Apaisant et réparateur, il est également très apprécié en soin après-soleil et apporte un réconfort immédiat.</p>
            <Link className="bloc__p__link" to="/benefits"><span className="bloc__arrow">&#8594;</span> Lire la suite de l'article</Link>
          </div>
          <div className="bloc__imgDiv">
            <img src={SheaCream} alt="" className="bloc__img" />
          </div>

        </article>
      </section>
    </main>
  );
}

export default WelcomePage;
