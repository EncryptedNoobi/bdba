import { Card, Link } from "@heroui/react";

export const News = () => {

    return (
        <>

            <div className="bg-(--primary-colour) p-[50px_10%_20px_10%] flex flex-col gap-[10px]">

                <h1 className="text-[30px] font-medium">
                    Latest News
                </h1>

                <div className="grid grid-cols-2 gap-[10px] items-stretch justify-center phone:flex-wrap overflow-x-hidden">

                    <NewsCard
                        title={"Updated Site Design"}
                        date={"18th June 2026"}
                        description={
                            <>
                                A new site design has been published to make the service easier to use.
                            </>
                        }
                    />

                    <NewsCard
                        title={"New Site Design"}
                        date={"1st June 2024"}
                        description={
                            <>
                                BDBA has a brand new site, with cleaner design, quicker speeds and better functionality.
                            </>
                        }
                    />

                    <NewsCard
                        title={"Expresslines Now Operating 855 and PS1"}
                        date={"7th May 2022"}
                        description={
                            <>
                                Expresslines is now operating both BDBA services - the 855 and PS1. Please contact <Link className="underlined-link" href="mailto:membershipsec@bdba.org.uk">membershipsec@bdba.org.uk</Link> for information.
                            </>
                        }
                    />

                </div>

            </div>

        </>
    );

}

export const NewsCard = ({ title, date, description }: any) => {

    return (
        <div className="flex-1">
            <Card className="bg-(--secondary-colour) h-full w-full border-[3px] border-(--tertiary-colour)">
                <Card.Header>
                    <h1 className="font-[700] text-[20px]">{title}</h1>
                    <p className="font-[600] text-[13px]">{date}</p>
                </Card.Header>
                <Card.Content>
                    <p>{description}</p>
                </Card.Content>
            </Card>
        </div>
    );

}

