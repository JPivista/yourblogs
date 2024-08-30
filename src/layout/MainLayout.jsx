import { Outlet } from "react-router-dom"
// import NavBar from "../components/headers/navbar"


const MainLayout = () => {
    return (
        <main>
            {/* <NavBar /> */}

            <nav>header</nav>
            <Outlet />
            <footer>Footer</footer>
        </main>




    )
}

export default MainLayout
