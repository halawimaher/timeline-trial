import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
    return (
        <div className="cards" id="Skills">
            <h1>My Skill Set</h1>
            <div className="all--cards">
                <div className="cards--container">
                    <div className="cards--wrapper">
                        <ul className="cards--items">
                            <CardItem 
                            // src="images/react.png"
                            src="images/react1.png"
                            text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
                            label="React"
                            path="/"
                            />
                            <CardItem 
                            // src="images/javascript.png"
                            src="images/react1.png"
                            text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
                            label="HTML"
                            path="/"
                            />
                            <CardItem 
                            // src="images/sql-server.png"
                            src="images/react1.png"
                            text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
                            label="CSS"
                            path="/"
                            />
                            <CardItem 
                            // src="images/html-5.png"
                            src="images/react1.png"
                            text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
                            label="Bootstrap"
                            path="/"
                            />
                        </ul>
                    </div>
                </div>
                {/* <div className="cards--container">
                    <div className="cards--wrapper">
                        <ul className="cards--items">
                            <CardItem 
                            src="images/nodejs.png"
                            text="MongoDB"
                            label="Database"
                            path="/"
                            />
                            <CardItem 
                            src="images/react.png"
                            text="SQL"
                            label="Database"
                            path="/"
                            />
                            <CardItem 
                            src="images/javascript.png"
                            text="MySQL"
                            label="Database"
                            path="/"
                            />
                            <CardItem 
                            src="images/sql-server.png"
                            text="Database"
                            label="Database"
                            path="/"
                            />
                            <CardItem 
                            src="images/html-5.png"
                            text="UI/UX"
                            label="Database"
                            path="/"
                            />
                        </ul>
                    </div>
                </div> */}
                <div className="cards--container">
                    <div className="cards--wrapper">
                        <ul className="cards--items">
                            <CardItem 
                            // src="images/nodejs.png"
                            src="images/js.webp"
                            text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
                            label="Node"
                            path="/"
                            />
                            <CardItem 
                            // src="images/react.png"
                            src="images/js.webp"
                            text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
                            label="PHP"
                            path="/"
                            />
                            <CardItem 
                            // src="images/javascript.png"
                            src="images/js.webp"
                            text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
                            label="JavaScript"
                            path="/"
                            />
                            <CardItem 
                            // src="images/sql-server.png"
                            src="images/js.webp"
                            text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing."
                            label="Express"
                            path="/"
                            />
                            {/* <CardItem 
                            src="images/html-5.png"
                            text="UI/UX"
                            label="Backend"
                            path="/"
                            /> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
