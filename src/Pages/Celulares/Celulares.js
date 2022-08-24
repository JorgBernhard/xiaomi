import './style-celulares.css';
import Redmi10c from '../../assets/Redmi10c.png';
import Note11 from '../../assets/Note11.png';
import PocoX4 from '../../assets/PocoX4128g6ram.png';
import Mi11lite  from '../../assets/Mi11lite.png';
import PocoF3 from '../../assets/Pocof3.png';
import Mi11T from '../../assets/Mi11T.png';
import PocoX4GT from '../../assets/PocoX4GT.png';

function Celulares() {
  return (
    <div id="celulares">
    <div className="Container-Celulares">
       <h3 className="estoque">Nosso Estoque en Natal</h3>
      <ul>
        <img className="foto" src={Redmi10c} alt="redmi10c" />
        <li>Redmi 10c 128g 4ram</li>
      </ul>
      <ul>
        <img className="foto" src={Note11} alt="note11" />
        <li>Note 11 128g 4 ram</li>
      </ul>
      <ul>
      <img className="foto" src={Note11} alt="note11" />
        <li>Note 11 128g 6ram</li>
        </ul>
        <ul>
        <img className="foto" src={PocoX4} alt="pocox4128g" />
        <li>Poco X4 128g 6ram </li>
        </ul>
        <ul>
        <img className="foto" src={PocoX4} alt="pocox4128g" />
        <li>Poco X4 256g 8ram</li>
        </ul>
        <ul>
        <img className="foto" src={Mi11lite} alt="mi11lite" />
        <li>Mi 11 lite NE 128g 8ram</li>
        </ul>
        <ul>
        <img className="foto" src={PocoF3} alt="pocof3" />
        <li>Poco f3 8ram 256g</li>
        </ul>
        <ul>
        <img className="foto" src={Mi11T} alt="mi11t" />
        <li>Mi 11T 8ram 256g</li>
        </ul>
        <ul>
        <img className="foto" src={PocoX4GT} alt="pocoxgt" />
        <li>Poco X4 GT 256g 8ram</li>
        </ul>
        <ul>
        <li>...</li>
      </ul>
    </div>
    </div>
  );
}

export default Celulares;
