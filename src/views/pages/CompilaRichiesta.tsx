import { getPathContributingMatches } from "@remix-run/router/dist/utils";
import { useState } from "react";
import { Tab, Row, Col, Nav, Button, Card, Carousel, Container } from "react-bootstrap";
import { getJSDocTypeParameterTags } from "typescript";

type steps = {
    key: string
}

function CompilaRichiesta() {

    const [stepCorrente,setStepCorrente]=useState<steps>({key:"a"})

    const steps: steps[] = [
        {
            key: "a"
        },
        {
            key: "b"
        }]

    
    
    const getTab = (key: string) => {
        switch (key) {
            case "a":
                console.log("aaaaaaa")
                return <div>aaaaaaaaa</div>;

            case "b":
                return <div>bbbbbbbbb</div>;
        }
        return <div>cazziiiiii</div>
    }

    const cercaStep = (step:steps) => {
        const stepTrovato = steps.find((st) => st.key != step.key);
        if (stepTrovato) {
            setStepCorrente(stepTrovato)
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Tab.Container activeKey={stepCorrente.key} onSelect={()=>cercaStep(stepCorrente)}>
                        <Nav variant="pills" className="mb-2 scrollable-navbar custom-scrollbar justify-content-md-center">
                            {steps.map((step: steps, i: number) => (
                                <Nav.Item key={step.key}>
                                    <Nav.Link
                                        eventKey={step.key} >
                                        <div className="wizard-step-counter">{i + 1}</div>
                                        <div className="wizard-step-name">{step.key}</div>
                                    </Nav.Link>
                                </Nav.Item>
                            ))}

                        </Nav>

                        <Row>
                            <Col>
                                <Tab.Content>
                                    {steps.map((step: steps, i: number) => (
                                        <Tab.Pane key={i} eventKey={step.key}>
                                            <Row>
                                                <Col>
                                                    {getTab(step.key)}
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    ))}

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container >
    );
}
export default CompilaRichiesta;