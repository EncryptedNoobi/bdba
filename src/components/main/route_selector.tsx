import { Card, Link } from "@heroui/react";

import { TbArrowRight, TbBusFilled, TbCategory } from "react-icons/tb";

export const RouteSelector = () => {

    return (
        <>

            <div className="bg-(--primary-colour) p-[100px_10%_50px_10%] flex flex-col gap-[10px]">

                <h1 className="text-[30px] font-medium">
                    Select a bus route
                </h1>

                <div className="flex flex-row gap-[10px] items-center justify-center phone:flex-wrap overflow-x-hidden">

                    <RouteCard link={"/routes/ps1"} text={"PS1"} image={"/banners/1.jpg"} icon={"Bus"} />
                    <RouteCard link={"/routes/855"} text={"855"} image={"/banners/2.jpg"} icon={"Bus"} />
                    <RouteCard link={"/routes"} text={"View routes"} image={"/banners/3.jpg"} icon={"Routes"} />

                </div>

            </div>

        </>
    );

}

export const RouteCard = ({ link, text, image, icon }: { link: string, text: string, image: string, icon: "Bus" | "Routes"}) => {

    return (
        <Link href={link} className="w-full">

            <Card role="button" className="w-full border-[3px] border-(--secondary-accent-colour) hover:bg-(--secondary-accent-colour) hover:border-(--primary-accent-colour) transition-colors duration-150">

                <div className="relative flex items-center justify-center overflow-hidden rounded-[15px] h-[200px] w-full">

                    <img src={image} alt="Bus background image" className="absolute aspect-[1.4] object-cover w-full h-full" />
                    {icon === "Bus" ? (
                        <TbBusFilled className="z-2 relative text-[50px] m-[20px]" />
                    ) : (
                        <TbCategory className="z-2 relative text-[50px] m-[20px]" />
                    )}

                </div>

                <Link className="gap-[5px] text-[25px] min-w-[200px]">
                    <p>{text}</p>
                    <TbArrowRight />
                </Link>

            </Card>

        </Link>
    );

}