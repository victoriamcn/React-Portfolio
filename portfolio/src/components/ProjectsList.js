import React from 'react';

// import LaborHubImg from "../images/LaborHub-desktop-dashboard.jpg";
// import NightOwlImg from "../images/NightOwl-Home.html.png";
// import SocialNetImg from "../images/nosqlsocialnetworkPUTroute.png";
// import WeatherImg from "../images/weatherpreview.png";
// import TimedQuizImg from "../images/Timed-Quiz-Preview.png"

const projects = [
    {
        title: 'LaborHub',
        repository: 'https://github.com/victoriamcn/LaborHub',
        deployed: "https://laborhub.herokuapp.com/",
        //preview: "LaborHub-desktop-dashboard.jpg",
        alt: "LaborHub App. the navigation has links to the Homepage, User Dashboard, Pay Dues and Logout. The user dashboard says 'Welcome, Test User.' It has sections for dues, a calendar, a union representative and messages.",
        description: "LaborHub is an app that allows users to share their wages, demographics data, and check if dues are paid.",
        tech: 'MySQL, Express.JS, Handlebars.JS, Node.JS, Sequelize, dotenv, npm, JavaScript, Spectre.css, CSS',
    },
    {
        title: 'NightOwl',
        repository: 'https://github.com/victoriamcn/NightOwl',
        deployed: "https://victoriamcn.github.io/NightOwl/",
        //preview: { NightOwlImg },
        alt: "NightOwl application. Text says: Find your next adventure! Simply enter your criteria below and click 'search'. User can type in their city and select a date. Then the user can check if they want to search for music, sports or theatre events.",
        description: "NightOwl is an application designed to make event and dining recommendations based on the user's location and selected preferences.",
        tech: 'Third Party API, day.js, localStorage, Bootstrap, Javascript, HTML, CSS',
    },
    {
        title: 'NoSQL Social Network',
        repository: 'https://github.com/victoriamcn/NoSQL-Social-Network',
        deployed: "https://www.youtube.com/watch?v=CzLSilbr5A0",
        //preview: { SocialNetImg },
        alt: "Insomnia used to test a GET route to retrieve all users from the database",
        description: "This is an API for a social network web application. Users can share thoughts, react and create a friend list.",
        tech: "MongoDB, Mongoose, Express.JS, dotenv, Node.JS, npm, JavaScript",
    },
    {
        title: 'Weather Dashboard',
        repository: 'https://github.com/victoriamcn/Weather-Dashboard',
        deployed: "https://github.com/victoriamcn/Weather-Dashboard",
        //preview: { WeatherImg },
        alt: "screenshot of a weather application that displays the current day's and the five following days' forecast",
        description: "A simple weather application that runs in the browser and utilizes the 5 Day Weather Forecast API to retrieve weather data for cities.",
        tech: 'Third Party API, localStorage, Javascript, HTML, CSS',
    },
    {
        title: 'Timed Quiz',
        repository: 'https://github.com/victoriamcn/Timed-Coding-Quiz',
        deployed: "https://victoriamcn.github.io/Timed-Coding-Quiz/",
        //preview: { TimedQuizImg },
        alt: 'screenshot of the start window for a coding quiz',
        description: "This quiz application incorporates local storage to save and retrieve users' scores. After completing the quiz, the user's score and initials are displayed with other players' scores.",
        tech: 'localStorage, JavaScript, HTML, CSS',
    },
    {
        title: 'Portfolio with React',
        repository: "https://github.com/victoriamcn/React-Portfolio",
        deployed: "",
        preview: {},
        alt: "",
        description: "My tech portfolio is built with React and designed to showcase my web development skills to potential employers.",
        tech: 'JavaScript, React, Bulma.css',
    },
]

let ProjectsList = () => {
    return <div className="columns is-flex is-flex-wrap-wrap is-justify-content-flex-start">
        {projects.map((detail, i) => (
            <article className="box column is-one-third projectcol">
                <p data-value={detail.title} className="text">{detail.title}</p>
                <p data-value={detail.description} className="text">{detail.description}</p>
                <div className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <button className="button is-small" data-value={detail.repository}>Repository</button>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <button className="button is-small" data-value={detail.deployed}>Application</button>
                        </div>
                    </div>
                </div>
            </article>
        ))}
    </div>;
}

export default ProjectsList;