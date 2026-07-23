import "./Header.css";
// import Netflixlogo from "../../assets/vite.svg";
import Netflixlogo from "../../assets/NetflixLogo.svg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={Netflixlogo} alt="Netflix" width="100" />
            </li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>ByList</li>
            <li>Browse By Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
