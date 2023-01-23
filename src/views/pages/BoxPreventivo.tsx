import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { isPromise } from "util/types";
import IPreventivo from "../../preventivo/model";
import PreventivoDatiAnagrafici from "./PreventivoDatiAnagrafici";

function BoxPreventivo() {

    const [preventico,setPreventivo]=useState<Partial <IPreventivo>>({
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
                importoRata: "0",
                durata: 0,
                dataNascita: "",
                dataAssunzione: "",
    })

    return ( 
        <div>
              <Card>
      <Card.Body>
         
         <PreventivoDatiAnagrafici />
        
      </Card.Body>
    </Card>


        </div>
     );
}

export default BoxPreventivo;