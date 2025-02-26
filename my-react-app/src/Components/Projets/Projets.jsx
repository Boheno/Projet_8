import { Link } from "react-router-dom"
import PropTypes from "prop-types";

function GenerateCards({ projets }) {
    return (
        <div className="projets-container">
            <h2>Mes projets réalisés</h2>
            <div className="projet-cards-container">
            {projets.map((projet) => (
                <div key={projet.id} className="projet-card">
                    <Link to= {projet.link}>
                    <img src={projet.cover} alt={projet.title} />
                    <figcaption>{projet.title}</figcaption>
                    </Link> 
                  </div>
            ))}
            </div>
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