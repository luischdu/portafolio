import React from 'react'
import H2Styled from '../styled/H2Styled';

// Componentes como funciones Stateless ([Return implicito])
const Education = () => (
    <div>
        <H2Styled name= 'Estudios' />
        <div className="Education-contariner">
            <div className="Education-item">
                <h3>U. Sabana - <span>2019</span></h3>
                <p>Ingeniero Químico</p>
            </div>
        </div>
    </div>
);


export default Education
