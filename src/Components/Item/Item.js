import './Item.css';


const Item =(props) => {
    // console.log(props);
    const changeName = `./${props.type}.png`;

    const removeItem = () => {
        props.onRemoveItem(props);
    };

    const editItem =() => {
        props.onEditItem(props);
    };

    const getItem = () => {
        props.onGetItem(props);
    };

    
    return (
        <section id='4fit-item'>
            <table className='table table-borderless'>
                <tbody>
                    <tr>
                        <td>
                            <img src={changeName} 
                                  alt='bicycle' 
                                  className='img-size'
                                  onClick={getItem}
                            />
                        </td>
                        <td className='bg-danger text-center text-white rounded fs-5 pt-4 d-none d-sm-table-cell'>
                            {props.date}
                        </td>
                        <td className='bg-secondary text-center text-white rounded fs-5 pt-4 d-none d-sm-table-cell'>
                            <span>
                                {props.hours < 10? `0${props.hours}` : `${props.hours}`}H : 
                                {props.minutes < 10? `0${props.minutes}` : `${props.minutes}`}M : 
                                {props.seconds < 10? `0${props.seconds}` : `${props.seconds}`}S
                            </span>
                        </td>
                        <td>
                            <button className='btn btn-outline-danger w-100' onClick={removeItem}>Delete</button>    
                        </td>
                        <td>
                            <button className='btn btn-outline-primary w-100' onClick={editItem}>Edit</button>    
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Item;


