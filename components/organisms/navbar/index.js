import { useEffect } from "react"
import { navMenu } from "@public/static/nav"
import { NavLinks } from "@components/molecules/navlinks"
import MetisMenu from "metismenujs"
import PerfectScrollbar from "react-perfect-scrollbar"

export const NavMenu = ({ isToggled }) => {
    useEffect(() => {
        new MetisMenu("#metismenu")
    }, [])

    return (
        <div className={isToggled ? "mobilemenu active " : "mobilemenu hide"}>
            <PerfectScrollbar>
                <ul className="metismenu text-muted" id="metismenu">
                    <NavLinks Menu={navMenu} />
                </ul>
            </PerfectScrollbar>
        </div>
    )
}
