import setaLeft from '../../assets/setaLeft.svg';
import setaRight from '../../assets/setaRight.svg';
import closeIcon from '../../assets/closeIcon.svg';
import CAM from '../../assets/CAM.svg';
import AME from '../../assets/AME.svg';
import CAP from '../../assets/CAP.svg';
import CEA from '../../assets/CEA.svg';
import FLA from '../../assets/FLA.svg';
import BOT from '../../assets/BOT.svg';
import PAL from '../../assets/PAL.svg';
import FLU from '../../assets/FLU.svg';

import './styles.scss'

export function Modal() {
  return (
    <div className="modal-wrapper">
      <img className="close-modal" src={closeIcon} alt="" />
      <div className="modal-header">
        <img src={setaLeft} alt="leftArrow" />
        <p className="modal-title">5º RODADA</p>
        <img src={setaRight} alt="rightArrow" />
      </div>
      <div className="game-wrapper">
        <p className="game-date">SÁB 07/05/2022 <span>INDEPENDÊNCIA</span> 16:30</p>
        <div className="game-result">
          <p>CAM</p>
          <img src={CAM} alt="Atlético Mineiro" />
          <p className="game-score">1</p>
          <p className="game-score">x</p>
          <p className="game-score">2</p>
          <img src={AME} alt="América" />
          <p>AME</p>
        </div>
      </div>
      <div className="game-wrapper">
        <p className="game-date">SÁB 07/05/2022 <span>INDEPENDÊNCIA</span> 19:30</p>
        <div className="game-result">
          <p>CAP</p>
          <img src={CAP} alt="Atlético Paranaense" />
          <p className="game-score">1</p>
          <p className="game-score">x</p>
          <p className="game-score">2</p>
          <img src={CEA} alt="Ceará" />
          <p>CEA</p>
        </div>
      </div>
        <div className="game-wrapper">
        <p className="game-date">DOM 08/05/2022 <span>INDEPENDÊNCIA</span> 16:30</p>
        <div className="game-result">
          <p>FLA</p>
          <img src={FLA} alt="Flamengo" />
          <p className="game-score">1</p>
          <p className="game-score">x</p>
          <p className="game-score">2</p>
          <img src={BOT} alt="Botafogo" />
          <p>BOT</p>
        </div>
      </div>
      <div className="game-wrapper">
        <p className="game-date">DOM 08/05/2022 <span>INDEPENDÊNCIA</span> 19:30</p>
        <div className="game-result">
          <p>PAL</p>
          <img src={PAL} alt="Palmeiras" />
          <p className="game-score">1</p>
          <p className="game-score">x</p>
          <p className="game-score">2</p>
          <img src={FLU} alt="Fluminense" />
          <p>FLU</p>
        </div>
      </div>
    </div>
  )
}