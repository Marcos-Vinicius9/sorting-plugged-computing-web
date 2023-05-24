import LevelScreen from '../../../Components/LevelScreen/levelScreen';
import level3_3 from '../../../assets/images/levels/level3/level3_3.png';

const level3_page3 = () => {
    return (
        <LevelScreen
            previousLevel="/level3-2"
            level={3}
            image={level3_3}
            description="Vamos sortear agora uma das cartas. Suponha que seja sorteada a carta número 4. Agora você deve comparar todas as cartas com a carta número 4."
            nextLevel="/level3-4"
        />
    )
}

export default level3_page3;