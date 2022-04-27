// import { useState } from 'react';
// import { isPropertySignature } from 'typescript';
import { useForm } from 'react-hook-form';
import './EditForm.css';

const EditForm = ({ item, onEditData, onCreateActivity }) => {
    
    // const [name, setName] = useState(item.name);
    // const [description, setDescription] = useState(item.description);
    // const [type, setType] = useState(item.type);
    // const [hours, setHours] = useState(item.hours);
    // const [minutes, setMinutes] = useState(item.minutes);
    // const [seconds, setSeconds] = useState(item.seconds);
    // const [duration, setDuration] = useState(item.duration);
    // const [date, setDate] = useState(item.date);

    // const handleSubmit = (e) => {

    //     e.preventDefault();

    //     setDuration(() => {
    //         return (Number(hours) * 3600000) + Number(minutes * 60000) + Number(seconds * 1000);
    //     })

    //     const values = {
    //         id: item.id,
    //         name,
    //         description,
    //         hours,
    //         minutes,
    //         seconds,
    //         duration,
    //         date,
    //         type
    //     }

    // }
   

    const { register, 
        handleSubmit, 
        getValues, 
        reset,
        formState: {errors}
        } = useForm({
            defaultValues: {
                name: item.name,
                description: item.description,
                type: item.type,
                duration: item.duration,
                hours: item.hours,
                minutes: item.minutes,
                seconds: item.seconds,
                date: item.date,
            }
    });

    const { onChange } = register('name', 'description', 'hours', 'minutes', 'seconds', 'duration', 'date', 'type');

    const onSubmit = () => {
        // const date = new Date();
        const values = getValues();
        const calculate = (Number(values.hours) * 3600000) + Number(values.minutes * 60000) + Number(values.seconds * 1000);

        const datas = {
            id: item.id,
            name: values.name,
            description: values.description,
            hours: values.hours,
            minutes: values.minutes,
            seconds: values.seconds,
            duration: calculate,
            date: values.date,
            type: values.type
    }
    
    onEditData(datas);
    
    reset();

    onCreateActivity();
    
}

    return (
        <section id="4fit-form">
            <div className="container form-container d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Activity</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label className="form-label">NAME <span className='text-danger'>&nbsp;*</span></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Name"
                                    onChange={onChange}
                                    {...register("name", { 
                                        required: 'name is required.', 
                                        minLength: {
                                            value: 5,
                                            message: "input at least 5 charactors."
                                        },
                                    })}
                                />
                                <label className='text-danger form-label m-0'>{errors.name?.message}</label>
                            </div>
                            <div className="form-group">
                                <label className="form-label">DESCRIPTION <span className='text-danger'>&nbsp;*</span></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="description"
                                    placeholder="Description"
                                    onChange={onChange}
                                    {...register("description", { 
                                        required: 'description is required.', 
                                        minLength: {
                                            value: 11,
                                            message: "input at least 11 charactors."
                                        },
                                    })}
                                />
                                <label className='text-danger form-label m-0'>{errors.description?.message}</label>
                            </div>
                            <div className="form-group">
                                <label className="form-label">ACTIVITY TYPE <span className='text-danger'>&nbsp;*</span></label>
                                <select className="form-control" id="example-select" onChange={onChange} {...register("type", {required: 'type is required'})} >
                                    <option className="text-secondary" value="">--Please select activity--</option>
                                    <option className="text-secondary" value="run">Run</option>
                                    <option className="text-secondary" value="bicycle ride">Bicycle Ride</option>
                                    <option className="text-secondary" value="swim">Swim</option>
                                    <option className="text-secondary" value="walk">Walk</option>
                                    <option className="text-secondary" value="hike">Hike</option>
                                </select>
                                <label className='text-danger form-label m-0'>{errors.type?.message}</label>
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
                                        onChange={onChange}
                                        {...register("hours", { required: 'duration is required' })}
                                />  

                                <span className='text-primary d-md-inline d-none'>&nbsp; Minutes &nbsp;</span>
                                <input className="text-center input-width d-inline ms-2 form-control" 
                                        type="number" 
                                        id="minutes" 
                                        name="minutes" 
                                        min="0" 
                                        max="59"
                                        onChange={onChange}
                                        {...register("minutes", { required: 'duration is required' })}
                                />

                                <span className='text-primary d-md-inline d-none'>&nbsp; Seconds &nbsp;</span>
                                <input className="text-center input-width d-inline ms-2 form-control" 
                                        type="number" 
                                        id="seconds" 
                                        name="seconds" 
                                        min="0" 
                                        max="59"
                                        onChange={onChange}
                                        {...register("seconds", { required: 'duration is required' })}
                                />
                                {/* span for small width visible */}
                                <span className='text-primary d-md-none d-inline me-3 pl'>Hours</span>
                                <span className='text-primary d-md-none d-inline me-1'>Minutes</span>
                                <span className='text-primary d-md-none d-inline ps-2'>Seconds</span>

                                <label className='text-danger form-label m-0'>
                                    {errors.hours?.message || errors.minutes?.message || errors.seconds?.message}
                                </label> 
                            </div>
                            <div className="form-group">
                                <label className="form-label">DATE <span className='text-danger'>&nbsp;*</span></label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="date"
                                    placeholder="DD/MM/YYYY"
                                    onChange={onChange}
                                    {...register("date", { required: 'date is required' })}
                                />
                                <label className='text-danger form-label m-0'>{errors.date?.message}</label>
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