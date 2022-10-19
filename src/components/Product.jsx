import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Product = (props) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ props.src } />
            <Card.Body>
                <Card.Title> { props.title } </Card.Title>
                <Card.Text>
                    { props.text }
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item> { props.feature1 } </ListGroup.Item>
                <ListGroup.Item> { props.feature2 } </ListGroup.Item>
                <ListGroup.Item> { props.feature3 } </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Product;