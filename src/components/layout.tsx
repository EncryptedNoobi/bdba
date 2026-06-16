import { Footer } from "./globals/footer";
import { Navbar } from "./globals/navbar";

export const Layout = ({ children }: any) => {
    
    return (
        <>

            <Navbar />

            {children}

            <Footer />
            
        </>
    );

}