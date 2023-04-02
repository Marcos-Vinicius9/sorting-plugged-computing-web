import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level3_2 from '../../../assets/images/levels/level3/level3_2.png';

const level3_page2 = ()=> {
    return(
        <LevelScreen
        previousLevel="/level3-1"
        level={3}
        image={level3_2}
        description="A cada inserção, o grupo de objetos desordenados diminui e a lista ordenada aumenta até que, finalmente, toda a lista esteja ordenada."
        nextLevel="/level3-3"
        />
    )
}

export default level3_page2;