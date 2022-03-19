import React from "react"
import { NavLinks } from "@components/atoms/navLinks"
import { Card } from "../card"

export const NavList = ({ list }) => {
    return (
        <ul className="list-inline d-inline-block">
            {list.map((word) => {
                return <NavLinks key={word.id} route="/" text={word.title} />
            })}
        </ul>
    )
}

export const CardList = ({ list }) => {
    return (
        <>
            {list.map((article) => {
                return (
                    <div className="col-lg-4 " key={article.id}>
                        <Card title={article.title} description={article.description} image={article.image} />
                    </div>
                )
            })}
        </>
    )
}
