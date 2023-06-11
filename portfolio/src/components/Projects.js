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
        image: 'portfolio/src/images/desktop-dashboard.jpg',
        alt: "LaborHub App. the navigation has links to the Homepage, User Dashboard, Pay Dues and Logout. The user dashboard says 'Welcome, Test User.' It has sections for dues, a calendar, a union representative and messages.",
        description: "LaborHub is an app that allows users to share their wages, demographics data, and check if dues are paid.",
        tech: 'MySQL, Express.JS, Handlebars.JS, Node.JS, Sequelize, dotenv, npm, JavaScript, Spectre.css, CSS',
    },
    {
        title: 'NightOwl',
        repository: 'https://github.com/victoriamcn/NightOwl',
        image: { NightOwlImg },
        alt: "NightOwl application. Text says: Find your next adventure! Simply enter your criteria below and click 'search'. User can type in their city and select a date. Then the user can check if they want to search for music, sports or theatre events.",
        description: "NightOwl is an application designed to make event and dining recommendations based on the user's location and selected preferences.",
        tech: 'Third Party API, day.js, localStorage, Bootstrap, Javascript, HTML, CSS',
    },
    {
        title: 'NoSQL Social Network',
        repository: 'https://github.com/victoriamcn/NoSQL-Social-Network',
        deployed: { SocialNetImg },
        image: "portfolio/src/images/nosqlsocialnetworkPUTroute.png",
        alt: "Insomnia used to test a GET route to retrieve all users from the database",
        description: "This is an API for a social network web application that runs in the terminal. Users can share thoughts, react and create a friend list. Express.js is used for routing. MongoDB is used for the database along with Mongoose ODM.",
        tech: "MongoDB, Mongoose, Express.JS, dotenv, Node.JS, npm, JavaScript",
    },
    {
        title: 'Weather Dashboard',
        repository: 'https://github.com/victoriamcn/Weather-Dashboard',
        deployed: { WeatherImg },
        image: "portfolio/src/images/Timed-Quiz-Preview.png",
        alt: "screenshot of a weather application that displays the current day's and the five following days' forecast",
        description: "A simple weather application that runs in the browser and utilizes the 5 Day Weather Forecast API to retrieve weather data for cities.",
        tech: 'Third Party API, localStorage, Javascript, HTML, CSS',
    },
    {
        title: 'Timed Quiz',
        repository: 'https://github.com/victoriamcn/Timed-Coding-Quiz',
        deployed: { TimedQuizImg },
        image: "portfolio/src/images/Timed-Quiz-Preview.png",
        alt: 'screenshot of the start window for a coding quiz',
        description: "This quiz application runs in the browser that incorporates local storage to save and retrieve users' scores. After completing the quiz, the user's score and initials are displayed with other players' scores. The code utilizes the Document Object Model (DOM) API to interact with the HTML elements on the page.",
        tech: 'localStorage, JavaScript, HTML, CSS',
    },
    {
        title: 'Another One',
        repository: '',
        deployed: "",
        image: {},
        alt: 'screenshot of the start window for a coding quiz',
        description: "blah blah blah",
        tech: 'localStorage, JavaScript, HTML, CSS',
    },
]

export default function Example() {
    return (
        <section id="#projects" className="content container is-fluid columns">
            <div className="column">
                <h2 className="title column">Projects</h2>

                <div className="column is-5">

                    {projects.map((project) => (
                        <div className="card">
                            <div className="card-header">
                                <p className="title">{project.title}</p>
                            </div>
                            <div className="columns">
                                <div className="column is-half">
                                    <div className="card-image">
                                        <figure className="image is-128x128">
                                            <img src={project.image} alt={project.alt} />
                                        </figure></div>
                                </div>
                                <div className="column is-half">
                                    <p className="description">{project.description}</p>
                                </div>
                            </div>
                            <footer className="card-footer columns">
                                <div className="card-footer-item column">
                                    <span>
                                        <a href={project.repository}>
                                            <button className="button">Repository</button>
                                        </a>
                                    </span>
                                </div>
                                < div className="card-footer-item column">
                                    <span>
                                        <a href={project.deployed}>
                                            <button className="button view">Deployed App</button>
                                        </a>
                                    </span>
                                </div>
                            </footer>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}