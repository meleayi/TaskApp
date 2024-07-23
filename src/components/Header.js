
import "./Header.css"
import Logo from "../asstets/logo.png"

const Header = () => {
  return (
    <section className="header">
        <div className="logo">
            <img src={Logo} alt="Logo Image" />
        </div>
        <div>
          <h1>TODO Task Application</h1>
        </div>
        <div className="backgrounds">background</div>
    </section>
  )
}

export default Header


