import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level2_1 from '../../../assets/images/levels/level2/level2_1.png';

const level2_page1 = ()=> {
    return(
        <LevelScreen
        previousLevel="/LevelSelection"
        level={2}
        image={level2_1}
        description="Agora vamos conhecer a ordenação por inserção (Insertion Sort)."
        nextLevel="/level2-2"
        />
    )
}

export default level2_page1;