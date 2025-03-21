import PropTypes from "prop-types";
import FilterButtons from "../Filtre/Filtre";

function GenerateCards() {
    return (
        <div className="projets-container" id="projets">
            <h2>Projets réalisés</h2>
            <FilterButtons />
            </div>
    );
}
GenerateCards.propTypes ={
    projets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            cover: PropTypes.string,
            title: PropTypes.string,
        })
    )
}
export default GenerateCards