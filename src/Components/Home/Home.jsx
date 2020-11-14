import Header from '../Header/Header.jsx'
import Sidebar from '../SideBar/Sidebar.jsx'
import Footer from '../Footer/Footer.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
        <div class="content-wrapper">
          <h1>Какая то инфа</h1>
        </div>
      <Footer/>
    </>
  )
}

export default Home