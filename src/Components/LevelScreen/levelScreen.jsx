import { Container } from "./customLevelScreenStyled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const levelScreen = (props) =>{
    return (
        <Container>
            <div><a href={props.previousLevel}>back</a></div>
            <div class="content">
                <h3><strong>FASE {props.level}</strong></h3>
                <img src={props.image} alt="Fase 1_1" />
                <p>
                    {props.description}
                </p>
            </div>
            <div><a href={props.nextLevel}>next</a></div>
            </Container>
    );
}

export default levelScreen;