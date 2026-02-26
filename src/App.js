import logo from './logo.svg';
import './App.css';

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

let isLogged = true

function LoginForm() {
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
      <LoginButton />
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
            <LoginForm />
          )
        }
      </header>
    </div>
  );
}

function LoginButton() {
  return (
    <button>Enter</button>
  );
}

export default App;
