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
                <p>{props.description}</p>
                </div>
                <p class="arrow">></p>
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