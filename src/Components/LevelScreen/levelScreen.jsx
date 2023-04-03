import { Container } from "./customLevelScreenStyled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

import { Helmet } from "react-helmet";

const levelScreen = (props) =>{
    return (
        <Container>
            <Helmet htmlAttributes={{lang:'pt-Br'}}>
            <title>{ `Fase ${ props.level}` }</title>
            </Helmet>
            <div><a href={props.previousLevel}><FontAwesomeIcon icon={faAngleLeft} size="3x"/></a></div>
            <div class="content">
                <h3><strong>FASE {props.level}</strong></h3>
                <img src={props.image} alt="Fase 1_1" />
                <p>
                    {props.description}
                </p>
            </div>
            <div><a href={props.nextLevel}><FontAwesomeIcon icon={faAngleRight} size="3x"/></a></div>
        </Container>
    );
}

export default levelScreen;