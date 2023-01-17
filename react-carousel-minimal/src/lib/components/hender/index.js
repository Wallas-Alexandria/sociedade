import './Menu.css'
import logo from '../hender/icone.jpg'
import BotaoDoe from './../botaoDoe/index';


function BotoesTopo() {


    return (
      <header className='pagina'>
  
        <div className="Botoes1">
  
  
          <div > <img className='logo' src={logo} alt="" /></div>
  
          
  
          <ul >
            <li className="menus"><a href="asas">HOME   </a></li>
            <li className="menus"> <a href="ASAS">QUEM SOMOS </a></li>
            <li className="menus"><a href="asdff">PROJETOS  </a></li>
            <li className="menus"><a href="sdf">GALERIA  </a></li>
            <li className="menus"><a href="sddwef">CONTATO  </a></li>
          
            
          </ul>
          <div>
            
          </div>
          <div className="doemobile">
            <BotaoDoe/>
            </div> 
  
  
        </div>
  
      </header>
    )
  
  }
  
  
  export default BotoesTopo