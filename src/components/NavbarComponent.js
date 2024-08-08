import React from 'react';

const NavbarComponent = () => {
    const logoStyle = {
        // marginRight: '10px', // Adds margin to the right of the image
        // padding: '5px', // Adds padding inside the image
        // width: '30px',
        // height: '30px',
        width: '10px',
        objectFit: 'contain', // Ensures the image scales nicely
    };
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">
            <img src="img/logo.svg" alt="CoolBrand"/>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">Fashions</a>
                <a href="#" class="nav-item nav-link">Books</a>
            </div>
            <div class="navbar-nav ms-auto">
                {localStorage.getItem("usrToken") ? <a href="#" class="nav-item nav-link">Logout</a>:<a href="#" class="nav-item nav-link">Login</a>}
            </div>
        </div>
    </div>
</nav>
         </div>
    );
};

export default NavbarComponent;
