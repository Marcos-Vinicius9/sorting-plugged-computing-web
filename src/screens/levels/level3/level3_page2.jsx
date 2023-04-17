import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level3_2 from '../../../assets/images/levels/level3/level3_2.png';

const level3_page2 = ()=> {
    return(
        <LevelScreen
        previousLevel="/level3-1"
        level={3}
        image={level3_2}
        description="Considere o conjunto de cartas acima e que está desordenado. "
        nextLevel="/level3-3"
        />
    )
}

export default level3_page2;