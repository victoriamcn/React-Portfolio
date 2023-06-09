import LaborHub from '../images/desktop-dashboard.jpg';
import NightOwl from '../images/';
import SocialNetwork from '../images';
import Weather from '../images';
import Quiz from '../images';




const projects = [
    {
        name: 'LaborHub',
        url: 'https://github.com/victoriamcn/LaborHub',
        image: {LaborHub},
        alt: "LaborHub App. the navigation has links to the Homepage, User Dashboard, Pay Dues and Logout. The user dashboard says 'Welcome, Test User.' It has sections for dues, a calendar, a union representative and messages.",
        description: "LaborHub is an app that allows users to share their wages, demographics data, and check if dues are paid.",
        tech: 'MySQL, Express.JS, Handlebars.JS, Node.JS, Sequelize, dotenv, npm, JavaScript, Spectre.css, CSS',
    },
    {
        name: 'NightOwl',
        url: 'https://github.com/victoriamcn/NightOwl',
        image: {NightOwl},
        alt: "NightOwl application. Text says: Find your next adventure! Simply enter your criteria below and click 'search'. User can type in their city and select a date. Then the user can check if they want to search for music, sports or theatre events.",
        description: "NightOwl is an application designed to make event and dining recommendations based on the user's location and selected preferences. The app allows users to discover nearby events and restaurants based on input selections, such as city, date, and event types.",
        tech: 'Third Party API, day.js, localStorage, Bootstrap, Javascript, HTML, CSS',
    },
    {
        name: 'NoSQL Social Network',
        url: 'https://github.com/victoriamcn/NoSQL-Social-Network',
        image: {SocialNetwork},
        alt: "Insomnia used to test a GET route to retrieve all users from the database",
        description: "This is an API for a social network web application that runs in the terminal. Users can share thoughts, react and create a friend list. Express.js is used for routing. MongoDB is used for the database along with Mongoose ODM.",
        tech: "MongoDB, Mongoose, Express.JS, dotenv, Node.JS, npm, JavaScript",
    },
    {
        name: 'Weather Dashboard',
        url: 'https://github.com/victoriamcn/Weather-Dashboard',
        image: {Weather},
        alt: "screenshot of a weather application that displays the current day's and the five following days' forecast",
        description: "A simple weather application that runs in the browser and utilizes the 5 Day Weather Forecast API to retrieve weather data for cities.",
        tech: 'Third Party API, localStorage, Javascript, HTML, CSS',
    },
    {
        name: 'Timed Quiz',
        url: 'https://github.com/victoriamcn/Timed-Coding-Quiz',
        image: Quiz,
        alt: 'screenshot of the start window for a coding quiz',
        description: "This quiz application runs in the browser that incorporates local storage functionality to save and retrieve users' scores. After completing the quiz, the user's score and initials are displayed with other players' scores. The code utilizes the Document Object Model (DOM) API to interact with the HTML elements on the page.",
        tech: 'localStorage, JavaScript, HTML, CSS',
    },
]

export default function Example() {
    return (
        projects.map((repo) => (
            <div className="card">
                <div className="card-image">
                    <figure class="image is-4by3">
                        <img src={repo.image} alt={repo.alt} />
                    </figure>
                </div>
                <div className="card-header">
                    <p className="title">{repo.name}</p>
                    <p className="subtitle">{repo.description}</p>
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                        <span>
                            View on <a href={repo.url}>GitHub</a>
                        </span>
                    </p>
                    <p>Technologies Used: </p>
                    <div class=" card-footer-item tags">
                        <span class="tag is-info is-light">{repo.tech}</span>
                    </div>
                </footer>

            </div>
        ))
    )
}