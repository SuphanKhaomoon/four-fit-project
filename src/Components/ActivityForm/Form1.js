import { useForm } from 'react-hook-form';
import './Form.css';

const Form1 = () => {
    const { register, handleSubmit, watch, formState: {errors} } = useForm({
        defaultValues: {
            name: '',
            description: '',
            type: '',
            duration: '',
            hours: '',
            minutes: '',
            seconds: '',
            date: '',
        }
    });

    console.log(errors);
    // console.log(watch);

   
    return (
        <section id="4fit-form">
            <div className="container form-container">
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <h2 className="text-center">Activity</h2>
                        <form 
                            onSubmit={handleSubmit((data) => {
                            console.log(data);
                        })}>
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
                                    <input className="text-center" 
                                        type="number" 
                                        id="hours" 
                                        name="hours" 
                                        min="0" 
                                        max="24"
                                        {...register("hours")}
                                    />
                                </span>
                                <span className='text-primary'>&nbsp; Minutes &nbsp;
                                    <input className="text-center" 
                                        type="number" 
                                        id="minutes" 
                                        name="minutes" 
                                        min="0" 
                                        max="59"
                                        {...register("minutes")}
                                    />
                                </span>
                                <span className='text-primary'>&nbsp; Seconds &nbsp;
                                    <input className="text-center" 
                                        type="number" 
                                        id="seconds" 
                                        name="seconds" 
                                        min="0" 
                                        max="59"
                                        {...register("seconds")}
                                    />
                                </span>
                                {/* <input 
                                    type="number"
                                    name="duration"
                                    id='duration'
                                    disabled
                                    {...register("duration")}
                                />
                                <label className='text-danger form-label m-0'>{errors.duration?.message}</label> */}
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