import React from "react";
import {
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="align-content-left list-inline">

                    
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