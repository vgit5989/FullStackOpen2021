import React, { useState } from "react";

const Head = ({ title }) => <h1>{title}</h1>;

const Button = ({ name, handler }) => <button onClick={handler}>{name}</button>;

const Statistic = ({ name, val }) => (
  <tr>
    <td>{name}</td> <td>{val}</td>
  </tr>
);

const Statistics = ({ g, n, b }) => {
  const all = g + n + b;
  const avg = (g * 1 + b * -1) / all;
  const pos = (g / all) * 100 + "%";

  if (all === 0) {
    return (
      <>
        <Head title="statitics" />
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <Head title="statitics" />
      <table>
        <tbody>
          <Statistic name="good" val={g} />
          <Statistic name="neutral" val={n} />
          <Statistic name="bad" val={b} />
          <Statistic name="all" val={all} />
          <Statistic name="averge" val={avg} />
          <Statistic name="positive" val={pos} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Head title="give feedback" />
      <Button name="good" handler={() => setGood(good + 1)} />
      <Button name="neutral" handler={() => setNeutral(neutral + 1)} />
      <Button name="bad" handler={() => setBad(bad + 1)} />
      <Statistics g={good} n={neutral} b={bad} />
    </div>
  );
};

export default App;
