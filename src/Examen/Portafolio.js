import React, { Component } from 'react';
import './Portafolio.css';

class Portafolio extends Component {
    render() {
        return (
            <div>
                <div className="Carta">
                <img src="https://lanoticia.com/wp-content/uploads/2020/10/dia-mundial-animacion.jpg" />
                    <div>
                    <a href="/Animating">animating</a>
                    </div>
                </div>
                <div className="Carta">
                <img src="https://totumat.files.wordpress.com/2020/10/calculadora.png?w=810" />
                    <div>
                    <a href="/calculator">Calculator</a>
                    </div>
                </div>
                <div className="Carta">
                <img src="https://fotos.perfil.com/2022/03/09/trim/950/534/criptomonedas-1323158.jpg?webp" />
                    <div>
                    <a href="/crypto">Crypto</a>
                    </div>
                </div>
                <div className="Carta">
                <img src="https://lanoticia.com/wp-content/uploads/2020/10/dia-mundial-animacion.jpg" />
                    <div>
                    <a href="/pomodoro">Pomodoro</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portafolio;