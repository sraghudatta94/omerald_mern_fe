import React from "react"
import { logo } from "@public/static/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/">
            <a>
                <img className="logo" src={logo} alt="logo" />
            </a>
        </Link>
    )
}
