import { useEffect, useState } from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotal, updateCorrect, updateWrong } from '../../store/slices/ScoreSlice';


const Card = (props) => {

    //redux state dispatch
    const dispatch = useDispatch();

    //redux state selector
    const data = useSelector(state => state.score)
    
    // navigate hooks
    const navigate = useNavigate();

    //props destructuring
    const {questions, totalQuestions} = props.items;

    //states
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAns, setSelectedAns] = useState(null);
    const [selectedAnsIndex, setSelectedAnsIndex] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [timer, setTimer] = useState(9);

    //Array destructuring
    const {question, choices, id, correctAnswer} = questions[activeQuestion];

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                if(selectedAns == null){
                    setTimer((prevTimer) => prevTimer - 1);
                }
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
        else {
            setButtonDisabled(true);
        }
    }, [activeQuestion, timer]);

    const nextHandler = () =>{
        dispatch(updateTotal(totalQuestions))
        setSelectedAns(null)
        setButtonDisabled(false)
        setTimer(9)
        if(activeQuestion < totalQuestions-1){
            setActiveQuestion((prev) => prev + 1);
        }
        if(activeQuestion == totalQuestions-1){
            navigate('/result');
        }
    }

    const ansHandler = (answer, index) =>{
        setSelectedAnsIndex(index)
        if(answer === correctAnswer){
            setSelectedAns(true);
            dispatch(updateCorrect(data.correctQue + 1))
        }
        else{
            setSelectedAns(false);
            dispatch(updateWrong(data.wrongQue + 1))
        }
        setButtonDisabled(true)
    }

    return (
        <div className="background">
            <div className='quiz-container'>
                <div className='q-content'>
                    <div>
                        <span className='q-no'>{id}</span>
                        <span className='q-total'>/{totalQuestions}</span>
                    </div>
                    <div className="timer">
                        <i className="fa-regular fa-clock"></i>
                        <p>00:0{timer}</p>
                    </div>
                </div>
                <div className='question'>
                    <div className='q'> {question} 
                    </div>
                    <div className='options'>
                        {choices.map((val, index)=>{
                            return(
                                <button 
                                onClick={()=>{ansHandler(val, index)}} 
                                className={
                                    selectedAns != null ? 
                                    val == correctAnswer ?
                                    `selected-answer-true ${selectedAnsIndex == index ? 'selected-index' : ''}`
                                    : `selected-answer-false ${selectedAnsIndex == index ? 'selected-index' : ''}`
                                    : 'option-btn'
                                }
                                key={val}
                                disabled={selectedAns != null || buttonDisabled}
                                >{val}
                                </button>
                            )
                        })}

                    </div>
                    <div className='submit'>
                        <button className='submit-btn' onClick={nextHandler}
                            disabled={!buttonDisabled}
                        > {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;