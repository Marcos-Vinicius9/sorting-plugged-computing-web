import QuestionScreen from '../../../Components/QuestionScreen/questionScreen'
import level2_4 from '../../../assets/images/levels/level2/level2_4.png'
import questionsLevel3 from '../../../data/questionsLevel3'


const level3_page4 = () => {
    return (
        <QuestionScreen image={level2_4} questions={questionsLevel3} level={3} />
    );
}


export default level3_page4;