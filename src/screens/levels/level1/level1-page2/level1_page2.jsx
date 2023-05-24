import LevelScreen from "../../../../Components/LevelScreen/levelScreen";
import level1_2 from '../../../../assets/images/levels/level1/level1_2.png';

const level1_page2 = () => {
    return (
        <LevelScreen
            previousLevel="/level1-1"
            level={1}
            image={level1_2}
            description="Classificar listas de itens como livros nos ajuda a encontrar as coisas rapidamente, e também facilita a identificação de itens específicos de cada lista."
            nextLevel="/level1-3"
        />
    )
}

export default level1_page2;