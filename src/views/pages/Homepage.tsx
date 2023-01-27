import moment from "moment";
import { useEffect } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import api from "../../api/api";
import BaseLoading from "../../shared/BaseLoading";
import useContentNavigation from "../../shared/hooks/useContentNavigation";
import usePreventivo from "../../shared/hooks/usePreventivo";
import BaseContent from "../base-page/BaseContent";
import BoxPreventivo from "./BoxPreventivo";

function Homepage() {

    const { getContent, loadingContent, content } = useContentNavigation();
    const {  getPreventivo } = usePreventivo();

    const navigate = useNavigate();

    useEffect(() => {
            getContent()
        getPreventivo();
    }, [])

    return (
        <>
            {content ?
            <Container>
            <Row >
                <Col style={{ order: 1 }}>
                    <BaseContent content={content} />
                </Col>
                <Col style={{ order: 2 }}>
                    <BoxPreventivo />
                </Col>
            </Row>
            </ Container >
        :
             <BaseLoading />}
        </>
    
        
                
         );

    }
            export default Homepage;