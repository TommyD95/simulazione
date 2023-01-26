import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BaseLoading from "../../shared/BaseLoading";
import useContentNavigation from "../../shared/hooks/useContentNavigation";
import BaseContent from "../base-page/BaseContent";
import BoxPreventivo from "./BoxPreventivo";

function Homepage() {



    const {getContent,loadingContent,content}=useContentNavigation();
    
    useEffect(()=>{
        getContent();
        
    },[])

    return ( 
        <div >
            <Container>
                <Row > 
                    <Col style={{order:1}}>
                    {loadingContent ? <BaseLoading /> : <BaseContent content={content}/>}</Col>
                    <Col style={{order:2}}><BoxPreventivo /></Col>
                </Row>
            </Container>
            
             
        </div>
     );
}

export default Homepage;