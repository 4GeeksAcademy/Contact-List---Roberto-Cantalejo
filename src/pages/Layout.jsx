import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { UserContextProvider } from "../components/UserContext";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <UserContextProvider>
            <ScrollToTop>
                <Outlet />
            </ScrollToTop>
        </UserContextProvider>
    );
};