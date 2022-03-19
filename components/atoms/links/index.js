import React from "react"
import Link from "next/link"

export const Links = ({ value, route }) => {
    return (
        <Link href={route}>
            <a>{value}</a>
        </Link>
    )
}
