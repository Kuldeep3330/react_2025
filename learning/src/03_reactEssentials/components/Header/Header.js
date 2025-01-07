import stateImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescripion = ['Kuldeep', 'shibhu', 'Kullu']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const name = reactDescripion[getRandomInt(2)]
  return (
    <header>
      <img src={stateImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts, {name} needs for almost any app he will be
        going to build!
      </p>
    </header>
  )
}

export default Header;