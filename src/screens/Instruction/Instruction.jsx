import { useNavigate } from 'react-router-dom';
import './instruction.css';
import { useSelector } from 'react-redux';
import { quiz } from '../../Quiz';

const Instruction = () => {

  let navigate = useNavigate();

  const routeChange = () =>{
    let path = "/questions";
    navigate(path);
  }

  //redux state selector
  const data = useSelector(state => state.score)

  return (
    <div className="background">
      <div className='pop-up'>
          <div className='content'>
            <h2>Welcome To The Quiz App</h2>
            <div className='points'>
              <h3 style={{textAlign: "center"}}>Instructions  </h3>
              <div style={{marginTop: "20px", textAlign: "center"}}>
                <p>This Quiz Consist of {quiz.totalQuestions} Questions Only.</p>
                <p>It is a Timed Quiz, So there will be a Timer.</p>
                <p>User need to Attend all the Questions.</p>
                <p>You cannot change Your answer once marked, so Choose wisely.</p>
                <p>At the End User Score Will be Provided.</p>
              </div>
            </div>
            <div className='actions'>
              <button className="start-btn" onClick={routeChange}>Start</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Instruction;