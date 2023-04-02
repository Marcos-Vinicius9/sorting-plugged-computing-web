import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level3_1 from '../../../assets/images/levels/level3/level3_1.png';

const level3_page1 = ()=> {
    return(
        <LevelScreen
        previousLevel="/LevelSelection"
        level={3}
        image={level3_1}
        description="Agora vamos conhecer o método de ordenação rápida (Quicksort)."
        back
        nextLevel="/level3-2"
        />
    )
}

export default level3_page1;