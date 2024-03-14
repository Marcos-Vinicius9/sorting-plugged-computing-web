import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level4_1 from '../../../assets/images/levels/level4/level4_1.png';

const level4_page1 = () => {
    return (
        <LevelScreen
            previousLevel="/LevelSelection"
            level={4}
            image={level4_1}
            description="Agora vamos comparar os métodos de Ordenação por Inserção e Quicksort."
            nextLevel="/level4-2"
        />
    )
}

export default level4_page1;