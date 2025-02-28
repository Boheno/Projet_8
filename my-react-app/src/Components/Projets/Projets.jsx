import PropTypes from "prop-types";
import FilterButtons from "../Modals/Modals";

function GenerateCards() {
    return (
        <div className="projets-container">
            <h2>Mes projets réalisés</h2>
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