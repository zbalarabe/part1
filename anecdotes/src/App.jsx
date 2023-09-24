import { useState } from 'react'

// const Highest = (props) => {
  
//   // let voteNum = props.vote[props.selected]
//   // let value = Object.values(props.vote);
//   // let max = Math.max(...value);

//   if (props.voteNum === props.max) {
//     return (
//       <div>
//       <p>{props.anecdotes[props.selected]}</p>
//       <p>has {props.voteNum} votes</p>
//       </div>
//     )
//   }
//   // else return (
//   //   <div>
//   //     This is not the anecdote with the highest votes!
//   //   </div>
//   // )
// }

const App = () => {
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
    const [vote, setVote] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })
    // const [highestVote, setHighestVote] = useState(0)

    const handleClick = () => {
      setSelected(Math.floor(Math.random() * 8))
    }
    
    const handleClickVote = () => {
      const copy = {...vote}
      copy[selected] += 1;
      setVote(copy)

      console.log('This is vote', vote)
    }
    console.log('This is selected', selected)

    let voteNum = vote[selected]

    let value = Object.values(vote);
    let currentMax = Math.max(...value);
    
    let highestKey = 0;
    let highest = 0;
    let highestVote;
    let highestVoteText;

    for (let key of Object.keys(vote)) {
      if (vote[key] > highest) {
        highestKey = key;
        highest = vote[key];
        highestVote = anecdotes[key]
        highestVoteText = 'has ' + highest + ' votes'
        
        console.log('highest', highest, 'highestKey', highestKey)
      }
    }



    
    
    // if (voteNum === currentMax) {
    //   highestVote = anecdotes[selected]
    //   console.log(highestVote)
    // } 
    // 
    
    return (
      <div>
        <h3>Anecdote of the day</h3>

        <p>{anecdotes[selected]}</p>
        <p>has {voteNum} votes</p>
        <button onClick={handleClickVote}>vote</button>
        <button onClick={handleClick}>random anecdote</button>

        <h3>Anecdote with the most votes</h3>
        <p>{highestVote}</p>
        <p>{highestVoteText}</p>
        
        {/* <Highest vote={vote} selected={selected} anecdotes={anecdotes} voteNum={voteNum} max={highestVote} /> */}
        
      </div>
    )
  }

export default App
