import React from "react";
import {
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="list-inline">

                    <h1>Footer!</h1>
                    <button onClick={() => {
                        window.open("https://github.com/dstumpe264");
                    }}>
                        <AiFillGithub/>
                    </button>
                    <button onClick={() => {
                        window.open("https://www.linkedin.com/in/davidstumpe/");
                    }}>
                        <AiFillLinkedin/>
                    </button>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;