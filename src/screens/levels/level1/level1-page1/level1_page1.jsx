import LevelScreen from "../../../../Components/LevelScreen/levelScreen";
import level1_1 from '../../../../assets/images/levels/level1/leve1_1.png';

const level1_page1 = () => {
    return (
        <LevelScreen
            previousLevel="/LevelSelection"
            level={1}
            image={level1_1}
            description="Você sabia que os computadores são muitas vezes utilizados para colocar coisas em algum tipo de ordem? Por exemplo, podem colocar nomes em ordem alfabética, e-mails por data, ou itens em ordem numérica."
            nextLevel="/level1-2"
        />
    )
}

export default level1_page1;