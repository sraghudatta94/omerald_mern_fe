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
