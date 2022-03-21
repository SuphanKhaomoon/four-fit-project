import './Form.css';

const Form = () => {
    return (
        <section id="4fit-form">
            <div className="container form-container">
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <h2 className="text-center">Activity</h2>
                        <form>
                            <div className="form-group">
                                <label className="form-label">NAME</label>
                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                                    placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">DESCRIPTION</label>
                                <input type="text" className="form-control" id="description"
                                    placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">CALORIES</label>
                                <input type="text" className="form-control" id="calories" placeholder="Calories" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Example select</label>
                                <select className="form-control" id="example-select">
                                    <option className="text-danger">Run</option>
                                    <option className="text-danger">Bicycle ride</option>
                                    <option className="text-danger">Swim</option>
                                    <option className="text-danger">Walk</option>
                                    <option className="text-danger">Hike</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">DURATION</label>
                                <input type="time" className="form-control" id="duration"
                                    placeholder="minute:seconds:miliseconds" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">DATE</label>
                                <input type="date" className="form-control" id="date"
                                    placeholder="DD/MM/YYYY" />
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <a href="index.html" type="submit" className="btn add-button">+Add</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Form;