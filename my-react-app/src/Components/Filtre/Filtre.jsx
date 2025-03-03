import { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import data from "../../../projets.json";
import ModalOpen from "../Modal/Modal.jsx";

function FilterButtons() {
  const [filteredData, setFilteredData] = useState(data);
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Button
            variant={activeFilter === 'all' ? 'filter-button-active' : 'filter-button-inactive'}
            onClick={() => handleClick('all')}
          >
            Tous
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'filter-button-active' : 'filter-button-inactive'}
              onClick={() => handleClick(category)}
            >
              {category}
            </Button>
          ))}
        </Col>
      </Row>
      <Row>
        <div className="projet-cards-container">
          {filteredData.map((data) => (
            <div key={data.id} className="projet-card" id={`projet-card-${data.title.replace(/\s+/g, "-").toLowerCase()}`} onClick={() => openModal(data)}>
              
                <img src={data.cover} alt={data.title} />
                <figcaption>{data.title}</figcaption>
              
            </div>
          ))}
        </div>
      </Row>
      <ModalOpen isOpen={modalIsOpen} onRequestClose={closeModal} project={selectedProject} />
    </Container>
  );
}

export default FilterButtons;