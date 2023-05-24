import { Helmet } from 'react-helmet';
import styles from './levelSelection.module.css';
import CardLevel from '../../Components/CardLevel/cardLevel';
import level1 from '../../assets/images/levelSelection/level1.png';
import level2 from '../../assets/images/levelSelection/level2.png';
import level3 from '../../assets/images/levelSelection/level3.png';
import level4 from '../../assets/images/levelSelection/level4.png';
const levelSelection = () => {
    return (
        <div class={styles.container}>
            <Helmet htmlAttributes={{ lang: 'pt-Br' }}>
                <title>Seleção de fases</title>
            </Helmet>
            <div class={styles.content}>
                <p class={styles.title}>Seleção de fase</p>
                <CardLevel level={1} image={level1} description="Ordenação de listas em computadores." routerLink="/level1-1" />
                <CardLevel level={2} image={level2} description="Ordenação por inserção: Insertion Sort." routerLink="/level2-1" />
                <CardLevel level={3} image={level3} description="Ordenação rápida: Quicksort." routerLink="/level3-1" />
                <CardLevel level={4} image={level4} description="Ordenação por inserção x Quicksort." routerLink="/level4-1" />
            </div>
        </div>
    )
}

export default levelSelection;