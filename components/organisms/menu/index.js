import { ToggleBar } from "@components/atoms/socialIcons"
import { NavLinks } from "@components/molecules/navlinks"
import { SocialNav } from "@components/molecules/socialMenu"
import { navMenu } from "@public/static/nav"
import { useEffect, useLayoutEffect, useState } from "react"
import { NavMenu } from "../navbar"

const Menu = ({ addClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isToggled, setToggled] = useState(false)
    const [size, setSize] = useState(0)

    const toggleTrueFalse = () => setToggled(!isToggled)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth])
        }
        window.addEventListener("resize", updateSize)
    }, [])

    return (
        <>
            <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
                <div className="container align-self-center position-relative">
                    <div className="main-nav w-50 float-left">
                        <nav>
                            <ul className="main-menu d-none d-lg-inline font-small">
                                <NavLinks Menu={navMenu} />
                            </ul>

                            <div className={size < 991 ? "d-block d-lg-none" : "d-none"}>
                                <button onClick={toggleTrueFalse}>Menu</button>
                                <NavMenu isToggled={isToggled} />
                            </div>
                        </nav>
                    </div>
                    <div className="float-right header-tools text-muted font-small">
                        <SocialNav />
                        <ToggleBar addClass={addClass} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
