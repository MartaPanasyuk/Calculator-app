import "./App.css";

const createNumber = () => {
  let numbers = [];
  for (let i = 1; i < 10; i++) {
    numbers.push(<button key={i}>{i}</button>);
  }
  return numbers;
};

function App() {
  return (
    <div className="App">
      <div className="app-wraper">
        <div className="display-wrapper">
          <span>(0)</span>0
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="digits">
          {createNumber()}
          <button>.</button>
          <button>0</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
