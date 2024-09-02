import { Outlet } from "react-router-dom"
import Header from "../components/header/NavBar"


const MainLayout = () => {
    return (
        <main>
            <Header />
            {/* <nav>header</nav> */}
            <Outlet />
            <footer>Footer</footer>
        </main>




    )
}

export default MainLayout
