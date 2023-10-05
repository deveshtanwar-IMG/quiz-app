import { useNavigate } from 'react-router-dom';
import './result.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateAns, updateCorrect, updateTotal, updateWrong } from '../../store/slices/ScoreSlice';
import { quiz } from '../../Quiz';

const Result = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const routeChange = () => {
    let path = "/";
    navigate(path);
    dispatch(updateTotal(0));
    dispatch(updateCorrect(0));
    dispatch(updateWrong(0));
    dispatch(updateAns(quiz.totalQuestions));
  }

  //redux state selector
  const data = useSelector(state => state.score)

  return (
    <div className="background-result noSelect">
      <div className='pop-up-result'>
        <div className='content'>
          <h2 style={{ fontFamily: "sans-serif" }} className='mobile-view'>Thank you for participating</h2>
          <div className='points'>
            <h3 style={{ textAlign: "center", fontFamily: "cursive" }}>your stats </h3>
            <div className="result-view">
              <table className='score'>
                <tr>
                  <td>Total</td>
                  <td>{data.totalQue}</td>
                </tr>
                <tr>
                  <td>Attempted</td>
                  <td>{data.correctQue + data.wrongQue}</td>
                </tr>
                <tr>
                  <td>skipped</td>
                  <td>{data.totalQue - (data.correctQue + data.wrongQue)}</td>
                </tr>
                <tr>
                  <td>Correct</td>
                  <td>{data.correctQue}</td>
                </tr>
                <tr>
                  <td>Wrong</td>
                  <td>{data.wrongQue}</td>
                </tr>
              </table>
              <div className='result-que'>
                <table>
                  <tr>
                    <th>s.no</th>
                    <th>Question</th>
                    <th>Marked</th>
                    <th>Correct</th>
                  </tr>
                  {quiz.questions.map((val,index) => {
                    return (
                      <tr key={val.id}>
                        <td>{val.id}</td>
                        <td id="table-que">{val.question}</td>
                        <td>{data.ans[index]}</td>
                        <td>{val.correctAnswer}</td>
                      </tr>
                    )
                  })}
                </table>
              </div>
            </div>
          </div>
          <div className='actions'>
            <button className="start-btn" onClick={routeChange}>Restart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result;