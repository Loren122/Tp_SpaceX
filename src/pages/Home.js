import getData from '../utils/getData.js';

const Home = async () => {
    const launchDetails = await getData();
    console.log(launchDetails);

    const view = `
        <div class="launches-container">
        ${launchDetails.map(launch => `
            <article class="launch-item">
                <a href="#/${launch.flight_number}">
                    <img src="${launch.links.patch.small}" alt="${launch.name}">
                    <h2>${launch.name}</h2>
                </a>
            </article>
        `).join('')}
        </div>
    `;
    return view;
};

export default Home;