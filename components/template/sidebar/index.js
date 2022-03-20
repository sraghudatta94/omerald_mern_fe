import React from "react"
import Link from "next/link"
import PerfectScrollbar from "react-perfect-scrollbar"
import { SidebarHeader } from "@components/atoms/sidebar"
import { SidebarMenu, SidebarPost } from "@components/molecules/sidebar"

export const Sidebar = ({ removeClass }) => {
    return (
        <>
            <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
                <PerfectScrollbar>
                    <button className="off-canvas-close" onClick={removeClass}>
                        <i className="elegant-icon icon_close"></i>
                    </button>
                    <div className="sidebar-inner">
                        {/* <!--Categories--> */}
                        <div className="sidebar-widget widget_categories mb-50 mt-30">
                            <SidebarHeader text="Hot Topics" />
                            <div className="widget_nav_menu">
                                <SidebarMenu />
                            </div>
                        </div>
                        {/* <!--Latest--> */}
                        <div className="sidebar-widget widget-latest-posts mb-50">
                            <SidebarHeader text="Don't Miss" />
                            <div className="post-block-list post-module-1 post-module-5">
                                <SidebarPost />
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </aside>
        </>
    )
}
