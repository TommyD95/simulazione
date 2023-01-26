import { useKeycloak } from "@react-keycloak/web/lib/useKeycloak";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import IPreventivo from "../../preventivo/model";
import usePreventivo from "../../shared/hooks/usePreventivo";
import { useAppSelector } from "../../store/hooks/hooks";
import { preventivoSelector } from "../../store/selector";

function PreventivoPage() {

    const {getPreventivo}=usePreventivo();

    const preventivoGet=useAppSelector(preventivoSelector)
 

    useEffect(()=>{
        getPreventivo();
    },[])

    const {keycloak,initialized}=useKeycloak();

    return ( 
      <>
        <Card
        bg="primary"
      
        text='white'
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title onClick={()=>keycloak.login()}>Il tuo preventivo </Card.Title>
          <Card.Text>
            {preventivoGet.map((pr)=><div>importo: {pr.importoRichiesto}  anno di nascita: {pr.dataNascita}  anno di assunzione: {pr.dataAssunzione}
             durata: {pr.durata}  importo rata:{pr.importoRata}</div>)}
            
          </Card.Text>
        </Card.Body>
      </Card> </>
        
       )

}

export default PreventivoPage;