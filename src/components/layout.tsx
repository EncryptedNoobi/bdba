import { Footer } from "./globals/footer";
import { Navbar } from "./globals/navbar";

export const Layout = ({ children }: any) => {
    
    return (
        <>

            <div className="flex flex-col min-h-screen">

                <Navbar />

                <div className="flex-grow">

                    {children}

                </div>

                <Footer />
                
            </div>

        </>
    );

}