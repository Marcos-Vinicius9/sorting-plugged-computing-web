import QuestionScreen from '../../../Components/QuestionScreen/questionScreen'
import level2_4 from '../../../assets/images/levels/level2/level2_4.png'
import questionsLevel2 from '../../../data/questionsLevel2'




const level2_page3 = () => {
    return (
        <QuestionScreen image={level2_4} questions={questionsLevel2} level={2} />
    );
}


export default level2_page3;