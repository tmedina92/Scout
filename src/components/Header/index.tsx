import logoScout from '../../assets/logoScout.svg'
import perfil from '../../assets/perfil.svg'
import seta from '../../assets/seta.svg'
import './styles.scss'

export function Header() {
  return (
    <div className="header">
      <img className="logo" src={logoScout} alt="logo" />
      <div className="box-user">
        <img className="avatar" src={perfil} alt="" />
        <div className="content-user">
          <p className="name">Rafael Alves</p>
          <div className="content-email">
            <p className="email">rafael.alves_storm@prestador.globo</p>
            <img src={seta} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}