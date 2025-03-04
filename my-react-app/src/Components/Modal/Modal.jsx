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
        height:"60%",
        position: 'absolute',
        top: '50%',
        left: '50%', 
        transform: 'translate(-50%, -50%)'
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Détails du projet" style={modalStyles}>
      <i className="fa-solid fa-xmark" onClick={onRequestClose}></i>
      <div className='modal-content'>
      <h2 className='modal-title'>{project.title}</h2>
      <img className='img-modal' src={project.cover} alt={project.title} />
      <p>{project.description}</p>
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