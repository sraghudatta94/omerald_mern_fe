import React from "react"
import Link from "next/link"

export const FaceBook = () => {
    return (
        <li className="list-inline-item">
            <Link href="/#">
                <a className="social-icon fb text-xs-center" target="_blank" href="#">
                    <i className="elegant-icon social_facebook"></i>
                </a>
            </Link>
        </li>
    )
}

export const Instagram = () => {
    return (
        <li className="list-inline-item">
            <Link href="/#">
                <a className="social-icon tw text-xs-center" target="_blank" href="#">
                    <i className="elegant-icon social_twitter "></i>
                </a>
            </Link>
        </li>
    )
}

export const Pinterest = () => {
    return (
        <li className="list-inline-item">
            <Link href="/#">
                <a className="social-icon pt text-xs-center" target="_blank" href="#">
                    <i className="elegant-icon social_pinterest "></i>
                </a>
            </Link>
        </li>
    )
}

export const ToggleBar = ({ addClass }) => {
    return (
        <div className="off-canvas-toggle-cover d-inline-block">
            <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle" onClick={addClass}>
                <span></span>
            </div>
        </div>
    )
}
