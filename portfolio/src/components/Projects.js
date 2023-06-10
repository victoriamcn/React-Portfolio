

const projects = [
    {
        title: 'LaborHub',
        url: 'https://github.com/victoriamcn/LaborHub',
        image: 'portfolio/src/images/desktop-dashboard.jpg',
        alt: "LaborHub App. the navigation has links to the Homepage, User Dashboard, Pay Dues and Logout. The user dashboard says 'Welcome, Test User.' It has sections for dues, a calendar, a union representative and messages.",
        description: "LaborHub is an app that allows users to share their wages, demographics data, and check if dues are paid.",
        tech: 'MySQL, Express.JS, Handlebars.JS, Node.JS, Sequelize, dotenv, npm, JavaScript, Spectre.css, CSS',
    },
    {
        title: 'NightOwl',
        url: 'https://github.com/victoriamcn/NightOwl',
        image: "portfolio/src/images/NightOwl-Home.html.png",
        alt: "NightOwl application. Text says: Find your next adventure! Simply enter your criteria below and click 'search'. User can type in their city and select a date. Then the user can check if they want to search for music, sports or theatre events.",
        description: "NightOwl is an application designed to make event and dining recommendations based on the user's location and selected preferences. The app allows users to discover nearby events and restaurants based on input selections, such as city, date, and event types.",
        tech: 'Third Party API, day.js, localStorage, Bootstrap, Javascript, HTML, CSS',
    },
    {
        title: 'NoSQL Social Network',
        url: 'https://github.com/victoriamcn/NoSQL-Social-Network',
        image: "portfolio/src/images/nosqlsocialnetworkPUTroute.png",
        alt: "Insomnia used to test a GET route to retrieve all users from the database",
        description: "This is an API for a social network web application that runs in the terminal. Users can share thoughts, react and create a friend list. Express.js is used for routing. MongoDB is used for the database along with Mongoose ODM.",
        tech: "MongoDB, Mongoose, Express.JS, dotenv, Node.JS, npm, JavaScript",
    },
    {
        title: 'Weather Dashboard',
        url: 'https://github.com/victoriamcn/Weather-Dashboard',
        image: "portfolio/src/images/Timed-Quiz-Preview.png",
        alt: "screenshot of a weather application that displays the current day's and the five following days' forecast",
        description: "A simple weather application that runs in the browser and utilizes the 5 Day Weather Forecast API to retrieve weather data for cities.",
        tech: 'Third Party API, localStorage, Javascript, HTML, CSS',
    },
    {
        title: 'Timed Quiz',
        url: 'https://github.com/victoriamcn/Timed-Coding-Quiz',
        image: "portfolio/src/images/Timed-Quiz-Preview.png",
        alt: 'screenshot of the start window for a coding quiz',
        description: "This quiz application runs in the browser that incorporates local storage to save and retrieve users' scores. After completing the quiz, the user's score and initials are displayed with other players' scores. The code utilizes the Document Object Model (DOM) API to interact with the HTML elements on the page.",
        tech: 'localStorage, JavaScript, HTML, CSS',
    },
]

export default function Example() {
    return (
        projects.map((project) => (
            <div className="card">
                <div className="card-header">
                    <p className="title">{project.title}</p>
                </div>
                <div class="content">
                <div className="card-image">
                    <figure class="image is-3by1">
                        <img src={project.image} alt={project.alt} />
                    </figure>
                </div>
                    <p className="description">{project.description}</p>
                </div>
                <footer class="card-footer">
                    < div className="card-footer-item">
                        <span>
                            <a href={project.url}>
                                <button class="button is-info">View on GitHub</button>
                            </a>
                        </span>
                    </div>
                    <div class="card-footer-item tags">
                        <span class="tag is-info is-light">{project.tech}</span>
                    </div>
                </footer>

            </div>
        ))
    )
}