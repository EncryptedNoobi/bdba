import { Link, Table } from "@heroui/react";

export const TimetablePS1 = () => {

    return (
        <>

            <div className="bg-(--primary-colour) p-[50px_10%_50px_10%] flex flex-col gap-[50px]">

                <div className="overflow-x-hidden">

                    <Table>
                        <Table.Content>
                            <Table.Header>
                                <Table.Column isRowHeader>PS1 - Expresslines</Table.Column>
                                <Table.Column>Morning</Table.Column>
                                <Table.Column>Evening</Table.Column>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>St Mary's Church, Eaton Socon</Table.Cell>
                                    <Table.Cell>07:15</Table.Cell>
                                    <Table.Cell>17:30</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Eaton Ford Green</Table.Cell>
                                    <Table.Cell>07:19</Table.Cell>
                                    <Table.Cell>17:24</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>St Neots, Spar</Table.Cell>
                                    <Table.Cell>07:25</Table.Cell>
                                    <Table.Cell>17:20</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>St Neots (Ernulf School, bus area)</Table.Cell>
                                    <Table.Cell>07:30</Table.Cell>
                                    <Table.Cell>17:15</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Sandy, Bedford Road</Table.Cell>
                                    <Table.Cell>07:45</Table.Cell>
                                    <Table.Cell>16:55</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Moggerhanger</Table.Cell>
                                    <Table.Cell>07:50</Table.Cell>
                                    <Table.Cell>16:52</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Willington</Table.Cell>
                                    <Table.Cell>07:55</Table.Cell>
                                    <Table.Cell>16:50</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Riverside Carpark (BGS) - Cardington Rd PM</Table.Cell>
                                    <Table.Cell>08:12</Table.Cell>
                                    <Table.Cell>16:27</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>St Cuthberts Street (Bedford School) - De Parys PM</Table.Cell>
                                    <Table.Cell>08:17</Table.Cell>
                                    <Table.Cell>16:23</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>BMS Clapham Road</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                    <Table.Cell>16:15</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>BGI Clapham Road</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                    <Table.Cell>16:10</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Manton Lane</Table.Cell>
                                    <Table.Cell>08:25</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>BGI Manton Lane</Table.Cell>
                                    <Table.Cell>08:27</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table.Content>
                    </Table>

                </div>

                <div className="flex flex-col gap-[20px]">

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[20px] font-bold">
                            Notes
                        </h1>

                        <ol className="list-decimal list-inside ps-5">
                            <li>On the homeward journey, Bedford Girls School passengers will be picked up outside the school on the Cardington Road.</li>
                            <li>On the homeward journey, Bedford Boys School passengers will be picked up outside St Peter's Church in De Parys Avenue.</li>
                        </ol>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[20px] font-bold">
                            Contact - PS1 Bus Rep
                        </h1>

                        <p>
                            Email: <Link className="underlined-link" href="mailto:rep875@bdba.org.uk">rep875@bdba.org.uk</Link>
                        </p>

                    </div>

                </div>

            </div>

        </>
    );

}