import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <!-- Logo --> */}
            <img
                className="navbar-logo"
                src='./4FIT_logo.png'
                alt="FourFit logo"
            />
            {/* <!-- Menu --> */}
            <div className="navbar-menu">
                <a href="#">Home</a>
                <a href="#">News</a>
                <a href="#">Products</a>
                <a href="#">Community</a>
                <a href="#">Contact</a>
            </div>
            {/* <!-- Profile --> */}
            <img
                className="navbar-profile"
                src="./images/default_profile.jpg"
                alt="Profile picture"
            />
    </nav>
    );
}

export default Navbar;