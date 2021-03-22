import React from 'react';
import EstruturaPagina from '../../componentes/EstruturaPagina';
import Mapa from '../../componentes/Mapa';
import { Container, Row, Col } from 'reactstrap';
import './estilo.css';

const Convenios = () => {
  return (
    <EstruturaPagina>
      <div className="convenios-container">
        <div className="container-conteudo">

          <div className="odonto-prev">
            <div><h1 className="odonto">#1 OdontoPrev</h1></div>
            <div><img src="assets/ondontoprev.png"></img></div>
          </div>
          <div className="conteudo">
            <p className="lista-esquerda">
              "A operadora odontológica líder no Brasil atende"<br></br>
              <strong>6,38 milhões de pessoas</strong><br></br>
            número muito à frente dos demais colocados.<br></br>
            </p>
            <p className="lista-esquerda">
              O Grupo OdontoPrev, hoje pertencente a Bradesco Seguros, é também detentor de outras marcas como Bradesco Dental, Prívian, Odonto Serv, Prontodente, DentalCorp, Rede Dental e Sepao. Além destas marcas, também é sócio da Brasildental (BB Dental) com o Banco do Brasil.
            </p>
            <p className="lista-esquerda">
              Empresa de capital aberto, opera na bolsa de valores B3 de São Paulo sob o código ODPV3.
            </p>
            <p className="lista-esquerda">
              Sua rede credenciada é bastante pulverizada e oferece atendimento em todos os estados brasileiros.
            </p>
            <ul className="lista-esquerda2">Planos OdontoPrev
              <li className="lista-esquerda2">OdontoPrev Integral Doc LE (Livre Escolha)</li>
              <li className="lista-esquerda2">OdontoPrev Master LE (Livre Escolha)</li>
            </ul>
          </div>
        </div>

        <div className="container-conteudo">
          <div className="odonto-prev">
            <div><h1 className="odonto">#2 Interodonto</h1></div>
            <div><img src="assets/inter.png"></img></div>
          </div>
          <div className="conteudo">
            <p className="lista-esquerda">
              A 2ª maior operadora odontológica, com<br></br>
              <strong>2,55 milhões </strong>de beneficiários,<br></br>
              pertence ao Grupo NotreDame Intermédica (GNDI).<br></br>Em conjunto com assistência médica oferece solução<br></br> completa de saúde aos seus clientes..<br></br>
            </p>
            <p className="lista-esquerda">
              Em 2012, a GNDI passou a fazer parte da Bain Capital, grupo americano com forte presença no setor de saúde. Empresa de capital aberto em 2018, opera na bolsa de valores B3 de São Paulo sob o código GNDI3. Em 2019 comprou a operadora Belo Dente de Minas Gerais.
                </p>
            <p className="lista-esquerda">
              Oferece ampla rede credenciada em todas as regiões do Brasil.
                </p>
            <ul className="lista-esquerda2">Planos Interodonto
              <li className="lista-esquerda2">Interodonto Smart Odonto</li>
              <li className="lista-esquerda2">Interodonto Premium Plus DO (+ documentação ortodôntica básica)</li>
              <li className="lista-esquerda2">Interodonto Top Premium Gold (estética)</li>
              <li className="lista-esquerda2">Interodonto Top Premium Orto (ortodontia)</li>
              <li className="lista-esquerda2">Interodonto Select (próteses)</li>
              <li className="lista-esquerda2">Interodonto Excelence (próteses e ortodontia)</li>
            </ul>
          </div>
        </div>


        <div className="container-conteudo">

          <div className="odonto-prev">
            <div><h1 className="odonto">#3 Amil Dental</h1></div>
            <div><img src="assets/amil.png"></img></div>
          </div>
          <div className="conteudo">
            <p className="lista-esquerda">
            A Amil é a 3ª colocada em planos odontológicos, atende<br></br>
              <strong>2,13 milhões </strong><br></br>
              de pessoas com produto Amil Dental, oferecendo solução completa em saúde aos seus clientes.<br></br>
            </p>
            <p className="lista-esquerda">
            Com mais de 30 anos de existência, é uma das mais tradicionais do mercado. Em 2012, a Amil passou a fazer parte do UnitedHealth Group, grupo americano especialista em saúde.
            </p>
            <p className="lista-esquerda">
            Em 2013 encerrou a participação na bolsa de valores de São Paulo e se tornou empresa de capital fechado.
            </p>
            <p className="lista-esquerda">
            Oferece ampla rede credenciada e atendimento em todos Estados brasileiros.
            </p>
            <ul className="lista-esquerda2">Planos Amil Dental Empresas
              <li className="lista-esquerda2">Dental 205</li>
              <li className="lista-esquerda2">Dental E35 – Próteses</li>
              <li className="lista-esquerda2">Dental E45 – Ortodontia (aparelhos)</li>
            </ul>
          </div>
        </div>


        <div className="container-conteudo">

          <div className="odonto-prev">
            <div><h1 className="odonto">#4 Porto Seguro Odontológico</h1></div>
            <div><img src="assets/porto.png"></img></div>
          </div>
          <div className="conteudo">
            <p className="lista-esquerda">
              Na 8ª posição do ranking de planos odontológicos está a Porto Seguro, com<br></br>
              <strong>570 mil pessoas </strong>
              cobertas. Este grande grupo brasileiro, com atualmente 28 empresas, é muito reconhecido pela qualidade de serviços e atendimento.<br></br>
            </p>
            <p className="lista-esquerda">
            Empresa de capital aberto, opera na bolsa de valores B3 de São Paulo sob o código PSSA3.
            </p>
            <ul className="lista-esquerda2">Planos Porto Seguro Odontológico
              <li className="lista-esquerda2">Porto Seguro Odonto Bronze</li>
              <li className="lista-esquerda2">Porto Seguro Odonto Bronze Integral</li>
              <li className="lista-esquerda2">Porto Seguro Odonto Bronze DOC</li>
              <li className="lista-esquerda2">Porto Seguro Onodo Bronze Plus</li>
              <li className="lista-esquerda2">Porto Seguro Odonto Prata</li>
              <li className="lista-esquerda2">Porto Seguro Odonto Prata Plus</li>
              <li className="lista-esquerda2">Porto Seguro Odonto Ouro</li>
              <li className="lista-esquerda2">Porto Seguro Odonto Prótese</li>
            </ul>
          </div>
        </div>
      </div>
    </EstruturaPagina>
  );
}

export default Convenios;
