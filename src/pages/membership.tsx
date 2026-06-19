import { Button, Link } from "@heroui/react";

import { MdOutlineOpenInNew } from "react-icons/md";

export const Membership = () => {

    return (
        <>

            {/* Hero */}
            <div className="w-full relative p-[200px_10%_75px_10%] flex flex-col gap-[15px] overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-full bg-[url(/expresslines.jpg)] bg-center bg-cover blur-md"></div>

                <div className="z-[2] relative">
                    <p className="text-[15px] leading-0">Biggleswade & District Bus Association</p>
                    <h1 className="text-[40px] font-semibold">Membership</h1>
                    <p className="text-[14px]">
                        In order to join the bus, please read the documents below, and complete the Application Form. We will be in touch to confirm availability and current prices. Assuming there is a space available, we will ask you to send a £200 deposit to reserve your place.<br /><br />
                        As part of the application you will be asked to confirm you have read the policies on this page.
                    </p>
                </div>

                <div className="flex flex-row items-center gap-[10px] phone:flex-wrap">
                    <a href="/files/Constitution_October_2015.pdf">
                        <Button variant="secondary">
                            BDBA Constitution
                        </Button>
                    </a>

                    <a href="/files/BDBA_Code_of_Conduct.pdf">
                        <Button variant="secondary">
                            BDBA Code of Conduct
                        </Button>
                    </a>
                </div>

            </div>

            {/* Membership */}
            <div className="bg-(--primary-colour) p-[100px_10%_50px_10%] flex flex-col gap-[10px]">

                <div className="flex flex-col gap-[20px]">

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">BDBA Association AGM</h1>

                        <p>Members will be invited to the Associations AGM which takes place in the Autumn term.</p>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Membership WhatsApp Group</h1>

                        <p>Parents/Carers who become members will automatically be added to a WhatsApp group for the purpose of communicating any bus updates, unless you choose to opt out by contacting the chair.</p>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Membership Costs</h1>

                        <p>BDBA is a not for profit association run by a volunteer parent committee. Costs for the service are derived via bus costs divided by the number of days service then divided by the number of students using the service.</p>

                        <p>We aim to send invoices out before the start of term.</p>

                        <p>New members joining the BDBA are required to pay a £200 deposit. This is refundable with a terms notice to withdraw from the service.</p>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Bus Notices</h1>

                        <p>Expresslines may need to change the bus used at short notice. It is key that students look for the numbers “855” or “PS1” rather than a particular bus model.</p>

                        <p>On occasions the bus routes may be impacted by bad weather or bad traffic. If this impact is substantial the committee will endeavour to communicate this to parents/carers by WhatsApp.</p>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Membership Application</h1>

                        <Link className="underlined-link gap-[5px]" href="https://eepurl.com/dJwdfc">BDBA Application <MdOutlineOpenInNew /></Link>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Membership Policies</h1>

                        <Link className="underlined-link gap-[5px]" href="/files/BDBA_Code_of_Conduct.pdf">BDBA Code of Conduct <MdOutlineOpenInNew /></Link>
                        <Link className="underlined-link gap-[5px]" href="/association-rules">BDBA Rules <MdOutlineOpenInNew /></Link>
                        <Link className="underlined-link gap-[5px]" href="/files/Constitution_October_2015.pdf">Constitution October 2015 <MdOutlineOpenInNew /></Link>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Lost your pass?</h1>

                        <p>Expresslines is supplied each term with names, photographs, and boarding points, and will be aware of who is entitled to use the BDBA services.</p>

                    </div>

                </div>

            </div>

        </>
    );

}