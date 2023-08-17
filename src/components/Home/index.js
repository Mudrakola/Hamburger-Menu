import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-lg"
        alt="home"
      />
    </div>
  </div>
)

export default Home
