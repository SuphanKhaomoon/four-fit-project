import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';


const FormReactHook = () => {
    //handle events
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //handle submit
    const onSubmit = data => alert(JSON.stringify(data));
    
    return (
        <React.Fragment>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='bg-white w-auto h-96 mx-5 mt-20 rounded-lg'>
                        {/* {header section} */}
                        <div className='h-28 flex justify-center items-center shadow'>
                            <p className='text-4xl font-bold uppercase text-center'>Validate Select Input</p>
                        </div>

                        {/* { body section } */}
                        <div>
                            <div className='grid justify-center'>
                                <div className='mt-12'>
                                    <select 
                                        className={`w-96 rounded-lg text-3xl ${errors.gender &&
                                        "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                        {...register("gender", { required: 'Gender is required' })}
                                    >
                                        <option value=''>--Select Gender--</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                        <option value='other'>Other</option>
                                    </select>
                                </div>
                                <div>
                                    {errors.gender && <span className='text-sm text-danger'>{errors.gender.message}</span>}
                                </div>
                            </div>
                        </div>
                        {/* { btn section} */}
                        <div className='d-flex items-center justify-content-center mt-12'>
                            <input 
                                type='submit'
                                value='Submit'
                                className='w-2/5 h-10 rounded-lg bg-blue font-bold text-white'
                            />
                        </div>
                    </div>
                </form>
            </section>
        </React.Fragment>
    );
}


export default FormReactHook;