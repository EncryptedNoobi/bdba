import { Button, Dropdown } from "@heroui/react"
import { useState } from "react"
import { TbChevronUp } from "react-icons/tb"

export const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
        
            <div className="z-5 relative w-full h-[90xp] bg-(--primary-colour) border-b border-b-[3px] border-(--secondary-accent-colour)">
                <div className="flex flex-row items-center justify-between p-[10px_10%] h-[70px]">

                    <div className="h-[70px] flex flex-row items-center justify-center select-none">
                        <a href="/" className="text-(--text-colour) text-[20px] font-semibold">
                            <h1>BDBA</h1>
                        </a>
                    </div>

                    <div className="h-[70px] flex flex-row items-center justify-center gap-[10px] select-none">
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

                                    <Dropdown.Item>
                                        <a href="/faqs" className="w-full h-full">
                                            FAQs
                                        </a>
                                    </Dropdown.Item>

                                    <Dropdown.Item>
                                        <a href="/committee" className="w-full h-full">
                                            Committee
                                        </a>
                                    </Dropdown.Item>
                                    
                                    <Dropdown.Item>
                                        <a href="/associatrion-rules" className="w-full h-full">
                                            Association Rules
                                        </a>
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

                        <a href="/other-info">
                            <Button variant="secondary">
                                Other-info
                            </Button>
                        </a>
                    </div>

                </div>
            </div>
        
        </>
    )

}