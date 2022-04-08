import { element } from 'prop-types';
import Item from '../Item/Item';
import './List.css'

const List = ({ data }) => {
    // const { data } = props;
    return (
        <section id='4fit-list'>
            <ul>
                {data.map((element) => {
                    return <Item {...element} key={element.id}/>
                })}
            </ul>
        </section>
    );
    
}

export default List;