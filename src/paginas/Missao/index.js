import React from 'react';
import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Missao = () => {
  return (
    <EstruturaPagina>
      <div className="missao-container">
        <h1 className="colorido">“Uma empresa sem estratégia faz qualquer negócio.”</h1>
        <img className="imgs3" src="assets/imgs.png"></img>

        <div className="container">
          <CardDeck>
            <Card>
              <CardImg top width="100%" src="assets/semcaries.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Saúde bucal</CardTitle>
                <CardText>“Disponibilizar aos clientes os melhores, mais tecnológicos e mais rápidos tratamentos dentários para garantir saúde e satisfação ao sorrir. ”
                <p>"Uma boca saudável é, uma boca sem carie"</p>
                </CardText>
                <Button color="primary">Saúde bucal</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="assets/sorriso.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Qualidade de vida</CardTitle>
                <CardText>Responsável pela beleza de um sorriso, não sendo apenas uma questão de vaidade e, sim, de saúde também.</CardText>
                <Button color="primary">Sorriso</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="assets/aparelho-sorriso.png" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Bem-estar</CardTitle>
                <CardText>“Prestar serviços de implantodontia e assegurar confiança, precisão e rapidez no diagnóstico e tratamento.”</CardText>
                <Button color="primary">Confiança</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </div>
    </EstruturaPagina>
  );
}

export default Missao;
