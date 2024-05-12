
import './App.css';


const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person name="john" lastName="sina" age={9} />
      <Person name="thrd" lastName="sindsfsa" age={33} />
    </div>
  );
}

export default App;
