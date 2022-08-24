import './style-main.css';
import XiaomiLogo from '../../assets/Xiaomi.png';
import Charger from '../../assets/charging.png';

function Main() {
  return (
    <div id="main">
    <div className="Container-Main">
      <img className="Xiaomi-logo" src={XiaomiLogo} alt="xiaomi-logo" />
      <div className="titulo">
      <h3 className="Nome">Smartphone Xiaomi</h3>
      <h3 className="Cidade">Em Natal</h3>
    
      <h4 className="Texto">Compras e varejo<br></br><br></br>
          Uma ampla seleção dos mais novos celulares da Xiaomi
          <br></br><br></br>
          Preço baixo, qualidade e procedência!<br></br><br></br>
          Entrega grátis</h4>
<img className="charger" src={Charger} alt="charger" />
                          </div>
    </div>
    </div>
  );
}

export default Main;
