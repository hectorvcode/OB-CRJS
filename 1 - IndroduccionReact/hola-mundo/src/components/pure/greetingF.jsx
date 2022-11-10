import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Intro a useState
    // const [variable, metodo para actualizarla] = useState(valor inicial)
    const [age, setstate] = useState(29);

    return (
        <div>
            <h1>
                Hola! { props.name } desde componente funcional!
            </h1>
            {/* <h2>
                Tu edad es de: 
            </h2>
            <div>
                <button>

                </button>
            </div> */}
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
