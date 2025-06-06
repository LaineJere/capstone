import React from 'react';
import Katrina from '../images/Katrina.jpg';
import Fogaca from '../images/Fogaca.jpg';

function AboutSection() {
    return (
        <section className='about'>
            <article>
              <h2>Little Lemon</h2>
              <h3>Florença</h3>
              <p>Little Lemon É um restaurante mediterrâneo familiar fundado por Sofia e Paolo. Eles combinam receitas tradicionais com um toque moderno para criar uma experiência gastronômica única. Utilizando ingredientes frescos e locais, eles trazem sabores autênticos a cada prato. A paixão de Sofia e Paolo pela comida e pela hospitalidade transparece em cada refeição. No Little Lemon, você é convidado a desfrutar do
                calor e do sabor da culinária mediterrânea em um ambiente acolhedor.</p>
            </article>
            <div>
              <img src={Katrina} alt="Owner Katrina" />
              <img src={Fogaca} alt="Owner Fogaca" />
            </div>
        </section>
    )
}

export default AboutSection;