import { TimetablePS1 } from "../../components/main/routes/ps1_timetable";

export const RoutePS1 = () => {

    return (
        <>

            {/* Hero */}
            <div className="w-full relative p-[200px_10%_75px_10%] flex flex-col gap-[15px] overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-full bg-[url(/expresslines.jpg)] bg-center bg-cover blur-md"></div>

                <div className="z-[2] relative">
                    <p className="text-[15px] leading-0">Biggleswade & District Bus Association</p>
                    <h1 className="text-[40px] font-semibold">PS1 Timetable</h1>
                    <p className="text-[14px]">Timetable from September 2025.</p>
                </div>

            </div>

            {/* Timetable */}
            <TimetablePS1 />

        </>
    );

}