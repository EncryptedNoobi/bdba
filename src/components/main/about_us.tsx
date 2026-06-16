import { Link } from "@heroui/react"

export const AboutUs = () => {

    return (
        <>

            <div className="bg-(--primary-colour) p-[100px_10%_50px_10%] flex flex-col gap-[10px]">

                <h1 className="text-[30px] font-medium">
                    About Us
                </h1>

                <div className="flex flex-col gap-[10px] overflow-hidden">

                    <p>
                        The Biggleswade & District Bus Association is run by Parent Volunteers for parents whose children attend
                        <Link className="underlined-link" href="http://www.bedfordschool.org.uk/">Bedford School</Link>,
                        <Link className="underlined-link" href="http://www.bedfordgirlsschool.co.uk/">Bedford Girls School</Link>,
                        <Link className="underlined-link" href="http://www.bedmod.co.uk/">Bedford Modern School</Link>, and
                        <Link className="underlined-link" href="https://bedfordgreenacre.co.uk/">Bedford Greenacre School</Link> (formerly
                        <Link className="underlined-link" href="http://www.rushmoorschool.co.uk/">Rushmoor School</Link> and
                        <Link className="underlined-link" href="http://www.standrewsschoolbedford.com/">St Andrew's School</Link>.)
                    </p>

                    <p>
                        The Association operates two dedicated bus routes:
                    </p>

                    <ul>
                        <li>
                            855 - Potton via Biggleswade & Northill to Bedford
                        </li>

                        <li>
                            PS1 - St Neots via Sandy & Willington to Bedford
                        </li>
                    </ul>

                    <p>
                        Please contact one of our <Link className="underlined-link" href="https://www.bdba.org.uk/committee">committee members</Link> for more information about the Biggleswade & District Bus Association.
                    </p>

                    <p>
                        Our provider for the 855 and PS1 services is <Link className="underlined-link" href="https://www.expresslines.co.uk/">Expresslines</Link>.
                    </p>

                    <p>
                        Expresslines Ltd is a family-run coach and minibus hire company. Established in 1971, they offer coach and minibus hire services for all occasions with 16, 33, 39, 24, and 29-seater air-conditioned coaches. Coaches are driven by DBS checked and uniformed drivers.
                    </p>

                </div>

            </div>

        </>
    )

}