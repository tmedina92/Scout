import setaLeft from '../../assets/setaLeft.svg';
import setaRight from '../../assets/setaRight.svg';
import closeIcon from '../../assets/closeIcon.svg';
import CAM from '../../assets/CAM.svg';
import AME from '../../assets/AME.svg';

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
          <img src={CAM} alt="" />
          <p className="game-score">1</p>
          <p className="game-score">x</p>
          <p className="game-score">2</p>
          <img src={AME} alt="" />
          <p>AME</p>
        </div>
      </div>
      <div className="game-wrapper">
        <p className="game-date">SÁB 07/05/2022 <span>INDEPENDÊNCIA</span> 16:30</p>
        <div className="game-result">
          <p>CAM</p>
          <img src={CAM} alt="" />
          <p className="game-score">1</p>
          <p className="game-score">x</p>
          <p className="game-score">2</p>
          <img src={AME} alt="" />
          <p>AME</p>
        </div>
      </div><div className="game-wrapper">
        <p className="game-date">SÁB 07/05/2022 <span>INDEPENDÊNCIA</span> 16:30</p>
        <div className="game-result">
          <p>CAM</p>
          <img src={CAM} alt="" />
          <p className="game-score">1</p>
          <p className="game-score">x</p>
          <p className="game-score">2</p>
          <img src={AME} alt="" />
          <p>AME</p>
        </div>
      </div>
      <div className="game-wrapper">
        <p className="game-date">SÁB 07/05/2022 <span>INDEPENDÊNCIA</span> 16:30</p>
        <div className="game-result">
          <p>CAM</p>
          <img src={CAM} alt="" />
          <p className="game-score">1</p>
          <p className="game-score">x</p>
          <p className="game-score">2</p>
          <img src={AME} alt="" />
          <p>AME</p>
        </div>
      </div>
    </div>
  )
}