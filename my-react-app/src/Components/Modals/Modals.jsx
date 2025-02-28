import { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import data from "../../../projets.json";

  function FilterButtons() {
    const [filteredData, setFilteredData] = useState(data);
    const [activeFilter, setActiveFilter] = useState('all');
    const handleClick = (category) => {
        setActiveFilter(category);
        if (category === 'all') {
          setFilteredData(data);
        } else {
          const filtered = data.filter((item) => item.category === category);
          setFilteredData(filtered);
        }
      };

    const categories = [...new Set(data.map((item) => item.category))];
    return (
        <Container>
          <Row className="mb-3">
            <Col>
              <Button
                variant={activeFilter === 'all' ? 'primary' : 'outline-primary'}
                onClick={() => handleClick('all')}
              >
                Tous
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? 'primary' : 'outline-primary'}
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
              <div key={data.id} className="projet-card">
              <Link to= {data.link}>
              <img src={data.cover} alt={data.title} />
              <figcaption>{data.title}</figcaption>
              </Link> 
            </div>
            ))}
            </div>
          </Row>
        </Container>
      );
    }
    
    export default FilterButtons;