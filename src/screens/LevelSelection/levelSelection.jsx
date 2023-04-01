import styles from './levelSelection.module.css';
import CardLevel from '../../Components/CardLevel/cardLevel';
import level1 from '../../assets/images/levelSelection/level1.png';
import level2 from '../../assets/images/levelSelection/level2.png';
import level3 from '../../assets/images/levelSelection/level3.png';
import level4 from '../../assets/images/levelSelection/level4.png';
const levelSelection = () =>{
    return (
        <div class={styles.container}>
            <div class={styles.content}>
                <p class={styles.title}>Seleção de fase</p>
                <CardLevel level={1} image={level1} description="descrição da fase " routerLink="/"/>
                <CardLevel level={2} image={level2} description="descrição da fase " routerLink="/"/>
                <CardLevel level={3} image={level3} description="descrição da fase " routerLink="/"/>
                <CardLevel level={4} image={level4} description="descrição da fase " routerLink="/"/>
            </div>
        </div>
    )
}

export default levelSelection;