import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/MovieCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import axios from "axios";
import { useGenreData, useSetGenreData } from "../../contexts/GenreDataContext";
import GenreOptions from "./GenreOptions";

function PostCreateForm() {

  const [errors, setErrors] = useState({});
    const genreData = useGenreData();
  const setGenreData = useSetGenreData();

  //const [genreData, setGenreData ] = useState(null);

  const [addMovieData, setAddMovieData] = useState({
    title: "",
    year: "",

  });

  /*
  useEffect(() => {
    getGenreData()
  }, []);


  const getGenreData = async (event) => {

    try{
    const { data } = await axios.get("/genres");
        setGenreData(data.results);
    } catch(err){
        console.log(err);
    }

  };
  */
  
  
  


  const textFields = (
    <div className="text-center">
      {/* Add your form fields here */}

    
    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    
    <Form>
        
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="">
            <Form.Label className="d-none">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                name="title"
                className={styles.Input}
                
                onChange={() => {}}
              />
            </Form.Group>
            <Form.Group className="">
            <Form.Label className="d-none">Year</Form.Label>
              <Form.Control
                type="year"
                placeholder="year"
                name="year"
                className={styles.Input}
                
                onChange={() => {}}
              />
            </Form.Group>
            <Form.Group className="">
            <Form.Label className="d-none">Director</Form.Label>
              <Form.Control
                type="director"
                placeholder="director"
                name="director"
                className={styles.Input}
                
                onChange={() => {}}
              />
            </Form.Group>
            <Form.Group className="">
            <Form.Label className="d-none">Genre</Form.Label>
              <Form.Control
              as="select" multiple className={styles.Input} onChange={() => {}}
              >
                {/*<GenreOptions />*/}
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              </Form.Control>
            </Form.Group>

            
            {console.log(JSON.stringify(genreData))}
            {console.log(`keys: ${Object.keys(genreData)}`)}
            {console.log(`values ${Object.values(genreData)}`)}

{/*
            {[genreData].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`first`}
      />

      <Form.Check
        type={type}
        label={`default-${type}`}
        id={`default-${type}`}
      />
    </div>
  ))}
  */}



            <Form.Group className="text-center">
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset src={Upload} message="Click or tap to upload an image"/>
                </Form.Label>

            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
      <GenreOptions />
    </Form>
    
  );
}

export default PostCreateForm;