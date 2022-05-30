import search from '../../assets/search.svg'
import './styles.scss'

export function Search() {
  return (
    <div className="search-container">
      <div className="input-container">
        <img className="input-icon" src={search} alt="" />
        <input 
          className="input"
          type="text" 
          placeholder="Buscar" 
        />
      </div>
      <div className="buttons-container">
        <button className="button-all">Todos</button>
        <button className="button">Nacionais</button>
        <button className="button">Internacionais</button>
        <button className="button">Regionais e estaduais</button>
      </div>
    </div>
  )
}