import { Card } from "./custombuttonStyled";
import PropTypes from 'prop-types';
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

CardLevel.propTypes = {
    routerLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }; 


export default CardLevel;