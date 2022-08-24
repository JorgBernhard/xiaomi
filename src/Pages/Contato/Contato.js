import React from 'react';
import './style-contato.css';
import Facebook from '../../assets/icons/Facebook-logo.png'
import QRCode from '../../assets/code-xiaomi.png'


function Contato() {
 
    return (
      <div id="contato">
        <div className="Contato">
            <h2 className="Contato-header">Contato</h2>
            <h3 className="Info-Maiara">Entre em contato com Maiara (84) 99701-7888</h3>
              <div className="emailMaiara">
                <a className="send-email" href="mailto:xiaomismartfones@gmail.com" alt="email">Email:xiaomismartfones@gmail.com</a><br></br>
              </div>
               <div className="Facebook">
                <img className="Face-Img" src={Facebook} alt="facebook" />
                <a className="facebook" target="_blank" rel="noreferrer" href={"https://www.facebook.com/profile.php?id=100084056420204"} alt="facebook">Facebook</a>
               </div>
               <img className="QR-Code" src={QRCode} alt="qrcode" />
        </div>
      </div>
  );
}

export default Contato;
