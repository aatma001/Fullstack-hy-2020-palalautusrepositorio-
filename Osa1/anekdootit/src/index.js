import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const ShowAnecdotes= ({votes, anecdote}) => {

  return(
  <div>
      <p>{anecdote} <br/> has {votes} votes</p>
  </div>
  )

}

  const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))
  const [topAnecdote, setTopAnecdote] = useState(0)


  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () =>  {

    const copy = [...votes]
    copy[selected] += 1

    setVotes(copy)
    
    if (copy[selected] > copy[topAnecdote]) {
      setTopAnecdote(selected)
    }
  }

  return (
    <div>
        <h1>Anecdote of the day</h1>
        <Button onClick={handleClick} text='nextAnecdote' />
        <Button onClick={handleVote} text='vote' />
        <ShowAnecdotes anecdote={anecdotes[selected]} votes={votes[selected]}/>
        <h1>Anecdote with most votes</h1>
        <ShowAnecdotes anecdote={anecdotes[topAnecdote]} votes={votes[topAnecdote]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
