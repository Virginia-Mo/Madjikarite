import React, { useEffect } from 'react';

import { GiWeight } from 'react-icons/gi';
import { TbArrowDownLeft, TbArrowDownRight } from 'react-icons/ti';

import AOS from 'aos';

import './style.scss';

function Process() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <main className="process">  

      <h2 className="mainTitle__h2">Processus de pression manuelle du beurre de karité</h2>

      <section className="process__section">

      <article className="process__article"
        data-aos="fade-up-right"
        data-aos-duration="1500">
        <div className="process__article--title">Un arbre</div>
        <p className="process__article--text">Au Tchad, il n’y a pas de culture de l’arbre à karité. 
        C’est un arbre très commun dans le sud du pays, que l’on trouve en brousse, autour des villages.</p>
      </article>

      {/* <div className="process__iconLeft"
      data-aos="fade-up-right"
      data-aos-duration="1500"><div><BsFillArrowDownLeftSquareFill /></div></div> */}

      <article className="process__article"
        data-aos="fade-up-left"
        data-aos-duration="1500">
        <div className="process__article--title">Fruits ramassés</div>
        <div className="process__article--icon"><GiWeight /></div>
        <p className="process__article--text">Tout commence avec le ramassage des fruits qui ne sont mûrs 
        que lorsqu’ils sont tombés de l’arbre.</p>
      </article>

      {/* <div className="process__iconLeft"
        data-aos="fade-up-right"
        data-aos-duration="1500"><div><BsArrowDownRightSquareFill /></div></div> */}

      <article className="process__article"
        data-aos="fade-up-right"
        data-aos-duration="1500">
        <div className="process__article--title">Fruits dépulpés</div>
        <div className="process__article--icon"><GiWeight /></div>
        <p className="process__article--text">L’étape suivante est le dépulpage : 
        la séparation de la chair et de la noix. La chair est comestible, très appréciée des enfants.</p>
      </article>

      <article className="process__article"
        data-aos="fade-up-left"
        data-aos-duration="1500">
        <div className="process__article--title">Noix bouillies</div>
        <p className="process__article--text">Les noix sont ensuite bouillies avant 
        d’être pilées pour enlever la coque et récupérer les amandes.</p>
      </article>

      <article className="process__article"
        data-aos="fade-up-right"
        data-aos-duration="1500">
        <div className="process__article--title">Noix séchées</div>
        <div className="process__article--icon"><GiWeight /></div>
        <p className="process__article--text">Les amandes sont grillées puis broyées 
        au moulin. </p>
      </article>

      <article className="process__article"
        data-aos="fade-up-left"
        data-aos-duration="1500"> 
        <div className="process__article--title">Noix décoquées = amandes</div>
        <div className="process__article--icon"><GiWeight /></div>
        <p className="process__article--text">La poudre est alors mélangée à de l’eau 
        et malaxée pour obtenir une pâte blanc ivoire.</p>
      </article>

      <article className="process__article"
        data-aos="fade-up-right"
        data-aos-duration="1500"> 
        <div className="process__article--title">Beurre de karité</div>
        <div className="process__article--icon"><GiWeight /></div>
        <p className="process__article--text">Cette pâte est enfin plongée dans de l’eau 
        bouillante afin de séparer l’huile des impuretés. Reposée à température ambiante, 
        l’huile devient beurre de karité.</p>
      </article>

      </section>

    </main>

  );
}

export default Process;
