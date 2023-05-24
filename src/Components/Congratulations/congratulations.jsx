import { Link } from "react-router-dom";
import { Container } from "./congratulationsStyled";
import congratulations from '../../assets/images/congratulations/win_level.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowRightRotate, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';

const Congratulations = (props) => {
    const level = props.level;

    const houseIcon = <FontAwesomeIcon icon={faHouse} size="2x" />
    const reloadIcon = <FontAwesomeIcon icon={faArrowRightRotate} size="2x" />
    const nextLevelIcon = <FontAwesomeIcon icon={faArrowRight} size="2x" />
    const closeIcon = <FontAwesomeIcon icon={faXmark} size="2x" className="close-button" />
    return (
        <Container>

            <div className="close-container">
                <Link to={"/levelSelection"} >
                    {closeIcon}
                </Link>
            </div>

            <div class="content">
                <h3><strong>FASE {props.level}</strong></h3>
                <img src={congratulations} alt="Cover" />


                <div class="text-box">
                    <h2><strong>PARABÉNS</strong></h2>
                    <span>Você concluiu a FASE {level} do Computação Plugada Ordenação!</span>
                </div>

                <div class="nav-buttons ">
                    <Link to={"/levelSelection"} >
                        <div class="nav-btn">
                            <div class="containerButton">
                                {houseIcon}
                            </div>
                        </div>
                    </Link>
                    <Link to={props.levelReload} >
                        <div class="nav-btn">
                            <div class="containerButton">
                                {reloadIcon}
                            </div>
                        </div>
                    </Link>
                    <Link to={`/level${level + 1}-1`} >
                        <div class="nav-btn">
                            <div class="containerButton">
                                {nextLevelIcon}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Container>
    )

}

export default Congratulations;