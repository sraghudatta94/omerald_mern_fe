import React from "react"

export const HeaderText = ({ text }) => {
    return (
        <h5 className="suggested font-heading mb-20 text-muted">
            <strong>{text}:</strong>
        </h5>
    )
}

export const PlainText = ({ text }) => {
    return <p className="text-muted font-small">{text}</p>
}

export const HomeBannerText = () => {
    return (
        <div>
            <p className="text-3xl font-bold m-0">Hello,</p>
            <p className="text-3xl font-bold m-0">
                Welcome to <span className="text-blue-600">Omerald</span>
            </p>
            <p className="my-3 text-gray-400">
                Don't miss out on the best articles from exports on <br /> health,fitness, & diseases etc...
            </p>
        </div>
    )
}
