import React from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import home from '@/assets/icon/house.png';
import store from '@/assets/icon/store.png';
import search from '@/assets/icon/search.png';
import setting from '@/assets/icon/settings.png';
import history from '@/assets/icon/history.png';
import error from '@/assets/icon/error.png';
import checkOut from '@/assets/icon/check-out.png';
import logo from '@/assets/icon/Logo.png';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="myLogo">
        <img src={logo} alt="" />
      </div>

      <nav>
        <ul>
          <li>
          <NavLink to="/">
              <img src={home} alt="" width={25} className="mr-2" /> หน้าแรก
            </NavLink>
          </li>
          <li>
            <NavLink to="/Store" >
              <img src={store} alt="" width={25} className="mr-2" />
              รายการสินค้า
            </NavLink>
          </li>
          <li>
            <NavLink to="/Check" >
              <img src={search} alt="" width={25} className="mr-2" />
              ตรวจสอบคำสั่งซื้อ
            </NavLink>
          </li>
          <li>
            <NavLink to="/History" >
              <img src={history} alt="" width={25} className="mr-2" />
              ประวัติคำสังซื้อ
            </NavLink>
          </li>
          <li>
            <NavLink to="/Setting" >
              <img src={setting} alt="" width={25} className="mr-2" />
              ตั้งค่า
            </NavLink>
          </li>
          <li>
            <NavLink to="/Report" >
              <img src={error} alt="" width={25} className="mr-2" />
              แจ้งปัญหา/เสนอแนะ
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/Logut" >
              <img src={checkOut} alt="" width={25} className="mr-2" />
              ออกจากระบบ
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
