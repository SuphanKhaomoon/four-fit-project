import { useForm } from 'react-hook-form';
import './Form.css';

const Form1 = () => {
    const { register, 
            handleSubmit, 
            getValues, 
            formState: {errors} 
        } = useForm({
            defaultValues: {
                name: '',
                description: '',
                type: '',
                duration: 0,
                hours: '',
                minutes: '',
                seconds: '',
                date: '',
            }
    });

    console.log(errors);
    
    const onSubmit = () => {
        const date = new Date();
        const values = getValues()
        const calculate = (Number(values.hours) * 3600000) + Number(values.minutes * 60000) + Number(values.seconds * 1000);
        const data = {
            name: values.name,
            description: values.description,
            type: values.type,
            duration: calculate,
            date: values.date,
            timeStamp: date
        }
        
        console.log(data);
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
                                    {...register("name", { 
                                        required: 'name is required.', 
                                        minLength: {
                                            value: 5,
                                            message: "input at least 5 charactors."
                                        } 
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
                                    {...register("description", { 
                                        required: 'description is required.', 
                                        minLength: {
                                            value: 11,
                                            message: "input at least 11 charactors."
                                        } 
                                    })}
                                />
                                <label className='text-danger form-label m-0'>{errors.description?.message}</label>
                            </div>
                            <div className="form-group">
                                <label className="form-label">ACTIVITY TYPE <span className='text-danger'>&nbsp;*</span></label>
                                <select className="form-control" id="example-select" {...register("type", {required: 'type is required'})}>
                                    <option className="text-danger" value="">--Please select activity--</option>
                                    <option className="text-danger" value="run">Run</option>
                                    <option className="text-danger" value="bicycle ride">Bicycle Ride</option>
                                    <option className="text-danger" value="swim">Swim</option>
                                    <option className="text-danger" value="walk">Walk</option>
                                    <option className="text-danger" value="hike">Hike</option>
                                </select>
                                <label className='text-danger form-label m-0'>{errors.type?.message}</label>
                            </div>
                            {/* <div className="form-group">
                                <label className="form-label">DURATION <span className='text-danger'>&nbsp;*</span></label>
                                <input 
                                    type="time" 
                                    className="form-control" 
                                    id="duration"
                                    placeholder="minute:seconds:miliseconds"
                                    {...register("duration", { required: 'duration is required' })}
                                />
                                <label className='text-danger form-label m-0'>{errors.duration?.message}</label>
                            </div> */}
                            <div className='form-group'>
                                <label className="form-label">DURATION <span className='text-danger'>&nbsp;*</span></label>
                                <span className='text-primary'>Hours &nbsp;
                                    <input className="text-center width" 
                                        type="number" 
                                        id="hours" 
                                        name="hours" 
                                        min="0" 
                                        max="23"
                                        {...register("hours", { required: 'duration is required' })}
                                    />
                                </span>
                                <span className='text-primary'>&nbsp; Minutes &nbsp;
                                    <input className="text-center width" 
                                        type="number" 
                                        id="minutes" 
                                        name="minutes" 
                                        min="0" 
                                        max="59"
                                        {...register("minutes", { required: 'duration is required' })}
                                    />
                                </span>
                                <span className='text-primary'>&nbsp; Seconds &nbsp;
                                    <input className="text-center width" 
                                        type="number" 
                                        id="seconds" 
                                        name="seconds" 
                                        min="0" 
                                        max="59"
                                        {...register("seconds", { required: 'duration is required' })}
                                    />
                                </span>
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
                                    {...register("date", { required: 'date is required' })}
                                />
                                <label className='text-danger form-label m-0'>{errors.date?.message}</label>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button href="#"
                                   type="submit" 
                                   className="btn add-button text-white"
                                >
                                    +Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Form1;