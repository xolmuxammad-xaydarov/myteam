import './Home.scss';
import logo from '../../img/SHOPPE.png';
import loop from '../../img/loop.svg';
import trolley from '../../img/trolley.svg';
import person from '../../img/person.svg';

function Home(){
  return(
    <div className='container'>
      <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className='df'>
      <ul className='list'>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Our Story</a></li>
      </ul>
      <div className="stick">
      </div>
      <ul className='list'>
        <li><img src={loop} alt="" /> </li>
        <li><img src={trolley} alt="" /></li>
        <li><img src={person} alt="" /></li>
      </ul>
      </div>
      </div>
      <div className="hr">
      </div>
    </div>
  );
}

export default Home;