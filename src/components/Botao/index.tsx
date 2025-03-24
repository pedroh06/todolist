import React from 'react';
import style from './Botao.module.scss';

// A classe Botão será tratada como um componente react
class Botao extends React.Component<{ texto: string}> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao;