import { Button, Link } from "@heroui/react";

import { MdOutlineOpenInNew } from "react-icons/md";

export const ContactUs = () => {

    return (
        <>

            {/* Hero */}
            <div className="w-full relative p-[200px_10%_75px_10%] flex flex-col gap-[15px] overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-full bg-[url(/expresslines.jpg)] bg-center bg-cover blur-md"></div>

                <div className="z-[2] relative">
                    <p className="text-[15px] leading-0">Biggleswade & District Bus Association</p>
                    <h1 className="text-[40px] font-semibold">Contact Us</h1>
                    <p className="text-[14px]">How to get in touch with us.</p>
                </div>

                <div className="flex flex-row items-center gap-[10px] phone:flex-wrap">
                    <a href="/committee">
                        <Button variant="secondary">
                            Our Committee
                        </Button>
                    </a>
                </div>

            </div>

            {/* Contact Us */}
            <div className="bg-(--primary-colour) p-[100px_10%_50px_10%] flex flex-col gap-[10px]">

                <div className="flex flex-col gap-[20px]">

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">How do I Contact BDBA?</h1>

                        <p>Please contact one of our <Link className="underlined-link gap-[5px]" href="/committee">committee members <MdOutlineOpenInNew /></Link> for more information about the Biggleswade & District Bus Association.</p>

                        <br />

                        <p>Lost Property - please contact <Link className="underlined-link gap-[5px]" href="mailto:info@expresslines.co.uk">info@expresslines.co.uk <MdOutlineOpenInNew /></Link>.</p>

                        <br />

                        <p>Passenger conduct - please contact the relevant <Link className="underlined-link gap-[5px]" href="/committee">Bus Rep <MdOutlineOpenInNew /></Link>.</p>

                        <p>If you have queries about the PS1 please contact <Link className="underlined-link gap-[5px]" href="mailto:rep875@bdba.org.uk">rep875@bdba.org.uk <MdOutlineOpenInNew /></Link></p>

                        <p>If you have queries about the 855 please contact <Link className="underlined-link gap-[5px]" href="mailto:rep855@bdba.org.uk">rep855@bdba.org.uk <MdOutlineOpenInNew /></Link></p>

                    </div>

                </div>

            </div>

        </>
    );

}