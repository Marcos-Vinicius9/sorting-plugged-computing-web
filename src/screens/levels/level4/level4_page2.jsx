import QuestionScreen from '../../../Components/QuestionScreen/questionScreen'
import level2_4 from '../../../assets/images/levels/level2/level2_4.png'
import questionsLevel4 from '../../../data/questionsLevel4';


const level2_page3 = () =>{
    return(
        <QuestionScreen image={level2_4} questions={questionsLevel4} level={4}/>
    );
}


export default level2_page3;