import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level2_2 from '../../../assets/images/levels/level2/level2_2.png';

const level2_page2 = ()=> {
    return(
        <LevelScreen
        previousLevel="/level2-1"
        level={2}
        image={level2_2}
        description="A ordenação por inserção remove cada objeto de um grupo desordenado e o insere na sua posição correta em uma lista crescente (Veja a figura acima)."
        nextLevel="/level2-3"
        />
    )
}

export default level2_page2;