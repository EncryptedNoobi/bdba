import { Button, Drawer, Dropdown } from "@heroui/react"
import { useState } from "react"
import { TbChevronUp, TbMenu } from "react-icons/tb"

export const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

    return (
        <>

            <div className="z-5 relative w-full h-[90xp] bg-(--primary-colour) border-b border-b-[3px] border-(--secondary-accent-colour)">
                <div className="z-5 relative bg-(--primary-colour) flex flex-row items-center justify-between p-[10px_10%] h-[70px]">

                    <div className="h-[70px] flex flex-row items-center justify-center select-none">
                        <a href="/" className="text-(--text-colour) text-[20px] font-semibold">
                            <h1>BDBA</h1>
                        </a>
                    </div>

                    {/* Desktop Navbar */}
                    <div className="phone:hidden h-[70px] flex flex-row items-center justify-center gap-[10px] select-none">
                        <a href="/">
                            <Button variant="secondary">
                                Home
                            </Button>
                        </a>

                        <a href="/routes">
                            <Button variant="secondary">
                                Routes
                            </Button>
                        </a>

                        <Dropdown isOpen={dropdownOpen} onOpenChange={setDropdownOpen}>
                            <Button variant="secondary">
                                About Us
                                <TbChevronUp className={`transition-[rotate] duration-150 ${dropdownOpen ? "rotate-[180deg]" : ""}`} />
                            </Button>
                            <Dropdown.Popover>
                                <Dropdown.Menu>

                                    <Dropdown.Item href="/faqs">
                                        FAQs
                                    </Dropdown.Item>

                                    <Dropdown.Item href="/committee">
                                        Committee
                                    </Dropdown.Item>

                                    <Dropdown.Item href="/association-rules">
                                        Association Rules
                                    </Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>

                        <a href="/membership">
                            <Button variant="secondary">
                                Membership
                            </Button>
                        </a>

                        <a href="/contact-us">
                            <Button variant="secondary">
                                Contact Us
                            </Button>
                        </a>

                        {/*<a href="/other-info">
                            <Button variant="secondary">
                                Other Info
                            </Button>
                        </a>*/}
                    </div>

                    {/* Mobile Navbar Button */}
                    <div className="hidden phone:flex h-[70px] flex flex-row items-center justify-center gap-[10px] select-none">

                        <Button
                            onClick={() => setMobileNavbarOpen(!mobileNavbarOpen)}
                            variant="secondary"
                            isIconOnly>
                            <TbMenu />
                        </Button>

                    </div>

                </div>

            </div>

            <MobileNavbarDrawer mobileNavbarOpen={mobileNavbarOpen} setMobileNavbarOpen={setMobileNavbarOpen} dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />

        </>
    )

}

export const MobileNavbarDrawer = ({ mobileNavbarOpen, setMobileNavbarOpen }: any) => {

        const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    return (
        <>

            <Drawer isOpen={mobileNavbarOpen} onOpenChange={setMobileNavbarOpen}>
                <Drawer.Backdrop>
                    <Drawer.Content placement="bottom">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />

                            <div className={`flex flex-col items-stretch gap-[10px] p-[10px] ${mobileNavbarOpen ? "" : "h-0"}`}>

                                <a href="/">
                                    <Button variant="secondary" className="w-full">
                                        Home
                                    </Button>
                                </a>

                                <a href="/routes">
                                    <Button variant="secondary" className="w-full">
                                        Routes
                                    </Button>
                                </a>

                                <Dropdown isOpen={mobileDropdownOpen} onOpenChange={setMobileDropdownOpen}>
                                    <Button variant="secondary" className="w-full">
                                        About Us
                                        <TbChevronUp className={`transition-[rotate] duration-150 ${mobileDropdownOpen ? "rotate-[180deg]" : ""}`} />
                                    </Button>
                                    <Dropdown.Popover>
                                        <Dropdown.Menu>

                                            <Dropdown.Item href="/faqs">
                                                FAQs
                                            </Dropdown.Item>

                                            <Dropdown.Item href="/committee">
                                                Committee
                                            </Dropdown.Item>

                                            <Dropdown.Item href="/association-rules">
                                                Association Rules
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>

                                <a href="/membership">
                                    <Button variant="secondary" className="w-full">
                                        Membership
                                    </Button>
                                </a>

                                <a href="/contact-us">
                                    <Button variant="secondary" className="w-full">
                                        Contact Us
                                    </Button>
                                </a>

                                {/*<a href="/other-info">
                            <Button variant="secondary" className="w-full">
                                Other Info
                            </Button>
                        </a>*/}

                            </div>

                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>

        </>
    );

}