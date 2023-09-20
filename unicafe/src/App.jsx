import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  return (
   <table>
    <StatisticLine text='good' value={props.good} />
    <StatisticLine text='neutral' value={props.neutral} />
    <StatisticLine text='bad' value={props.bad} />
    <StatisticLine text='all' value={props.total} />
    <StatisticLine text='average' value={props.average} />
    <StatisticLine text='positive' value={props.percent} />
    </table>
  )
}


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [ave, setAve] = useState(0)
  const [count, setCount] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    const updatedGood = good + 1
    setTotal(updatedGood + neutral + bad)
    setAve(ave + 1)
    setCount(count + 1)
    console.log(good, ave, total)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1
    setTotal(good + updatedNeutral + bad)
    setAve(ave + 0)
    setCount(count + 1)
    console.log(neutral, ave, total)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    const updatedBad = bad + 1
    setTotal(good + neutral + updatedBad)
    setAve(ave + (-1))
    setCount(count + 1)
    console.log(bad, ave, total)
  }
  
  let average = ave/count;
  if (isNaN(average)) {
    average = 0
  }

  let percent = (good/total) * 100;
  if (isNaN(percent)) {
    percent = 0
  }
  
  if (total === 0) {
    return (
      <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <h3>statistics</h3>
      <p>No feedback given!</p>
      </div>
    )
  } else
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      
      <h3>statistics</h3>

        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average.toFixed(1)}
        percent={percent.toFixed(1)}
        />
    </div>
  )
}

export default App
