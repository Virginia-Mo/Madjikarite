import React, { useEffect } from 'react';

import SheaUse from 'src/assets/imgs/sheaUse.jpeg';
import SheaCream from 'src/assets/imgs/sheaCream.jpeg';

import AOS from 'aos';

import "aos/dist/aos.css";
import './style.scss';



function SheaBenefits() {   
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);



  return (

    <main className="sheaBenefits">

      <h2 className="mainTitle__h2">Les vertus du beurre de karité</h2>

      <p className="sheaBenefits__introduction">Naturellement riche en vitamine E et en acides gras, 
      le beurre de karité possède des propriétés exceptionnelles pour les peaux délicates et sèches. 
      Il est idéal pour nourrir, adoucir, protéger et revitaliser votre corps: talons, coudes, lèvres, 
      cheveux secs et fatigués… Apaisant et réparateur, il est également très apprécié en soin après-soleil 
      et apporte un réconfort immédiat.</p>
      
      <hr className="hr" />
      <section className="sheaBenefits__section">
        <article className="sheaBenefitsBloc__article"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="sheaBenefitsBloc__imgDiv">
            <img src={SheaUse} alt="vertus du beurre de karité" className="sheaBenefitsBloc__img" />
          </div>
          <div className="sheaBenefitsBloc__pDiv">
            <h3 className="sheaBenefitsBloc__h3">Propriétés et bienfaits</h3>
            <p className="sheaBenefitsBloc__p">L’utilisation quotidienne du beurre de karité combat le vieillissement de la peau. 
            En recouvrant la peau d’une pellicule invisible, le beurre de karité permet d’éviter sa déshydration et 
            la protège des agressions de la nature : soleil, vent ou changements brusques de température. Connu pour 
            calmer les peaux irritées, comme pour la régénération de la peau, le beurre de karité est le plus efficace 
            des anti-vieillissements naturels.</p> 
            <h3 className="sheaBenefitsBloc__h3">Visage et corps</h3>
            <p className="sheaBenefitsBloc__p">Le karité nourrit et répare les lèvres auxquelles il apporte une brillance naturelle. 
            Il nourrit et hydrate le nez irrité par les allergies ou les rhumes. Le beurre de karité rend la peau saine, 
            hydratée et lisse.</p> 
            <h3 className="sheaBenefitsBloc__h3">Soins des cheveux</h3>
            <p className="sheaBenefitsBloc__p">Le karité protège les cheveux. Il leur apporte douceur, brillance et volume.</p>
          </div>
        </article>

        <article className="sheaBenefitsBloc__article sheaBenefitsBloc__article--mobile"
          data-aos="fade-up"
          data-aos-duration="1500">
          <div className="sheaBenefitsBloc__pDiv">
            <h3 className="sheaBenefitsBloc__h3">Peaux très sensibles</h3>
            <p className="sheaBenefitsBloc__p">Le karité hydrate et illumine durablement le visage et le corps grâce à sa  concentration 
            en vitamine F et E. Il est recommandé aux peaux qui rougissent, à tendance allergique.</p> 
            <h3 className="sheaBenefitsBloc__h3">Grossesse et allaitement</h3>
            <p className="sheaBenefitsBloc__p">Le karité prévient l’apparition et la formation des vergetures sur le ventre comme sur la 
            poitrine et protège le bébé des rougeurs.</p> 
            <h3 className="sheaBenefitsBloc__h3">Sport</h3>
            <p className="sheaBenefitsBloc__p">Le karité est très efficace sur les articulations des coudes et des genoux, le dessous des 
            pieds et les talons. Appliqué sur la peau avant et après l’exercice physique, il la rend plus souple et atténue 
            les callosités, permettant une récupération rapide des muscles.</p>
          </div>
          <div className="sheaBenefitsBloc__imgDiv">
            <img src={SheaCream} alt="beurre de karité" className="sheaBenefitsBloc__img" />
          </div>
        </article>

      </section>
    </main>
  
  );
}

export default SheaBenefits;
