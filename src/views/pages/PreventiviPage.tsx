import moment from "moment";
import { useEffect } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import api from "../../api/api";
import IPreventivo from "../../preventivo/model";
import usePreventivo from "../../shared/hooks/usePreventivo";

function PreventiviPage() {

    const { getPreventivo, preventivoGet } = usePreventivo();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("ciao")
        getPreventivo();
    }, [])

    return (
        <>
            <Container>
                <Row>
                    {preventivoGet.map((pr: IPreventivo, i: number) =><Col> <Card style={{ width: '18rem',marginBottom:"50px", display: "inline-block", textAlign: "center" }}>
                        <Card.Img variant="top" src="https://www.dimensionepulito.it/wp-content/uploads/2018/04/apre-preventivo.jpg" />
                        <Card.Body >
                            <Card.Title>IL TUO PREVENTIVO</Card.Title>
                            <Card.Text>
                                PREVENTIVO NUMERO: {i + 1}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>importo richiesto: {pr.importoRichiesto}</ListGroup.Item>
                            <ListGroup.Item>data di nascita: {moment(pr.dataNascita).format("DD-MM-YYYY")}</ListGroup.Item>
                            <ListGroup.Item>data di assunzione: {moment(pr.dataAssunzione).format("DD-MM-YYYY")}</ListGroup.Item>
                            <ListGroup.Item>importo della rata: {pr.importoRata}</ListGroup.Item>
                            <ListGroup.Item>sei un {pr.codiceTipoRichiedente.toLowerCase()}</ListGroup.Item>
                        </ListGroup>
                    </Card> 
                    </Col>
                )}
                    </Row>
          </ Container>
        </>
    );
}

export default PreventiviPage;