import IContent from "../../content/model/model";
import Image from 'react-bootstrap/Image'

type IProps={
    content:IContent[],
}

function BaseContent(props:IProps) {

    const {content}=props;

    return ( 
        <>
        {content.map((content:IContent,i:number)=>(
            <div key={i} id={content.id}><h1>{content.title}</h1>
            <Image fluid src={content.img} alt="finanza" />
          <p>  {content.desc}</p></div>
        ))}
        </>
     );
}

export default BaseContent;