import { Button } from "@heroui/react";
import { RouteSelector } from "../components/main/route_selector";
import { News } from "../components/main/news";
import { AboutUs } from "../components/main/about_us";

export const Home = () => {

    return (
        <>

            {/* Hero */}
            <div className="w-full relative p-[200px_10%_75px_10%] flex flex-col gap-[15px] overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-full bg-[url(/expresslines.jpg)] bg-center bg-cover blur-md"></div>

                <div className="z-[2] relative">
                    <p className="text-[15px] leading-0">Biggleswade & District Bus Association</p>
                    <h1 className="text-[40px] font-semibold">Buses for students, by parents</h1>
                    <p className="text-[14px]">We're a volunteer parent commitee, committed to providing buses for our children.</p>
                </div>
                
                <div className="flex flex-row items-center gap-[10px] phone:flex-wrap">
                    <a href="/routes">
                        <Button variant="secondary">
                            View routes
                        </Button>
                    </a>

                    <a href="/contact-us">
                        <Button variant="secondary">
                            Contact Us
                        </Button>
                    </a>
                </div>

            </div>

            {/* Bus Selector */}
            <RouteSelector />

            {/* News */}
            <News />

            {/* About Us */}
            <AboutUs />

        </>
    );

}