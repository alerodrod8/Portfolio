import React from 'react';

export default function Upcoming() {
    return (
        <>
            <link rel="stylesheet" href="/src/styles/upcoming.css" />
            <script src="/src/pages/api/buttonSelect.js" defer></script>
            <div className="rl-container">
                <div className="coming-soon-container" data-translate="cs">N/A</div>
                <div className="tech-details-container">
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet. Et fugit voluptas sed amet enim ut eaque vitae et quia deserunt eum reprehenderit quisquam non enim rerum. Est animi veritatis est fugit dolore ex repellat quam ut molestiae quam aut assumenda dolores! Eum delectus similique hic odio dolorem sit ratione omnis cum aliquam corporis.
                    </p>
                    <p>
                        Qui enim quibusdam in perferendis modi ut temporibus dolor et sequi velit vel ipsum incidunt sit beatae omnis. Est accusantium molestiae non quod maxime et voluptas modi 33 asperiores sequi.
                    </p>
                    <p>
                        Sit molestias debitis vel dolorem repellat qui autem quaerat ut commodi voluptatem et labore illum est laudantium possimus et corrupti nobis. Qui aspernatur dicta est blanditiis iste ut sint provident qui officiis voluptas est natus consequuntur sed vero quia. Ut voluptates suscipit ut tenetur delectus qui saepe galisum sit voluptatum internos et eaque reiciendis. Ut veniam maxime et enim earum est rerum officiis.
                    </p>
                </div>
            </div>
            <div className="rr-container">
                <div className="image-container">
                    <button className="arrow-container left-arrow">
                        <img src="./src/assets/img/arrowp.svg" alt="Flecha izquierda" className="arrow-icon" />
                    </button>
                    <div className="image-scroll-container">
                        <div className="image-content active">
                            <img src="./src/assets/img/thumbB.svg" alt="Imagen 1" />
                        </div>
                        <div className="image-content">
                            <img src="./src/assets/img/thumbW.svg" alt="Imagen 2" />
                        </div>
                        <div className="image-content">
                            <img src="./src/assets/img/thumbB.svg" alt="Imagen 3" />
                        </div>
                    </div>
                    <button className="arrow-container right-arrow">
                        <img src="./src/assets/img/arrowp.svg" alt="Flecha derecha" className="arrow-icon" />
                    </button>
                </div>
                <div className="content-container">
                    <button className="circle-button active" id="button1"></button>
                    <button className="circle-button" id="button2"></button>
                    <button className="circle-button" id="button3"></button>
                </div>
            </div>
        </>
    );
}