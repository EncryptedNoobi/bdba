import { RouteSelector } from "../../components/main/route_selector";

export const BusRoutes = () => {

    return (
        <>

            {/* Hero */}
            <div className="w-full relative p-[200px_10%_75px_10%] flex flex-col gap-[15px] overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-full bg-[url(/expresslines.jpg)] bg-center bg-cover blur-md"></div>

                <div className="z-[2] relative">
                    <p className="text-[15px] leading-0">Biggleswade & District Bus Association</p>
                    <h1 className="text-[40px] font-semibold">Our routes</h1>
                    <p className="text-[14px]">BDBA provides two routes, the PS1 route and the 855 route. View their timetables below.</p>
                </div>

            </div>

            {/* Bus selector */}
            <RouteSelector />

        </>
    );

}