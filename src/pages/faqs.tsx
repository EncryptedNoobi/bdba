import { Link } from "@heroui/react";
import { MdOutlineOpenInNew } from "react-icons/md";

export const FAQs = () => {

    return (
        <>

            {/* Hero */}
            <div className="w-full relative p-[200px_10%_75px_10%] flex flex-col gap-[15px] overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-full bg-[url(/expresslines.jpg)] bg-center bg-cover blur-md"></div>

                <div className="z-[2] relative">
                    <p className="text-[15px] leading-0">Biggleswade & District Bus Association</p>
                    <h1 className="text-[40px] font-semibold">Frequently Asked Questions</h1>
                    <p className="text-[14px]">We're here to help, here's some answers to your questions.</p>
                </div>

            </div>

            {/* FAQs */}
            <div className="bg-(--primary-colour) p-[100px_10%_50px_10%] flex flex-col gap-[10px]">

                <div className="flex flex-col gap-[20px]">

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Can I get the other bus?</h1>

                        <p>Need to get the other bus home once in a while?</p>

                        <p>For just £2.00 we can arrange a 'BUS-SWAP!' A one-day pass which allows travel on the alternate route (If spaces permit - please make payment online to BDBA Sort code 40-10-33, Account number 01000810).</p>

                        <p>To organise a pass please contact our <Link className="underlined-link" href="mailto:membershipsec@bdba.org.uk">membership secretary</Link> at least 3 days in advance of travel.</p>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Can I bring a friend home?</h1>

                        <p>A guest pass is available if you wish to bring a friend home on one of the buses.</p>

                        <p>A guest pass is £6 per journey.</p>

                        <p>Tickets will be sent by email & will require printing out to hand to the driver.</p>

                        <p>Please note, holding a guest pass is NOT a guarantee there will be a space on the bus. Full bus members have priority on spaces at all times and it is the policy of the bus company to run the service with as high a capacity as possible. That said, due to after school clubs, return journeys are always more likely to have space.</p>

                        <p>If you would like a guest pass, please contact the Membership Secretary at <Link className="underlined-link" href="mailto:membershipsec@bdba.org.uk">membershipsec@bdba.org.uk</Link> and also copy in the Treasurer at <Link className="underlined-link" href="mailto:treasurer@bdba.org.uk">treasurer@bdba.org.uk</Link> in your email. Please state the number of tickets you require and the amount of money you are transferring.</p>

                        <p>
                            <b>Payment should be made to the BDBA bank account at the same time:</b><br />
                            Sort code 40-10-33, Account number 01000810
                        </p>

                        <p>To confirm availability for a specific date please email <Link className="underlined-link" href="mailto:membershipsec@bdba.org.uk">membershipsec@bdba.org.uk</Link>. If you do not confirm availability there is a risk that there will not be a space.</p>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">What are the benefits to using the bus?</h1>

                        <ol className="list-decimal ps-5 space-y-2">
                            <li>The Association provides a dedicated bus with a termly designated driver for the exclusive use of the Association Members' school pupils</li>
                            <li>The Association is able to consider additional boarding points on the routes, provided that these boarding points are both practical and safe</li>
                            <li>The timetable is based on school start of day and end of day times</li>
                            <li>Highly utilised school buses reduce congestion and pollution in the town centre, reduce congestion at the school entrances, and improve safety</li>
                            <li>Seating at all times: the Association carefully regulates the number of passes so the seating capacity of the bus is not exceeded</li>
                            <li>Reduced stress, time and worry in getting your children to and from school each day!</li>
                        </ol>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">How much does it cost to join?</h1>
                        
                        <p>Payment for the bus pass is a term in advance (Please make payment online to BDBA Sort code 40-10-33, Account number 01000810).</p>

                        <p>Places are offered for whole terms only, and are dependent on available space.</p>

                        <p>A £200 deposit is needed to secure a place on the bus (returnable at the end of the period of use, provided that a term’s notice is given).</p>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">What are the costs?</h1>
                        
                        <p>Costs are set annually and the running of the bus divided by the number of school weeks divided by passengers.</p>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">How can I get involved?</h1>

                        <p>The Committee is made up of volunteer parents/carers whose children travel on the services. The officers are elected at the AGM, which usually occurs in October, other membrs are welcome to join the Committee at any time; please contact the <Link className="underlined-link" href="mailto:chairman@bdba.org.uk">Chairman</Link> for more details.</p>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Applications & further enquiries</h1>

                        <p>Please contact the membership secretary: <Link className="underlined-link" href="mailto:membershipsec@bdba.org.uk">membershipsec@bdba.org.uk</Link></p>

                        <Link className="underlined-link gap-[5px]" href="/files/BDBA_Code_of_Conduct.pdf">BDBA Code of Conduct <MdOutlineOpenInNew /></Link>
                        <Link className="underlined-link gap-[5px]" href="https://eepurl.com/dJwdfc">BDBA Application <MdOutlineOpenInNew /></Link>

                    </div>

                </div>

            </div>

        </>
    );

}