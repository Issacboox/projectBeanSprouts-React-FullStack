import { NavLink } from 'react-router-dom';
import homeBtn from '@/assets/icon/house.png';
import StoreBtn from '@/assets/icon/store.png';
import CheckBtn from '@/assets/icon/search.png';
import HistoryBtn from '@/assets/icon/history.png';
import SettingBtn from '@/assets/icon/settings.png';
import ReportBtn from '@/assets/icon/error.png';
import LogutBtn from '@/assets/icon/check-out.png';

type Props = {};

export default function BottomSidebar({}: Props) {
  return (
    <div className="container">
      <div className="bottom-nav">
        <NavLink to="/" className="">
          <img src={homeBtn} alt="" width={30} />
        </NavLink>
        <NavLink to="/Store" className="">
          <img src={StoreBtn} alt="" width={30} />
        </NavLink>
        <NavLink to="/Check" className="">
          <img src={CheckBtn} alt="" width={30} />
        </NavLink>
        <NavLink to="/History" className="">
          <img src={HistoryBtn} alt="" width={30} />
        </NavLink>
        <NavLink to="/Setting" className="">
          <img src={SettingBtn} alt="" width={30} />
        </NavLink>
        <NavLink to="/Report" className="">
          <img src={ReportBtn} alt="" width={30} />
        </NavLink>
        <NavLink to="/Logout" className="">
          <img src={LogutBtn} alt="" width={30} />
        </NavLink>
      </div>
    </div>
  );
}
