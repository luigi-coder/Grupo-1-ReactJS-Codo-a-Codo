import { useEffect, useState } from "react";

/* import { Button } from "../button/Button"
import { Card } from "../card/Card" */

import { Button, Card, Col, Row } from 'react-bootstrap';

import axios from "axios";

const Ecommerce = () => {

    const [productos, setProductos] = useState([]);

    const getProductsMercaLibre = async () => {

        try {

            // consumiendo la api de mercado libre 
            /* const appId = '1230072520779662';
            const clientSecret = 'YSU1c0zXlALgdsO9Hl7fG2DgeJRoRBYA';

            const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?nickname=TETE365&limit=10&access_token=${appId}&client_secret=${clientSecret}`);

            console.log(response); */

            // consumiendo la api de mercado libre
            // x-box
            const respuestaXbox = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=xbox#json');

            const respuestaLaptop = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=laptop#json');

            const respuestaPhone = await axios.get("https://api.mercadolibre.com/sites/MLA/search?q=phone#json");

            // meter las dos respuestas en un mismo array con setProductos
            setProductos([...respuestaPhone.data.results, ...respuestaXbox.data.results, ...respuestaLaptop.data.results]);

            console.log('Productos:', productos);


        } catch (error) {

        }
    }

    useEffect(() => {
        getProductsMercaLibre();
    }, [])


    return (

        <Row className="text-center">
            {
                productos.map((producto, index) => (
                    <Col
                        sm={4} 
                        key={producto.id} 
                        className="d-flex justify-content-center mb-4 ">
                        <Card style={{ width: '18rem', height: '100%' }}>
                            <Card.Img
                                variant="top"
                                src={producto.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                                style={{
                                    margin: '20px auto',
                                    maxWidth: '60%',
                                    maxHeight: '160px',
                                }}
                            />

                            <Card.Body>
                                <Card.Title>{producto.title}</Card.Title>
                                
                                <Card.Text className="mb-5">
                                    ${producto.price} ARS
                                </Card.Text>
                                <div>
                                    <Button variant="primary" className="mb-4">Go somewhere</Button>
                                </div>
                            </Card.Body>

                        </Card>

                    </Col>
                ))
            }

        </Row>

    )
}

export default Ecommerce