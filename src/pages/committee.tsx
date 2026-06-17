import { Link, Table } from "@heroui/react";

export const Committee = () => {

    return (
        <>

            {/* Hero */}
            <div className="w-full relative p-[200px_10%_75px_10%] flex flex-col gap-[15px] overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-full bg-[url(/expresslines.jpg)] bg-center bg-cover blur-md"></div>

                <div className="z-[2] relative">
                    <p className="text-[15px] leading-0">Biggleswade & District Bus Association</p>
                    <h1 className="text-[40px] font-semibold">Our Committee</h1>
                    <p className="text-[14px]">Who we are, and how to contact us.</p>
                </div>

            </div>

            {/* Committee Table */}
            <div className="bg-(--primary-colour) p-[50px_10%_50px_10%] flex flex-col gap-[50px]">

                <div className="overflow-x-hidden">

                    <Table>
                        <Table.Content>
                            <Table.Header>
                                <Table.Column isRowHeader>Position</Table.Column>
                                <Table.Column>Name</Table.Column>
                                <Table.Column>Contact Email</Table.Column>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Chairman</Table.Cell>
                                    <Table.Cell>Chris Peaker</Table.Cell>
                                    <Table.Cell><Link className="underlined-link" href="mailto:chairman@bdba.org.uk">chairman@bdba.org.uk</Link></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Vice Chairman</Table.Cell>
                                    <Table.Cell>Vacant Role</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Treasurer</Table.Cell>
                                    <Table.Cell>Kim Seacombe</Table.Cell>
                                    <Table.Cell><Link className="underlined-link" href="mailto:treasurer@bdba.org.uk">treasurer@bdba.org.uk</Link></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Membership Secretary</Table.Cell>
                                    <Table.Cell>Surabhi Mishra</Table.Cell>
                                    <Table.Cell><Link className="underlined-link" href="mailto:membershipsec@bdba.org.uk">membershipsec@bdba.org.uk</Link></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Minutes Secretary</Table.Cell>
                                    <Table.Cell>Amanda Done</Table.Cell>
                                    <Table.Cell><Link className="underlined-link" href="mailto:minutesec@bdba.org.uk">minutesec@bdba.org.uk</Link></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Bus Rep 855</Table.Cell>
                                    <Table.Cell>Gaynor Evans-Taylor</Table.Cell>
                                    <Table.Cell><Link className="underlined-link" href="mailto:rep855@bdba.org.uk">rep855@bdba.org.uk</Link></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Bus Rep PS1</Table.Cell>
                                    <Table.Cell>Kirstin Blagden</Table.Cell>
                                    <Table.Cell><Link className="underlined-link" href="mailto:rep875@bdba.org.uk">rep875@bdba.org.uk</Link></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Communications</Table.Cell>
                                    <Table.Cell>Gaynor Evans-Taylor</Table.Cell>
                                    <Table.Cell><Link className="underlined-link" href="mailto:communications@bdba.org.uk">communications@bdba.org.uk</Link></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Communications</Table.Cell>
                                    <Table.Cell>Gaynor Evans-Taylor</Table.Cell>
                                    <Table.Cell>-</Table.Cell>
                                </Table.Row>
                                
                            </Table.Body>
                        </Table.Content>
                    </Table>

                </div>


            </div>

        </>
    );

}