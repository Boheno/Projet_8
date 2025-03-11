import Modal from 'react-modal';
import PropTypes from "prop-types";

Modal.setAppElement("#root");

function ModalOpen({ isOpen, onRequestClose, project }) {
  if (!project) {
    return null;
  }

  const modalStyles = {
    content: {
        backgroundColor: "white",
        width: "50%",
        height:"65%",
        position: 'absolute',
        top: '50%',
        left: '50%', 
        transform: 'translate(-50%, -50%)'
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Détails du projet" style={modalStyles}>
      <div className='header-modal'>
      <img className='img-modal' src={project.cover} alt={project.title} />
      <i className="fa-solid fa-xmark" onClick={onRequestClose}></i>
      </div>
      <div className='modal-content'>
      <h2 className='modal-title'>{project.title} <i className={project.iconClass}></i> </h2>
      <p>{project.description}</p>
      <h3>Problèmatiques du projet:</h3>
      <p>{project.problem}</p>
      
      <h3>Compétences développées:</h3>
      <div className='competences'>
      <i className="fa-solid fa-arrow-right"></i> <p>{project.competences}</p>
      </div>
      <p>Lien: <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a></p>
      
      </div>
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