import React from "react"
import { Links } from "@components/atoms/links"
import { articlesList } from "@public/static/data"
import { PostCard } from "../card"

export const SidebarMenu = () => {
    return (
        <ul>
            {articlesList.map((article) => {
                return (
                    <li className="cat-item cat-item-2" key={article.id}>
                        <Links route="/" value={article.title} />
                        <span className="post-count mx-2">3</span>
                    </li>
                )
            })}
        </ul>
    )
}

export const SidebarPost = () => {
    return (
        <ul className="list-post">
            {articlesList.map((article) => {
                return (
                    <li className="my-10" key={article.id}>
                        <PostCard article={article} />
                    </li>
                )
            })}
        </ul>
    )
}
