const projects = [
    {
        name: '',
        url: '',
        image: '',
        alt: '',
        description: '',
    },
    {
        name: '',
        url: '',
        image: '',
        alt: '',
        description: '',
    },
    {
        name: 'NightOwl',
        url: 'https://github.com/victoriamcn/NightOwl',
        image: '../../images/NightOwlPreview.png',
        alt: "NightOwl application. Text says: Find your next adventure! Simply enter your criteria below and click 'search'. User can type in their city and select a date. Then the user can check if they want to search for music, sports or theatre events.",
        description: "NightOwl is an application designed to make event and dining recommendations based on the user's location and selected preferences. The app allows users to discover nearby events and restaurants based on input selections, such as city, date, and event types.",
    },
    {
        name: '',
        url: '',
        image: '',
        alt: '',
        description: '',
    },
    {
        name: 'Weather Dashboard',
        url: 'https://github.com/victoriamcn/Weather-Dashboard',
        image: '../../images/weatherpreview.png',
        alt: "screenshot of a weather application that displays the current day's and the five following days' forecast",
        description: "A simple weather application that runs in the browser and utilizes the 5 Day Weather Forecast API to retrieve weather data for cities.",
    },
    {
        name: 'Timed Quiz',
        url: 'https://github.com/victoriamcn/Timed-Coding-Quiz',
        image: '../../images/Timed-Quiz-Preview.png',
        alt: 'screenshot of the start window for a coding quiz',
        description: "This quiz application runs in the browser that incorporates local storage functionality to save and retrieve users' scores. After completing the quiz, the user's score and initials are displayed with other players' scores. The code utilizes the Document Object Model (DOM) API to interact with the HTML elements on the page.",
    },
]

export default function Example() {
    return (
        projects.map((repo) => (
            <div className="card">
                <a href={repo.url} className="py-4 flex">
                    <div className="card-image">
                        <figure class="image is-4by3">
                            <img src={repo.image} alt={repo.alt} />
                        </figure>
                    </div>
                    <div className="card-header">
                        <p className="card-header-title">{repo.name}</p>
                        <p class="subtitle is-6">Click here to view the repository in GitHub.</p>
                    </div>
                    <div className="content">
                        {repo.description}
                    </div>
                </a>
            </div>
        ))
    )
}