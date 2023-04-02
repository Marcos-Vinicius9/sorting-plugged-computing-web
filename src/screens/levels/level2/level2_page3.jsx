import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level2_3 from '../../../assets/images/levels/level2/level2_3.png';

const level2_page3 = ()=> {
    return(
        <LevelScreen
        previousLevel="/level2-2"
        level={2}
        image={level2_3}
        description="A cada inserção, o grupo de objetos desordenados diminui e a lista ordenada aumenta até que, finalmente, toda a lista esteja ordenada."
        nextLevel="/level2-4"
        />
    )
}

export default level2_page3;