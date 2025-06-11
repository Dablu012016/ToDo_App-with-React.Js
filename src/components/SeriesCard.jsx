
export const SeriesCard = ({ data }) => {

    const { id, name, img_url, rating, description, genre, cast, watch_url } = data;

    return (
        <li>
            <div>
                <img src={img_url} alt={id} />
            </div>
            <div className="card-container">
                <h2>Name: {name}</h2>
                <h3 style={{ fontSize: "1rem" }}>Rating:
                    <span className={rating >= 8.5 ? "green_color" : "yellow_color"}>{rating} </span> </h3>
                <p>Summary: {description} </p>
                <p>Genre: {genre} </p>
                <p>Cast: {cast}</p>
                <a href={watch_url} target="_blank">
                    <button className={rating >= 8.5 ? "green_color" : "yellow_color"}>Watch Now</button>
                </a>
            </div>
        </li>
    );
}