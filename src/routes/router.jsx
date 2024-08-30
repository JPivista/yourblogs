import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home'
import Instructors from '../pages/Instructors/Instructors'
import Classes from '../pages/Classes/Classes'
import AboutUs from '../pages/AboutUs/AboutUs'
import Services from '../pages/Servics/Services'
import OurWork from '../pages/OurWork/OurWork'
import ContactUs from '../pages/ContactUs/ContactUs'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <><MainLayout /> </>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/instructors",
                element: <Instructors />
            },
            {
                path: "/classes",
                element: <Classes />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/our-work",
                element: <OurWork />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            }
        ]
    }
]);