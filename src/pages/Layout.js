import { Outlet, Link } from "react-router-dom";
//The "layout route" is a shared component 
//that inserts common content on all pages, 
//such as a navigation menu.
function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
    //Outlet renders the current route selected
    //Link is used to set the URL and keep track of browsing history
    //Anytime we link to an internal path, 
    //we will use <Link> instead of <a href="">
}
export default Layout;