import './Navbar.css';

const Navbar = (props) => {

    const addActivity = () => {
        props.onCreateActivity(props);
    }


    return (
        <nav className="navbar mb-5">
            {/* <!-- Logo --> */}
            <img
                className="navbar-logo"
                src='./4FIT_logo.png'
                alt="FourFit logo"
            />
            {/* <!-- Menu --> */}
            <div className="navbar-menu">
                <a onClick={addActivity}>Create Activity</a>
                {/* <a href="#">News</a>
                <a href="#">Products</a>
                <a href="#">Community</a>
                <a href="#">Contact</a> */}
            </div>
            {/* <!-- Profile --> */}
            <img
                className="navbar-profile"
                src="./logo192.png"
                alt="Profile"
            />
    </nav>
    );
}

export default Navbar;