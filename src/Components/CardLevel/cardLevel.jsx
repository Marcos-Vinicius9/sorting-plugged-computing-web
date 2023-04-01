import { Card } from "./custombuttonStyled";
const CardLevel = (props) => {
    return(
        <Card>
            <div class="level">
                <a href={props.routerLink}>
                <img src={props.image} alt="Fase 1" />
                <div class="description">
                <p><strong>FASE {props.level}</strong></p>
                <p>{props.description}</p>
                </div>
                <p class="arrow">></p>
                </a>
            </div>
        </Card>
    );
}
export default CardLevel;