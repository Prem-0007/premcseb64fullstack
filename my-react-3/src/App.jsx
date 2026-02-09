


function App() {
 

  let age =18;
  let name =`prem`;
  let isStudent = true;
  let hobbies = ['coding', 'reading', 'traveling'];
  let person = {
    name: 'prem',
    branch: `CSE`,
    year: 2
  };
  let value = null;
  let undef = undefined;
  let greet = () => {
    console.log("Hello, welcome to ReactJS 3 class!");
  }
let add = (a,b) => {
  return a+b;
}
let changefunc= (event) => { 
  console.log("Input value: ", event.target.value);
}

return (
    <>
     <h3>Welcome to ReactJS 3 class </h3>
      <p>My name is {name} and I am {age} years old.</p>
      <p>I am a student: {isStudent ? "Yes" : "No"}.</p>
      <p>My hobbies are: {hobbies.map((hobby, index) => (
        <ul key={index}>
          <li>{index}: {hobby}</li>
        </ul>
      ))}</p>
      <p>My details are:</p>
      <ul>
        <li>Name: {person.name}</li>
        <li>Branch: {person.branch}</li>
        <li>Year: {person.year}</li>
      </ul>
      <p>Value is: {value}</p>
      <p>Undefined value is: {undef}</p>
      <button onClick={greet}>Click Me</button>
      <p>Addition of 2 numbers: {add(2,5)}</p>
      <br></br>
      <input type="text" placeholder='Enter your name' onChange={changefunc} />
    </>
  )
}

export default App
