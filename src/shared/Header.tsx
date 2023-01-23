import { Container, Nav,Navbar, NavDropdown } from 'react-bootstrap';
import IContent from '../content/model/model';
import IMenu from "../menus/model/model";
import useContentNavigation from './hooks/useContentNavigation';

type IProps={
    menus:IMenu[],
    content:IContent[],
}

function Header(props:IProps) {

    const {menus,content}=props;

   

    const scroll=(codiceContenuto:string|undefined)=>{
      if(content){
        const contenuto=content.find(content=>content.id===codiceContenuto);
        if(contenuto){
          const elem:HTMLElement|null=document.getElementById(contenuto.id);
        elem?.scrollIntoView();}
      }
      
    }
  

    return ( 
      <div style={{marginBottom:'60px'}}>
            <Navbar fixed='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Simulazione</Navbar.Brand>
          <Nav className="me-auto">
            {menus.map((menu:IMenu,i:number)=>(
                            <Nav.Link key={i} onClick={()=>scroll(menu.codiceContenuto)}>{menu.titolo}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
      </div >
     );
}

export default Header;