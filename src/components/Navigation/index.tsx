import "./style.scss"
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";


export const Navigation = () => {
    return(
        <>
        <header>
               <nav className="navbar">
               <h3 className="logo">uwu</h3>
               <ul className="nav_links">
               <li>Home</li>
               <li>Users</li>
               <li>Dashboard</li>
               <li>Logout</li>
              </ul>

        </nav>
        </header>
        </>
    )
}