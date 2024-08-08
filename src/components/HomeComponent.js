import React, { useEffect, useState } from 'react';
import CategoryService from '../services/CategoryService';
import NavbarComponent from './NavbarComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';

function HomeComponent() {
    // const [categories, setCategories] = useState([]);
    // // const [message, setMessage] = useState('');
    // useEffect(() => {
    //     CategoryService.getAllCategories().then((response) => {
    //         console.log("test");
    //         console.log(response);


    //         setCategories(response);
    //     });
    // }, []);

    return (
        <>
            <NavbarComponent/>
            <BodyComponent/>
            <FooterComponent/>
        </>
    );
}

export default HomeComponent;