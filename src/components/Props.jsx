
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import './Props.css';

export const Props = () => {
    return (
        <ul className="grid grid-three-cols">
            {seriesData.map((currElm) => {
                return <SeriesCard key={currElm.id} data={currElm} />;
            })};
        </ul>
    );
}