import React from 'react'
import "../css/Footer.css"
import Stephen from "../images/stephenC.jpeg"

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerLeft">
                <h1>Created By</h1>
                <div className="namesGrid">
                    <p>
                        <img className="footerImage" src={Stephen}/>
                        <a href="https://github.com/Twprcntmlk"><i className="fab fa-github-square" /> </a>
                        <a href="https://www.linkedin.com/in/stephen-choung-275b05172/"><i className="fab fa-linkedin" /> </a>
                        Stephen Choung
                    </p>
                </div>
            </div>

            <a href="https://github.com/f-q-a/discord-clone" className='footerRight'>
                <h1>Project Repo</h1>
                <i className="fab fa-github fa-2x" />
            </a>
        </div>
    )
}
