import Item from '../Item/Item';
import './List.css'

const List = ({ data, onRemoveItem }) => {
    
    return (
        <section id='4fit-list'>
            <ul>
                {data.map((data) => {
                    return <Item {...data} key={data.id} onRemoveItem={onRemoveItem}/>
                })}
            </ul>
        </section>
    );
    
}

export default List;