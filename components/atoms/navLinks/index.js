import React from "react"
import Link from "next/link"

export const NavLinks = ({ route, text }) => {
    return (
        <li className="list-inline-item">
            <Link href={route}>
                <a>{text}</a>
            </Link>
        </li>
    )
}
