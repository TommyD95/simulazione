import moment from "moment";
import { useEffect } from "react";
import { Button, ButtonGroup, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";
import api from "../../api/api";
import IPreventivo from "../../preventivo/model";
import usePreventivo from "../../shared/hooks/usePreventivo";
import { useAppSelector } from "../../store/hooks/hooks";
import { preventivoSelector } from "../../store/selector";


function PreventivoPage() {

  const { getPreventivo, preventivoGet } = usePreventivo();

  const navigate = useNavigate();
  //getPreventivo();


  /*  useEffect(()=>{ 
       getPreventivo();  
 },[]) 
  */


  const pr: IPreventivo = preventivoGet[preventivoGet.length - 1];
  console.log(pr)

  const numero: number = preventivoGet.length - 1;

  return (
    <>

      {pr &&
        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src="https://www.dimensionepulito.it/wp-content/uploads/2018/04/apre-preventivo.jpg" />
          <Card.Body >
            <Card.Title>IL TUO PREVENTIVO</Card.Title>
            <Card.Text>
              PREVENTIVO NUMERO: {numero}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>importo richiesto: {pr.importoRichiesto}</ListGroup.Item>
            <ListGroup.Item>data di nascita: {moment(pr.dataNascita).format("DD-MM-YYYY")}</ListGroup.Item>
            <ListGroup.Item>data di assunzione: {moment(pr.dataAssunzione).format("DD-MM-YYYY")}</ListGroup.Item>
            <ListGroup.Item>importo della rata: {pr.importoRata}</ListGroup.Item>
            <ListGroup.Item>sei un {pr.codiceTipoRichiedente.toLowerCase()}</ListGroup.Item>
          </ListGroup>
          <Card.Body>

            <Button onClick={() => navigate(api.endpointsPage.home)}>INDIETRO</Button>
            <Button onClick={() => navigate(api.endpointsPage.preventiviPage)}>LISTA</Button>
            <Button onClick={() => navigate(api.endpointsPage.compilaRichiesta)}>AVANTI</Button>


          </Card.Body>
        </Card>
        //
      }
    </>


  )

}

export default PreventivoPage;