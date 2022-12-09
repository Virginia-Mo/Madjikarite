import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import SheaCream from 'src/assets/imgs/sheaCream.jpeg';
import Producers from 'src/assets/imgs/producers.jpg';
import Slide from '../Slide';
import AOS from 'aos';

import "aos/dist/aos.css";
import './style.scss';



function AboutUs() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <main className="aboutUs">

      <h1 className="mainTitle__h1">Nos valeurs</h1>
      {/* Insert the Slide components */}
      <Slide />
      <hr className="hr" />
      <section className="welcomePage__section">
        <article className="bloc__article"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="bloc__imgDiv">
            <img src={Producers} alt="Photo des producteurs de karité" className="bloc__img" />
          </div>
          <div className="bloc__pDiv">
            <h3 className="bloc__h3">Portrait de Yanki</h3>
            <p className="bloc__p">Mon nom est Yankimadji RASSEMBAYE et je suis la fondatrice de l'entreprise Madjikarité. J'ai 30 ans et je suis née à la campagne,
            d’un père cultivateur et d’une mère ménagère. J’ai rejoint la ville de Sarh (Tchad) à l’âge de 4ans, où mes parents m’avaient confiée à ma tante. 
            À l’âge de 7 ans, ma tante m’a envoyée à l’école du quartier. En échange, j’aidais aux tâches ménagères de la maison. Tout a commencé quand un couple français
            est arrivé dans la famille de ma tante, en 2000. J’ai été confiée à ce couple. J’ai vécu pendant 9 mois avec eux. Mon destin a commencé à se tracer à ce moment là. 
            Au terme de mon séjour au Tchad, le couple s’est engagé à prendre entièrement en charge ma scolarité. Grâce à eux, j’ai pu accéder aux meilleures écoles et 
            faire des études universitaires. Je suis titulaire d’un master2 en Ingénierie des projets de coopération et d’une licence en gestion des entreprises. 
            Désireuse de contribuer dans mon pays, à la lutte contre les inégalités femmes/ hommes, je cherche à renforcer l’autonomisation financière des femmes en Afrique 
            (Burkina, Tchad) à partir de la mise en valeur des ressources locales aujourd’hui peu valorisées .La filière karité est peu développée au Tchad et il est établi 
            par de nombreuses études qu’elle peut-être un levier de développement pour ce pays..</p>
          </div>
        </article>

        <article className="bloc__article bloc__article--mobile"
          data-aos="fade-up"
          data-aos-duration="1500">
          <div className="bloc__pDiv">
            <h3 className="bloc__h3">L'histoire de Madjikarité</h3>
            <p className="bloc__p">Après mon master, je me suis intéressée à la place de la femme dans le développement. Résultat de l’analyse: elles sont les plus pauvres. 
            Après mon master, j’ai cherché du travail pendant 1 an et demi 
            dans les organismes de développement. Le marché étant saturé, j’ai décidé de lancer mon projet professionnel. À l’instar de certains organismes de développement, 
            j’ai décidé de mettre en place moi aussi un projet qui provoque le changement, le développement d’un territoire.</p>
          </div>
          <div className="bloc__imgDiv">
            <img src={SheaCream} alt="Photo décorative, karité" className="bloc__img" />
          </div>
        </article>

      </section>
    </main>
  
  );
}

export default AboutUs;
