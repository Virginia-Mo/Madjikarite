import React, { useEffect } from 'react';

import step1 from 'src/assets/imgs/step1.png';
import step2 from 'src/assets/imgs/step2.png';
import step3 from 'src/assets/imgs/step3.png';
import step4 from 'src/assets/imgs/step4.png';
import step5 from 'src/assets/imgs/step5.png';
import step6 from 'src/assets/imgs/step6.png';
import step7 from 'src/assets/imgs/step7.png';

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
        <img className="process__article--img" src={step1} alt="step1" />
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
        <img className="process__article--img" src={step2} alt="step2" />
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
        <img className="process__article--img" src={step3} alt="step3" />
        <p className="process__article--text">L’étape suivante est le dépulpage : 
        la séparation de la chair et de la noix. La chair est comestible, très appréciée des enfants.</p>
      </article>

      <article className="process__article"
        data-aos="fade-up-left"
        data-aos-duration="1500">
        <div className="process__article--title">Noix bouillies</div>
        <img className="process__article--img" src={step4} alt="step4" />
        <p className="process__article--text">Les noix sont ensuite bouillies avant 
        d’être pilées pour enlever la coque et récupérer les amandes.</p>
      </article>

      <article className="process__article"
        data-aos="fade-up-right"
        data-aos-duration="1500">
        <div className="process__article--title">Noix séchées</div>
        <img className="process__article--img" src={step5} alt="step5" />
        <p className="process__article--text">Les amandes sont grillées puis broyées 
        au moulin. </p>
      </article>

      <article className="process__article"
        data-aos="fade-up-left"
        data-aos-duration="1500"> 
        <div className="process__article--title">Noix décoquées = amandes</div>
        <img className="process__article--img" src={step6} alt="step6" />
        <p className="process__article--text">La poudre est alors mélangée à de l’eau 
        et malaxée pour obtenir une pâte blanc ivoire.</p>
      </article>

      <article className="process__article"
        data-aos="fade-up-right"
        data-aos-duration="1500"> 
        <div className="process__article--title">Beurre de karité</div>
        <img className="process__article--img" src={step7} alt="step7" />
        <p className="process__article--text">Cette pâte est enfin plongée dans de l’eau 
        bouillante afin de séparer l’huile des impuretés. Reposée à température ambiante, 
        l’huile devient beurre de karité.</p>
      </article>

      </section>

    </main>

  );
}

export default Process;
