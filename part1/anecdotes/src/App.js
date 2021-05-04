import React, { useState } from "react";

const Head = ({ title }) => <h1>{title}</h1>;

const Anec = ({ anec, s }) => <p>{anec[s]}</p>;

const Votes = ({ s, v }) => <p>has {v[s]} votes</p>;

const Button = ({ name, handler }) => <button onClick={handler}>{name}</button>;

const Maxv = ({ anec, v }) => {
  const max = Math.max(...Object.values(v));
  const sel = Object.keys(v).find((key) => v[key] === max);

  if (max === 0) {
    return <p>No votes recorded</p>;
  }

  return (
    <>
      <Anec anec={anec} s={sel} />
      <Votes s={sel} v={v} />
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const rand = Math.floor(Math.random() * 6);

  const handleSelected = () => {
    setSelected(rand);
    <Anec anec={anecdotes} s={selected} />;
  };

  const handleVotes = (sel) => () => {
    const t = { ...votes };
    t[sel] += 1;
    console.log(t);
    setVotes(t);
    console.log(votes);
  };

  return (
    <div>
      <Head title="Anecdote of the day" />
      <Anec anec={anecdotes} s={selected} />
      <Votes s={selected} v={votes} />
      <Button name="vote" handler={handleVotes(selected)} />
      <Button name="next anecdote" handler={handleSelected} />
      <br></br>
      <Head title="Anecdote with most votes" />
      <Maxv anec={anecdotes} s={selected} v={votes} />
    </div>
  );
};

export default App;
