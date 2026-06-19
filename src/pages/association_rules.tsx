import { Button } from "@heroui/react";

export const AssociationRules = () => {

    return (
        <>

            {/* Hero */}
            <div className="w-full relative p-[200px_10%_75px_10%] flex flex-col gap-[15px] overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-full bg-[url(/expresslines.jpg)] bg-center bg-cover blur-md"></div>

                <div className="z-[2] relative">
                    <p className="text-[15px] leading-0">Biggleswade & District Bus Association</p>
                    <h1 className="text-[40px] font-semibold">Association Rules</h1>
                    <p className="text-[14px]">Please find below the rules for the BDBA association.</p>
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

            {/* Rules */}
            <div className="bg-(--primary-colour) p-[100px_10%_50px_10%] flex flex-col gap-[10px]">

                <div className="flex flex-col gap-[20px]">

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[30px] font-semibold">Rules</h1>

                        <ol className="list-decimal ps-5 space-y-2">
                            <li>An association shall be promoted called the Biggleswade and District Bus Association.</li>
                            <li>The object of the Association is defined in clause 2 of the Constitution.</li>
                            <li>It is intended that the administrative arrangements be kept to a minimum to avoid a heavy workload on the Honorary Officers and that the Association will be managed by a Committee as set out in the Constitution.</li>
                            <li>A parent/carer will be required to become a member of the Association and only full members of the Association will be allowed to vote at any meeting of the Association.</li>
                            <li>On allocation of a seat, £200 deposit will be required. This deposit will be returnable by deduction from the final term's fare when notice of withdrawal from the bus is given. Lack of sufficient notice will result in forfeiture of this deposit unless the Committee agree there are acceptable mitigating circumstances.</li>
                            <li>The cost of the service will be agreed between the Coach Operator and the Committee. In the event of insufficient support for the service to continue, parents/carers will be notified. The Secretary or Treasurer will notify parents/carers of the cost for each term.</li>
                            <li>In the event of any surplus fares money during a term this will be used to reduce the costs for the following term. If necessary, any deficit will be recovered immediately by an additional charge to parents/carers.</li>
                            <li>All receipts and payments will be made through an Association account at one of the major clearing banks. All payments from the account will require the signatures of two of the three Honorary officers. The money collected from the deposits will be credited to a separate account with a building society and the interest earned will be paid into the Association's current account to help defray the coast of the bus hire. A maximum of 30% of this money may be used at any one time to enable the Treasurer to cover any temporary shortfall in funds. Such withdrawals are to be made good at the beginning of the following term by loading that term's fares to restore the deposit account to its full value (i.e. £10 x no of current passengers who paid £10 deposit plus £50 x no of passengers who paid £50 deposits. Forfeited deposits will be transferred to the Association's current account.</li>
                            <li>All bank statements and records maintained by the Officers will be available for inspection by any member at any reasonable time.</li>
                            <li>It is not intended to differentiate between junior and senior children. No refund will be given for the occasional absence. The Committee will have the discretion to deal with prolonged absences of an unforeseen nature, if funds permit.</li>
                            <li>The route and timetable will be advised at the start of the school year.</li>
                            <li>The service will operate on a five day week basis and the timetable will be strictly adhered to.</li>
                            <li>Seats will be allocated on the previous term's usage unless the Membership Secretary or Treasurer have been informed otherwise. Parents/Carers are expected to give at least one term's notice of their intention to withdraw their child from the service.</li>
                            <li>The Committee will notify members of forthcoming meeting dates to enable any discussion points to be added to the agenda. Suggestions for the agenda must be received in writing (email acceptable) at least 7 days before the meeting takes place.</li>
                        </ol>

                    </div>

                </div>

            </div>

        </>
    );

}