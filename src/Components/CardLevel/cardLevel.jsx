import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import { Card } from "./custombuttonStyled";
import PropTypes from 'prop-types';
const CardLevel = (props) => {
    return(
        <Card>
            <div class="level">
                <Link to={props.routerLink} >
                <img src={props.image} alt="" />
                <div class="description">
                <p><strong>FASE {props.level}</strong></p>
                <p class="description-text">{props.description}</p>
                </div>
                <p class="arrow"><FontAwesomeIcon icon={faAngleRight} size="1   x"/></p>
                </Link>
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