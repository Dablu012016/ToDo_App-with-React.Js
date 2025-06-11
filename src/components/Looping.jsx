
import seriesData from "../api/seriesData.json"

export const Looping = () => {

    return (
        <ul>
            {seriesData.map((currElm) => {
                return (
                    <li key={currElm.id}>
                        <div>
                            <img src={currElm.img_url} alt={currElm.id}
                            width="40%"
                            height="40%" />
                        </div>
                        <h1>Name: {currElm.name}</h1>
                        <h3>Rating: {currElm.rating} </h3>
                        <p>Summary: {currElm.description} </p>
                        <p>Genre: {currElm.genre} </p>
                        <p>Cast: {currElm.cast}</p>
                        <a href={currElm.watch_url} target="_blank">
                            <button>Watch Now</button>
                        </a>
                        <br />
                        <br />
                    </li>
                );
            })};
        </ul>
    );
}