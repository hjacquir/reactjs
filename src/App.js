import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const user = {
  name: "Foo",
  imageUrl : "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
}

const products = [
  {
    id:1,
    title:'Chou',
  },
  {
    id:2,
    title:'Ail',
  },
  {
    id:3,
    title: 'Pomme',
  }
]

let isLogged = false

function LoginForm({count, onClick}) {
  return (
    <>
    <label>
      Login :
      <input name="login"/>
    </label>
    <label>
      Password :
      <input />
    </label>
      <LoginButton count={count} onClick={onClick} />
    </>
)
}

function GetProducts() {
  const listProduct = products.map(product =>
    <li key={product.id}>{product.title}</li>
  );

  return (
    <ul>{listProduct}</ul>
  );
}

function AdminPanel() {
  return (
    <>
      Welcome !
      <Profile/>
      <GetProducts/>
    </>
  )
}

function Profile() {
  return (
    <>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          padding:5,
        }}
      />
      <div><small>{user.name}</small></div>
      </>
  )
}

function App() {
  function handleClick() {
    setCount(count + 1);
  }

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          isLogged ? (
            <AdminPanel />
          ) : (
            <LoginForm count={count} onClick={handleClick} />
          )
        }
      </header>
    </div>
  );
}

function LoginButton({count, onClick}) {
  return (
    <button onClick={onClick}>Cliquez {count} fois</button>
  );
}

export default App;
