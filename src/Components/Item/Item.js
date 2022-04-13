import './Item.css';

const Item =(props) => {
    // console.log(props);
    const changeName = `./${props.type}.png`;

    const removeItem = () => {
        props.onRemoveItem(props);
    };

    return (
        <section id="4fit-item" className='mb-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col p-0'>
                        <div className='card'>
                            <div className='card-body'>
                                <center><img src={changeName} alt='bicycle' className='img-size' /></center>
                            </div>
                        </div>
                    </div>    
                    <div className='col p-0'>
                        <div className='text-white fw-bold h-100 bg-secondary rounded m-0 px-2 py-3'>{props.date}</div>
                    </div>    
                    <div className='col p-0'>
                        <div className='text-white fw-bold h-100 bg-danger rounded m-0 px-2 py-3'><span>{props.hours}H : {props.minutes}M : {props.seconds}S</span></div>
                    </div>    
                    <div className='col'>
                        <button 
                            className='btn btn-outline-danger w-100'
                            onClick={removeItem}
                        >
                            Delete
                        </button>    
                    </div>    
                </div>    
            </div>
        </section>
    );
}

export default Item;


