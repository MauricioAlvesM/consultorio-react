import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import Mapa from '../../componentes/Mapa';
import './calendar.css';
import './estilo.css';

const Agenda = () => {
  return (
    <EstruturaPagina>
      <div className="agenda-container">
      <div className="agenda-container">
      <div className="wrapper">
  <main>
    <div className="toolbar">
      <div className="toggle">
        <div className="toggle__option">Semana</div>
        <div className="toggle__option toggle__option--selected">Mês</div>
      </div>
      <div className="current-month">MARÇO 2021</div>
      <div className="search-input">
        <input type="text" value="Horários Disponíveis"></input>
        <i className="fa fa-search"></i>
      </div>
    </div>
    <div className="calendar">
      <div className="calendar__header">
        <div>Seg</div>
        <div>ter</div>
        <div>qua</div>
        <div>qui</div>
        <div>sex</div>
        <div>sab</div>
        <div>dom</div>
      </div>
      <div className="calendar__week">
        <div className="calendar__day day">01<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">02<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">03<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">04<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">05<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">06<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">07<h2 className="fechado">Fechado</h2></div>
      </div>
      <div className="calendar__week">
        <div className="calendar__day day">08<h2 className="cheio">Cheio</h2></div>
        <div className="calendar__day day">09<h2 className="cheio">Cheio</h2></div>
        <div className="calendar__day day">10<h2 className="cheio">Cheio</h2></div>
        <div className="calendar__day day">11<h2 className="cheio">Cheio</h2></div>
        <div className="calendar__day day">12<h2 className="cheio">Cheio</h2></div>
        <div className="calendar__day day">13<h2 className="cheio">Cheio</h2></div>
        <div className="calendar__day day">14<h2 className="cheio">Cheio</h2></div>        
      </div>
      <div className="calendar__week">
        <div className="calendar__day day">15<h2 className="free">Disponível</h2></div>
        <div className="calendar__day day">16<h2 className="free">Disponível</h2></div>
        <div className="calendar__day day">17<h2 className="cheio">Cheio</h2></div>
        <div className="calendar__day day">18<h2 className="cheio">Cheio</h2></div>
        <div className="calendar__day day">19<h2 className="free">Disponível</h2></div>
        <div className="calendar__day day">20<h2 className="cheio">Cheio</h2></div>
        <div className="calendar__day day">21<h2 className="cheio">Cheio</h2></div>    
      </div>
      <div className="calendar__week">
        <div className="calendar__day day">22<h2 className="free">Disponível</h2></div>
        <div className="calendar__day day">23<h2 className="free">Disponível</h2></div>
        <div className="calendar__day day">24<h2 className="free">Disponível</h2></div>
        <div className="calendar__day day">25<h2 className="free">Disponível</h2></div>
        <div className="calendar__day day">26<h2 className="free">Disponível</h2></div> 
        <div className="calendar__day day">27<h2 className="free">Disponível</h2></div> 
        <div className="calendar__day day">28<h2 className="free">Disponível</h2></div> 
      </div>
      <div className="calendar__week">
        <div className="calendar__day day">29<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">30<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">01<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">02<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">03<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">04<h2 className="fechado">Fechado</h2></div>
        <div className="calendar__day day">05<h2 className="fechado">Fechado</h2></div>
      </div>
    </div>
  </main>
  <sidebar className="barra-lat">
    
    <div className="avatar">

      <div className="avatar__name">Dentes Saudaveis</div>
    </div>
    <nav className="menu">
      <a className="menu__item" href="#">
        <i className="menu__icon fa fa-home"></i>
        <span className="menu__text">Visão</span>
      </a>
      <a className="menu__item" href="#">
        <i className="menu__icon fa fa-envelope"></i>
        <span className="menu__text">Mensagens</span>
      </a>
      <a className="menu__item menu__item--active" href="#">
        <i className="menu__icon fa fa-calendar"></i>
        <span className="menu__text">Calendário</span>
      </a>
      <br></br>
      <br></br>
      <br></br>
      <a className="menu__item" href="#">
        <i className="menu__icon fa fa-envelope"></i>
        <span className="menu__text">Horários:
          <ul><p>Segunda / Sexta</p>
              <li className="time">7:00 / 23:00</li>
          </ul>
          <br></br>
          <ul><p>Sábado / Domingo</p>
              <li className="time">8:00 / 18:00</li>
          </ul>
        </span>
      </a>
      <a className="menu__item" href="#">
        <i className="menu__icon fa fa-envelope"></i>
        <span className="menu__text">Mensagens</span>
      </a>
    </nav>
    
  </sidebar>
  </div>
</div>
      </div>
    </EstruturaPagina>
  );
}

export default Agenda;
