import { Container } from "./congratulationsStyled";
import congratulations from '../../assets/images/congratulations/win_level.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'


const Congratulations = (props) => {
    const level = props.level;

    const element = <FontAwesomeIcon icon={faHouse} size="3x"/>


    return(
        <Container>
            <div class="content">
            <h3><strong>FASE {props.level}</strong></h3>
            <img src={congratulations} alt="Cover" />


            <div class="text-box">
                <h2><strong>PARABÉNS</strong></h2>
                <span>Você concluiu a FASE {level} do aplicativo Binários!</span>
            </div>

            <div class="nav-buttons w-100">
                <div class="nav-btn"><a href="/LevelSelection">{element}</a></div>
            </div>
            </div>
        </Container>
    )

}

export default Congratulations;