import style from '../Lista.module.scss';

// Nas versões mais recentes, o react não precisa ser exportado
export default function Item({ tarefa, tempo }: { tarefa: string, tempo: string }) {
    return (
        // esta "key" será omitida no front end
        <li className={style.item}>
        <h3>{tarefa}</h3>
        <span> {tempo} </span>
    </li>
    )
}