import Card from "../components/Card/Card";
import { quiz } from "../Quiz";

const Question = () => {
  return (
    <Card items={quiz}/>
  )
}

export default Question;