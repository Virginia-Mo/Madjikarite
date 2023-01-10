import React, { useEffect } from 'react';
import Video from './Video';

import WorkersPartA from 'src/assets/imgs/workersPartA.jpg';
import WorkersPartB from 'src/assets/imgs/workersPartB.jpg';

import AOS from 'aos';

import "aos/dist/aos.css";
import './style.scss';


function Workers() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.scroll(0, 0);
  },[]);

  return (

    <main className="workers">

      <h2 className="mainTitle__h2">Les productrices</h2>

      <p className="workers__introduction">
      introduction</p>
      
      <hr className="hr" />
      <section className="workers__section">
        
        <article className="workersBloc__article"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="workersBloc__imgDiv">
            <img src={WorkersPartA} alt="Women workers " className="workersBloc__img" />
          </div>
          <div className="workersBloc__pDiv">
            <h3 className="workersBloc__h3">Présentation</h3>
            <p className="workersBloc__p">A compléter</p> 
          </div>
        </article>

        <article className="workersbloc__article workersBloc__article--mobile"
          data-aos="fade-up"
          data-aos-duration="1500">
          <div className="workersBloc__pDiv">
            <h3 className="workersBloc__h3">Présentation suite</h3>
            <p className="workersBloc__p">A compléter</p> 
          </div>
            <div className="workersBloc__imgDiv">
            <img src={WorkersPartB} alt="workers" className="workersBloc__img" />
          </div>
        </article>  
      </section>

      <hr className="hr" />

      <div className="workers__video">
        <Video />
      </div>
      
    </main>
  
  );
}

export default Workers;
