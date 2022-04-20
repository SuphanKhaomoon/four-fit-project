import { useState } from 'react';
import { isPropertySignature } from 'typescript';
import './EditForm.css';

const EditForm = ({item, setIsvisible}) => {
    
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [type, setType] = useState(item.type);
    const [hours, setHours] = useState(item.hours);
    const [minutes, setMinutes] = useState(item.minutes);
    const [seconds, setSeconds] = useState(item.seconds);
    const [duration, setDuration] = useState(item.duration);
    const [date, setDate] = useState(item.date);

    const handleSubmit = (e) => {

        e.preventDefault();

        setDuration(() => {
            return (Number(hours) * 3600000) + Number(minutes * 60000) + Number(seconds * 1000);
        })

        const values = {
            id: item.id,
            name,
            description,
            hours,
            minutes,
            seconds,
            duration,
            date,
            type
        }

    }

    return (
        <section id="4fit-form">
            <div className="container form-container d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Activity</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">NAME <span className='text-danger'>&nbsp;*</span></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Name"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                                {/* <label className='text-danger form-label m-0'>{errors.name?.message}</label> */}
                            </div>
                            <div className="form-group">
                                <label className="form-label">DESCRIPTION <span className='text-danger'>&nbsp;*</span></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="description"
                                    placeholder="Description"
                                    onChange={e => setDescription(e.target.value)}
                                    value={description}
                                />
                                {/* <label className='text-danger form-label m-0'>{errors.description?.message}</label> */}
                            </div>
                            <div className="form-group">
                                <label className="form-label">ACTIVITY TYPE <span className='text-danger'>&nbsp;*</span></label>
                                <select className="form-control" value={type} id="example-select" onChange={e => setType(e.target.value)}>
                                    <option className="text-secondary" value="">--Please select activity--</option>
                                    <option className="text-secondary" value="run">Run</option>
                                    <option className="text-secondary" value="bicycle ride">Bicycle Ride</option>
                                    <option className="text-secondary" value="swim">Swim</option>
                                    <option className="text-secondary" value="walk">Walk</option>
                                    <option className="text-secondary" value="hike">Hike</option>
                                </select>
                                {/* <label className='text-danger form-label m-0'>{errors.type?.message}</label> */}
                            </div>
                            <div className='form-group'>
                                <label className="form-label">DURATION <span className='text-danger'>&nbsp;*</span></label>
                                <span className='text-primary d-md-inline d-none'>Hours &nbsp;</span>
                                <input className="text-center input-width d-inline form-control" 
                                        type="number" 
                                        id="hours" 
                                        name="hours" 
                                        min="0" 
                                        max="23"
                                        onChange={e => setHours(e.target.value)}
                                        value={hours}
                                />  

                                <span className='text-primary d-md-inline d-none'>&nbsp; Minutes &nbsp;</span>
                                <input className="text-center input-width d-inline ms-2 form-control" 
                                        type="number" 
                                        id="minutes" 
                                        name="minutes" 
                                        min="0" 
                                        max="59"
                                        onChange={e => setMinutes(e.target.value)}
                                        value={minutes}
                                />

                                <span className='text-primary d-md-inline d-none'>&nbsp; Seconds &nbsp;</span>
                                <input className="text-center input-width d-inline ms-2 form-control" 
                                        type="number" 
                                        id="seconds" 
                                        name="seconds" 
                                        min="0" 
                                        max="59"
                                        onChange={e => setSeconds(e.target.value)}
                                        value={seconds}
                                />
                                {/* span for small width visible */}
                                <span className='text-primary d-md-none d-inline me-3 pl'>Hours</span>
                                <span className='text-primary d-md-none d-inline me-1'>Minutes</span>
                                <span className='text-primary d-md-none d-inline ps-2'>Seconds</span>

                                <label className='text-danger form-label m-0'>
                                    {/* {errors.hours?.message || errors.minutes?.message || errors.seconds?.message} */}
                                </label> 
                            </div>
                            <div className="form-group">
                                <label className="form-label">DATE <span className='text-danger'>&nbsp;*</span></label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="date"
                                    placeholder="DD/MM/YYYY"
                                    onChange={e => setDate(e.target.value)}
                                    value={date}
                                />
                                {/* <label className='text-danger form-label m-0'>{errors.date?.message}</label> */}
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button 
                                   type="submit" 
                                   className="btn add-button text-white"
                                >
                                    Edit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditForm;