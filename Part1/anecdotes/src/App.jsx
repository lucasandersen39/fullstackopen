import { useState } from 'react'
import './App.css'
const Votes = ({ votes }) => {
  return (
    <p>has {votes} votes</p>
  )
}


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const handleClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }

  const handleVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] = copyVotes[selected] + 1
    setVotes(copyVotes)
    setMostVotes(copyVotes.indexOf(Math.max(...copyVotes)))
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>
        {anecdotes[selected]}
      </p>
      <Votes votes={votes[selected]} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <br></br>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotes]}</p>
      <Votes votes={votes[mostVotes]} />
    </div>
  )
}

export default App
