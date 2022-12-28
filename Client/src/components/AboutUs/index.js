import React, { useState, useEffect } from 'react';

import YankiPresentation from 'src/assets/imgs/yankiPresentation.jpg';
import YankiHistory from 'src/assets/imgs/yankiHistory.jpg';


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

    <h2 className="aboutUs__title">Nos engagements</h2>

    <section className="values">

      <div className="values__article">   
        <div className="values__article--textA"><p className="values__article--title">La lutte contre l'excision</p></div>
        <div className="values__hoverText">La lutte contre l’excision doit s’intensifier. 
          Bien que cette pratique soit interdite, les cas d’excision se multiplient au Tchad. 
          Les normes sociales et les traditions séculaires sont souvent bien plus fortes que la peur 
          d’une condamnation. Mais au-delà d’un changement de mentalité et de comportement, il s’agit 
          avant tout de proposer aux exciseuses un choix alternatif pour gagner en autonomie financière. 
        </div>
      </div>

      <div className="values__article">
        <div className="values__article--textB"><p className="values__article--title">La lutte pour l'égalité homme - femme</p></div>
        <div className="values__hoverText">La lutte pour l’égalité homme - femme est un enjeu majeur 
          pour Madjikarité. J’ai donc créé un produit naturel d’excellente qualité pour la beauté de votre 
          peau, mais également une marque qui destinée à promouvoir l’autonomisation financière des femmes 
          et à lutter contre leur pauvreté en milieu rural.
        </div>  
      </div>

      <div className="values__article">
        <div className="values__article--textC"><p className="values__article--title">Le respect de l'environnement</p></div>
        <div className="values__hoverText">La désertification est un problème majeur. Contrairement aux cultures 
        destinées à l’exportation, l’arbre de  karité est un arbre sauvage qui permet de lutter contre ce phénomène 
        de désertification. Cependant, la filière karité est peu développée 
        au Tchad alors qu’il est établi par de nombreuses études qu’elle peut être un levier de développement pour ce pays. 
        </div>
      </div>

      <div className="values__article">
        <div className="values__article--textD"><p className="values__article--title">La qualité de nos produits</p></div>
        <div className="values__hoverText">Un autre enjeu est d’offrir aux consommateurs des produits de qualité 
        issus du commerce équitable. Je propose une gamme de soins cosmétiques, fabriqués à la main dans mon atelier en France. 
        J’utilise comme base, un beurre de karité pur, non raffiné, provenant d’une agriculture biologique au Burkina, où les 
        coopératives sont déjà formées aux techniques de production.  
        </div>  
      </div>

    </section>

    
    <hr className="hr" />
    
    <section className="aboutUs__section">
        <article className="aboutUsBloc__article"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="aboutUsBloc__imgDiv">
            <img src={YankiPresentation} alt="yanki présentation" className="aboutUsBloc__img" />
          </div>
          <div className="aboutUsBloc__pDiv">
            <h3 className="aboutUsBloc__h3">Portrait de Yanki</h3>
            <p className="aboutUsBloc__p">Mon nom est Yankimadji RASSEMBAYE et j’ai 30 ans. Je suis née à la campagne, d’un père cultivateur et d’une mère femme de ménage.
              Mes parents m’ont confié à ma tante, qui vivait dans la ville de Sarh, au Tchad. À l’âge de 7 ans, ma tante m’a envoyée à l’école du quartier.
              En échange, j’aidais aux tâches ménagères de la maison.</p>
            <p className="aboutUsBloc__p">En 2000, un couple de Français est arrivé dans  la famille de ma tante. J’ai été confié à ce couple
              et j’ai vécu  pendant 9 mois avec eux. Ce fut un épisode marquant de mon histoire personnelle. Au terme de son séjour au Tchad, le couple s’est engagé à
              prendre entièrement en charge ma scolarité. Grâce à eux, j’ai pu accéder aux meilleures écoles et faire des études universitaires. Titulaire d’un master2
              en Ingénierie des projets de coopération et d’une licence en gestion des entreprises, je me suis intéressée à la place des femme dans le développement.
              Cette analyse m’a permis de conclure qu’elles étaient les plus pauvres.</p>
            <p className="aboutUsBloc__p">Après mon master, j’ai cherché du travail pendant 1 an et demi dans les organismes
              de développement. Le marché étant saturé,  j’ai décidé de lancer mon propre projet professionnel. A l’instar de ces organismes, j’avais à cœur de mettre en
              place un projet qui implique le changement et  le développement d’un territoire.</p>
          </div>
        </article>

        <article className="aboutUsBloc__article aboutUsBloc__article--mobile"
          data-aos="fade-up"
          data-aos-duration="1500">
          <div className="aboutUsBloc__pDiv">
            <h3 className="aboutUsBloc__h3">L'histoire de Madjikarité</h3>
            <p className="aboutUsBloc__p">«Madji» vient du «sar» une langue du sud du Tchad, qui signifie «bien». Madjikarité veut donc dire «les bienfaits du karité» ou encore
              traduit mot à mot: « karité quelque chose de bien». Les bienfaits du karité pour le corps, mais aussi  pour l’autonomisation de la femme. On retrouve «Madji»
              dans mon prénom Yankimadji, qui veut dire «quelque chose de bien». J’ai voulu traduire en acte ce joli prénom que je porte pour donner du sens à ma lutte pour
              l’égalité, soit: «Madjikarité»,  «quelque chose de bien».</p>
            <p className="aboutUsBloc__p">L’ambition de Madjikarité est de promouvoir l’autonomisation financière des femmes en milieu rural,
              de lutter contre l’excision en donnant une activité aux exciseuses, contre la désertification par la plantation d’arbre de karité, de lutter contre la dépigmentation
              de la peau en proposant des produits naturels et bio et de promouvoir un développement durable au Tchad. La vision de Madjikarité est celle d’une société Tchadienne
              où chaque femme jouit de son autonomie financière. Sa mission est de lutter contre la pauvreté féminine au Tchad et promouvoir un développement durable. Désireuse
              d’apporter ma contribution dans mon pays, à la lutte contre les inégalités femmes/ hommes, je cherche à renforcer l’autonomisation financière des femmes en Afrique
              (Burkina, Tchad) à partir de la mise en valeur des ressources locales aujourd’hui peu valorisées.</p>
            <p className="aboutUsBloc__p">Ma rencontre avec Mme Russell Chinwe, la présidente de Sheabynature qui fabrique des produits naturels à base de karité depuis 15 ans, a donné de la valeur à mon projet.
              Elle m’a formé, m’a appris à faire les savons, les laits corporels, les beurres corporels et les beurres à lèvres. Mon ambition à terme serait de former quelques femmes Tchadiennes au Burkina
              et de créer une association pour que femmes tchadiennes et burkinabés puissent travailler ensemble. L’idée est de mettre en place une usine de beurre de karité
              biologique  et équitable au Tchad. Ce beurre de karité serait destiné à être raffiné dans mes produits cosmétiques, fabriqués et commercialisés en France.
              J’ai donc fait le choix d’une démarche d’économie sociale et solidaire. Il s’agit à la fois d’offrir aux consommateurs un produit naturel de qualité, et de donner
              une activité salariale aux femmes en milieu rural, pour lutter contre leur pauvreté.</p>
            <p className="aboutUsBloc__p">Découvrir plus en cliquant sur ce lien:</p>
            <p className="aboutUsBloc__p"><href className="aboutUsBloc__link">https://www.histoiresordinaires.fr/Yankimadji-a-cree-son-entreprise-ici-pour-les-femmes-de-la-bas-au-Tchad_a2795.html</href></p>
          </div>
          <div className="aboutUsBloc__imgDiv">
            <img src={YankiHistory} alt="Yanki au Tchad" className="aboutUsBloc__img" />
          </div>
        </article>
      </section>
    </main>
  );
}

export default AboutUs;
