import React, { useState } from "react";
import { Form, Button, Col, FormGroup, Row } from "react-bootstrap";
import {useNavigate } from "react-router";
import api from "../../api/api";
import IPreventivo from "../../preventivo/model";
import usePreventivo from "../../shared/hooks/usePreventivo";

function PreventivoDatiAnagrafici() {

  const Navigate = useNavigate();

  const {  postPreventivo } = usePreventivo();

  const [importo, setImporto] = useState<string>("0");
  const [tipo, setTipo] = useState<string>("non determinato");
  const [dataNascita, setDataNascita] = useState<string>("");
  const [dataAssunzione, setDataAssunzione] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    console.log(dataAssunzione,dataNascita)
    const form = e.currentTarget;
    e.preventDefault();

   if (form.checkValidity() === false) {
      e.stopPropagation();
    } 

    let simulator:IPreventivo;

    simulator={     
      tipoRisultato: undefined,
      showDatiFinanziari: false,
      expandDatiAnagrafici: true,
      expandDatiFinanziari: false,
      modalConvenzioneVisible: false,
      modalConvenzioneMessage: "",
      importoRichiestoMin: 1000,
      importoRichiestoMax: 75000,
      importoRataMin: 0,
      importoRataMax: 0,
      importoRata: (parseFloat(importo)/24).toFixed(2),
      durata: 24,
      dataNascita: dataNascita,
      dataAssunzione: dataAssunzione,
      campagnaCodice: "",
      campagnaToken: "",
      codiceTipoRichiedente: tipo,
      cognome: "",
      convenzioneCodice: "",
      importoNettoRedditoMensile: "0",
      importoRichiesto: importo,
      isSubmitted: true,
      nome: ""
    } 

    postPreventivo(simulator);
    setValidated(true);
    Navigate(api.endpointsPage.preventivoPage);
  }

  const inputImporto=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setImporto(e.target.value)
  }

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipo(e.currentTarget.value);
  }
  
  return (
    <>
      <Form  validated={validated} onSubmit={handleSubmit}>

        <FormGroup>
          <Row>
            <Col sm={6}>
              <Form.Label>Importo richiesto</Form.Label>
              <Form.Control
              step={0.01}
                min="1000"
                max="75000"
                type="number"
                
                value={importo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputImporto(e)}
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Tipo dipendente</Form.Label>
              <Form.Select required placeholder="tipo" as="select"  onChange={(e) => selectHandler(e)}>
                <option>tipo richiedente</option>
                <option>Dipendente</option>
                <option>Pensionato</option>
              </Form.Select>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col sm={6}>
              <Form.Label>Data di nascita</Form.Label>
              <Form.Control
                required
                type="date"
                value={dataNascita}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataNascita(e.target.value)}
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Data di assunzione</Form.Label>
              <Form.Control
                required
                type="date"
                value={dataAssunzione}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataAssunzione(e.target.value)}
              />
            </Col>
          </Row>
        </FormGroup>
        <Button type="submit">Invia</Button>
      </Form>
      { }
    </>
  );
}


export default PreventivoDatiAnagrafici;