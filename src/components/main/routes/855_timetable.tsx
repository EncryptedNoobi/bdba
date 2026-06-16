import { Link, Table } from "@heroui/react";

export const Timetable855 = () => {

    return (
        <>

            <div className="bg-(--primary-colour) p-[50px_10%_50px_10%] flex flex-col gap-[50px]">

                <div className="overflow-x-hidden">

                    <Table>
                        <Table.Content>
                            <Table.Header>
                                <Table.Column isRowHeader>855 - Expresslines</Table.Column>
                                <Table.Column>Morning</Table.Column>
                                <Table.Column>Evening</Table.Column>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Potton, Market Square</Table.Cell>
                                    <Table.Cell>07:26</Table.Cell>
                                    <Table.Cell>17:17</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Sutton, Crossroads</Table.Cell>
                                    <Table.Cell>07:29</Table.Cell>
                                    <Table.Cell>17:14</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Biggleswade, Potton Road Hospital</Table.Cell>
                                    <Table.Cell>07:32</Table.Cell>
                                    <Table.Cell>17:11</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Biggleswade, Rose Lane / Brunswick Close</Table.Cell>
                                    <Table.Cell>07:35</Table.Cell>
                                    <Table.Cell>17:08</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Biggleswade, Sainsburys</Table.Cell>
                                    <Table.Cell>07:37</Table.Cell>
                                    <Table.Cell>17:05</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Upper Caldecote</Table.Cell>
                                    <Table.Cell>07:44</Table.Cell>
                                    <Table.Cell>16:59</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Ickwell Green</Table.Cell>
                                    <Table.Cell>07:47</Table.Cell>
                                    <Table.Cell>16:56</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Northill</Table.Cell>
                                    <Table.Cell>07:49</Table.Cell>
                                    <Table.Cell>16:54</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Cople Village</Table.Cell>
                                    <Table.Cell>07:55</Table.Cell>
                                    <Table.Cell>16:48</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Cardington Village</Table.Cell>
                                    <Table.Cell>07:58</Table.Cell>
                                    <Table.Cell>16:45</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Riverside Carpark (BGS) - Cardington Road PM</Table.Cell>
                                    <Table.Cell>08:11</Table.Cell>
                                    <Table.Cell>16:30</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>St Cuthberts Street (Bedford School) - De Parys PM</Table.Cell>
                                    <Table.Cell>08:20</Table.Cell>
                                    <Table.Cell>16:25</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Clapham Road (BMS outside playing field)</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                    <Table.Cell>16:20</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Manton Lane (outside Highways office) - BMS & BGI</Table.Cell>
                                    <Table.Cell>08:26</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Clapham Village Site BGI</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                    <Table.Cell>16:15</Table.Cell>
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
                            <li>On the homeward journey, Bedford Boys School passengers will be picked up outside St Peter’s Church in De Parys Avenue.</li>
                        </ol>

                    </div>

                    <div className="flex flex-col gap-[5px]">

                        <h1 className="text-[20px] font-bold">
                            Contact - 855 Bus Rep
                        </h1>

                        <p>
                            Email: <Link className="underlined-link" href="mailto:rep855@bdba.org.uk">rep855@bdba.org.uk</Link>
                        </p>

                    </div>

                </div>

            </div>

        </>
    );

}