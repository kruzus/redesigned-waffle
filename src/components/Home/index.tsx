import "./style.scss"
import {Button, Container} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";


const Filter: RegExp = /^[a-zA-Z ]*$/

export const Home = () => {
    const [name, setName] = useState("")


    const handleChange = (e: any) => {
        const val = e.target.value;
        if (Filter.test(val)) {
            setName(e.target.value)
        } else {
            console.log("error")
        }

    }



    return(
        <>
            <Container fixed>
            <h1 className="h1_styler">
            Welcome back, <span className="spanner">{name ? name : "User"}</span>.

            </h1>

                {/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
                <TextField   onChange={handleChange} color="primary" label="Enter your name" />
            </Container>


        </>
    )
}