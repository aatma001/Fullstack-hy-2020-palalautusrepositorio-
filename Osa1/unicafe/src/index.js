import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({values}) => {
  const total = values.reduce((prev,next) => prev + next,0);
  const score = values[0] + (values[2] * -1)
  
  
  
  if (total !== 0) {
  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={values[0]} />
          <StatisticLine text="neutral" value={values[1]} />
          <StatisticLine text="bad" value={values[2]} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={score / total} />
          <StatisticLine text="Positive" value={values[0] / total} />
        </tbody>
      </table>  
    </div>
  )
  }
  else{
    
    return <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
  }
}

const StatisticLine = (props) => {

  return(
    <tr>
      <td>
      {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const values = [good, neutral, bad]

  const handleBadClick = () => {
    
    setBad(bad + 1)
  }

  const handleGoodClick = () => {
    
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <div>
        <h1>
          give feedback
        </h1>
        <Button onClick={handleGoodClick} text='Good' />
        <Button onClick={handleNeutralClick} text='Neutral' />
        <Button onClick={handleBadClick} text='Bad' />
        <Statistics values={values} />
       </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)