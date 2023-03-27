import React from "react";

function Project() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <   img class="d-block w-100" src="..." alt="First slide"></img>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide"></img>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Project;