import React from 'react';
import style from './Lista.module.scss';

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {/* colocando chaves para escrever Javascript dentro do html */}
                {tarefas.map((item, index) => (
                    
                ))}
            </ul>
        </aside>
    )
}

export default Lista;