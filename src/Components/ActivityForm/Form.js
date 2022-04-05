import { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('run');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }


    const onChangeDuration = (e) => {
        setDuration(e.target.value);
    }

    const onChangeDate = (e) => {
        setDate(e.target.value);
    }

    const onChangeActivityType = (e) => {
        setType(e.target.value)  
    }


    return (
        <section id="4fit-form">
            <div className="container form-container">
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <h2 className="text-center">Activity</h2>
                        <form>
                            <div className="form-group">
                                <label className="form-label">NAME</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Name"
                                    minlength="4"
                                    value={name}
                                    onChange={onChangeName} 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">DESCRIPTION</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="description"
                                    placeholder="Description"
                                    minLength={10}
                                    value={description}
                                    onChange={onChangeDescription} 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">ACTIVITY TYPE</label>
                                <select className="form-control" id="example-select" value={type} onChange={onChangeActivityType}>
                                    <option className="text-danger" value="run">Run</option>
                                    <option className="text-danger" value="bicycle ride">Bicycle ride</option>
                                    <option className="text-danger" value="swim">Swim</option>
                                    <option className="text-danger" value="walk">Walk</option>
                                    <option className="text-danger" value="hike">Hike</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">DURATION</label>
                                <input 
                                    type="time" 
                                    className="form-control" 
                                    id="duration"
                                    step="2"
                                    placeholder="minute:seconds:miliseconds"
                                    value={duration}
                                    onChange={onChangeDuration} 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">DATE</label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="date"
                                    placeholder="DD/MM/YYYY"
                                    value={date}
                                    onChange={onChangeDate} 
                                />
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <a href="#" 
                                   type="submit" 
                                   className="btn add-button"
                                >
                                    +Add
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}

Form.prototype = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Form;