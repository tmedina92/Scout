import brSerieA from '../../assets/brSerieA.svg';
import brSerieB from '../../assets/brSerieB.svg';
import brSerieC from '../../assets/brSerieC.svg';
import libertadores from '../../assets/libertadores.svg';
import brFeminino from '../../assets/brFeminino.svg';
import brSub20 from '../../assets/brSub20.svg';
import copaDoNordeste from '../../assets/copaDoNordeste.svg';
import copaSulAmerica from '../../assets/copaSulAmerica.svg';
import libertadores2 from '../../assets/libertadores2.svg';
import ligaEuropa from '../../assets/ligaEuropa.svg';
import ligasDosCamp from '../../assets/ligasDosCamp.svg';
import superCopaFemin from '../../assets/superCopaFemin.svg';

import './styles.scss'

export function Feed() {
  return (
    <div className="feed-container">
      <div className="card-container">
        <img src={brSerieA} alt="brasileirão série A" />
        <button className="card-button">BRASILEIRÃO SÉRIE A</button>
      </div>
      <div className="card-container">
        <img src={brSerieB} alt="brasileirão série B" />
        <button className="card-button">BRASILEIRÃO SÉRIE B</button>
      </div>
      <div className="card-container">
        <img src={brSerieC} alt="brasileirão série C" />
        <button className="card-button">BRASILEIRÃO SÉRIE C</button>
      </div>
      <div className="card-container">
        <img src={libertadores} alt="libertadores" />
        <button className="card-button">LIBERTADORES</button>
      </div>
      <div className="card-container">
        <img src={brFeminino} alt="brasileirão feminino" />
        <button className="card-button">BRASILEIRÃO FEMININO</button>
      </div>
      <div className="card-container">
        <img src={copaSulAmerica} alt="COPA SUL-AMERICANA" />
        <button className="card-button">COPA SUL-AMERICANA</button>
      </div>
      <div className="card-container">
        <img src={superCopaFemin} alt="SUPERCOPA FEMININA" />
        <button className="card-button">SUPERCOPA FEMININA</button>
      </div>
      <div className="card-container">
        <img src={libertadores2} alt="libertadores" />
        <button className="card-button">LIBERTADORES</button>
      </div>
      <div className="card-container">
        <img src={copaDoNordeste} alt="COPA DO NORDESTE" />
        <button className="card-button">COPA DO NORDESTE</button>
      </div>
      <div className="card-container">
        <img src={ligasDosCamp} alt="LIGA DOS CAMPEÕES" />
        <button className="card-button">LIGA DOS CAMPEÕES</button>
      </div>
      <div className="card-container">
        <img src={brSub20} alt="BRASILEIRÃO SUB-20" />
        <button className="card-button">BRASILEIRÃO SUB-20</button>
      </div>
      <div className="card-container">
        <img src={ligaEuropa} alt="LIGA EUROPA" />
        <button className="card-button">LIGA EUROPA</button>
      </div>
    </div>
  )
}