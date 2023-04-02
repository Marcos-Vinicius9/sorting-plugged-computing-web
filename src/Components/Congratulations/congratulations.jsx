import { Container } from "./congratulationsStyled";
import congratulations from '../../assets/images/congratulations/win_level.png';

const Congratulations = () => {
    return(
        <Container>
            <div class="content">
            <h3><strong>FASE 1</strong></h3>
            <img src={congratulations} alt="Cover" />


            <div class="text-box">
                <h2><strong>PARABÉNS</strong></h2>
                <span>Você concluiu a FASE 1 do aplicativo Binários!</span>
            </div>

            <div class="nav-buttons w-100">
                <div class="nav-btn"><a href="/level2-1">Proximo nivel</a></div>
                <div class="nav-btn"><a routerLink="/fases"><i class="bi bi-chevron-right"></i></a></div>
            </div>
            </div>
        </Container>
    )

}

export default Congratulations;