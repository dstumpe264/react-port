import React from "react";

function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#aboutme">About Me</a>
                    <a class="nav-item nav-link" href="#portfolio">Porfolio</a>
                    <a class="nav-item nav-link" href="#contact">Contact</a>
                    <a class="nav-item nav-link" href="https://docs.google.com/document/d/1MBTkln1Y1C8nSK6VXGMlVaPztzJ7Euso6n_sMpycifU/edit?usp=sharing">Resume</a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;