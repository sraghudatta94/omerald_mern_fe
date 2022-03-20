import React from "react"
import { Links } from "@components/atoms/links"

export const NavLinks = ({ Menu }) => {
    return (
        <>
            {Menu.map((menu) => {
                return (
                    <li key={menu.id} className=" my-[15px]">
                        <Links route={menu.route} value={menu.displayText} />
                    </li>
                )
            })}
        </>
    )
}
