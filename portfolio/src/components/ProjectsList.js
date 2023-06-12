import React from 'react';

import LaborHubImg from "../images/LaborHub-desktop-dashboard.jpg";
import NightOwlImg from "../images/NightOwl-Home.html.png";
import SocialNetImg from "../images/nosqlsocialnetworkPUTroute.png";
import WeatherImg from "../images/weatherpreview.png";
import TimedQuizImg from "../images/Timed-Quiz-Preview.png"

const projects = [
    {
        title: 'LaborHub',
        repository: 'https://github.com/victoriamcn/LaborHub',
        deployed: { LaborHubImg },
        preview: 'portfolio/src/images/desktop-dashboard.jpg',
        alt: "LaborHub App. the navigation has links to the Homepage, User Dashboard, Pay Dues and Logout. The user dashboard says 'Welcome, Test User.' It has sections for dues, a calendar, a union representative and messages.",
        description: "LaborHub is an app that allows users to share their wages, demographics data, and check if dues are paid.",
        tech: 'MySQL, Express.JS, Handlebars.JS, Node.JS, Sequelize, dotenv, npm, JavaScript, Spectre.css, CSS',
    },
    {
        title: 'NightOwl',
        repository: 'https://github.com/victoriamcn/NightOwl',
        preview: { NightOwlImg },
        alt: "NightOwl application. Text says: Find your next adventure! Simply enter your criteria below and click 'search'. User can type in their city and select a date. Then the user can check if they want to search for music, sports or theatre events.",
        description: "NightOwl is an application designed to make event and dining recommendations based on the user's location and selected preferences.",
        tech: 'Third Party API, day.js, localStorage, Bootstrap, Javascript, HTML, CSS',
    },
    {
        title: 'NoSQL Social Network',
        repository: 'https://github.com/victoriamcn/NoSQL-Social-Network',
        deployed: { SocialNetImg },
        preview: "portfolio/src/images/nosqlsocialnetworkPUTroute.png",
        alt: "Insomnia used to test a GET route to retrieve all users from the database",
        description: "This is an API for a social network web application that runs in the terminal. Users can share thoughts, react and create a friend list. Express.js is used for routing. MongoDB is used for the database along with Mongoose ODM.",
        tech: "MongoDB, Mongoose, Express.JS, dotenv, Node.JS, npm, JavaScript",
    },
    {
        title: 'Weather Dashboard',
        repository: 'https://github.com/victoriamcn/Weather-Dashboard',
        deployed: { WeatherImg },
        preview: "portfolio/src/images/Timed-Quiz-Preview.png",
        alt: "screenshot of a weather application that displays the current day's and the five following days' forecast",
        description: "A simple weather application that runs in the browser and utilizes the 5 Day Weather Forecast API to retrieve weather data for cities.",
        tech: 'Third Party API, localStorage, Javascript, HTML, CSS',
    },
    {
        title: 'Timed Quiz',
        repository: 'https://github.com/victoriamcn/Timed-Coding-Quiz',
        deployed: { TimedQuizImg },
        preview: "portfolio/src/images/Timed-Quiz-Preview.png",
        alt: 'screenshot of the start window for a coding quiz',
        description: "This quiz application runs in the browser that incorporates local storage to save and retrieve users' scores. After completing the quiz, the user's score and initials are displayed with other players' scores. The code utilizes the Document Object Model (DOM) API to interact with the HTML elements on the page.",
        tech: 'localStorage, JavaScript, HTML, CSS',
    },
    {
        title: 'Another One',
        repository: '',
        deployed: "",
        preview: {},
        alt: 'screenshot of the start window for a coding quiz',
        description: "blah blah blah",
        tech: 'localStorage, JavaScript, HTML, CSS',
    },
]

let ProjectsList = () => {
    return <div className="columns is-flex is-flex-wrap-wrap is-justify-content-flex-start">
        {projects.map((detail, i) => (
                <article className="box column is-one-third projectcol">
                    <figure className="image is-2by1">
                        <img src={detail.preview} alt={detail.alt} />
                    </figure>
                    <p data-value={detail.title} className="text">{detail.title}</p>
                    <p data-value={detail.description} className="text">{detail.description}</p>
                    <div>
                        <button className="button" data-value={detail.repository}>GitHub Repository</button>
                        <button className="button" data-value={detail.deployed}>Deployed Application</button>
                    </div>
                </article>

        ))}
    </div>;
}

export default ProjectsList;