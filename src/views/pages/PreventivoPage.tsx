import { useKeycloak } from "@react-keycloak/web/lib/useKeycloak";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import IPreventivo from "../../preventivo/model";
import usePreventivo from "../../shared/hooks/usePreventivo";

function PreventivoPage() {

    const {getPreventivo}=usePreventivo();

    let preventivoGet:IPreventivo;

    useEffect(()=>{
        
        getPreventivo();
    },[])

    const {keycloak,initialized}=useKeycloak();

    return ( 
      <>
      {/* <Card
        bg="primary"
      
        text='white'
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title onClick={()=>keycloak.login()}>Il tuo preventivo </Card.Title>
          <Card.Text>
            importo: {preventivoGet.importoRichiesto}  anno di nascita: {preventivoGet.dataNascita}  anno di assunzione: {preventivoGet.dataAssunzione}
             durata: {preventivoGet.durata}  importo rata:{preventivoGet.importoRata}
          </Card.Text>
        </Card.Body>
      </Card> */}</>
        
       )

}

export default PreventivoPage;