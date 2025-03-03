import Modal from 'react-modal';
import PropTypes from "prop-types";

Modal.setAppElement("#root");

function ModalOpen({ isOpen, onRequestClose, project }) {
  if (!project) {
    return null; // Ne pas afficher la modale si aucun projet n'est sélectionné
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Détails du projet">
      <h2>{project.title}</h2>
      <img src={project.cover} alt={project.title} />
      <p>Catégorie: {project.category}</p>
      <p>Lien: <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a></p>
      <button onClick={onRequestClose}>Fermer</button>
    </Modal>
  );
}
ModalOpen.propTypes ={
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    project: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            cover: PropTypes.string,
            title: PropTypes.string,
        })
    )
}
export default ModalOpen;