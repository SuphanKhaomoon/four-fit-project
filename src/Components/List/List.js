import './List.css'

const List = () => {
    return (
        <section id='4fit-list'>
            <div className='container W-100'>
                <div className='row'>
                    <div className='col p-0'>
                        <div className='card bg-primary'>
                            <div className='card-body'>
                                <h4 className='card-title text-white m-0 ps-2 pe-5 py-2'>CYCLING</h4>
                            </div>
                        </div>
                    </div>    
                    <div className='col p-0'>
                        <div className='card bg-secondary'>
                            <div className='card-body'>
                                <h4 className='card-title text-white m-0 px-2 py-2'>30/03/2022</h4>
                            </div>
                        </div>    
                    </div>    
                    <div className='col p-0'>
                        <div className='card bg-danger'>
                            <div className='card-body'>
                                <h4 className='card-title text-white m-0 px-2 py-2'><span>345CAL</span></h4>
                            </div>
                        </div>    
                    </div>    
                    <div className='col'>
                        <button className='btn btn-outline-danger h-100'>Bin</button>    
                    </div>    
                </div>    
            </div> 
        </section>
    );
    
}

export default List;