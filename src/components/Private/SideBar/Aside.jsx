import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarFooter, SidebarContent, SubMenu } from 'react-pro-sidebar';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import sidebarBg from './assets/bg1.jpg';
import { NavLink } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md';
// import { useSelector, useDispatch } from 'react-redux';


const Aside = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  // let user = useSelector(store => store.AppReducer.user);


  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      style={{ height: 'calc(100vh - 64px)', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
      onToggle={handleToggleSidebar}
    >
      <SidebarContent style={{ backgroundColor: '#fff', color: '#212529' }}>
        <Menu iconShape="circle">
          <MenuItem icon={<FaShoppingCart size='20' />}>
            <NavLink exact to="/dashboard/course/list" style={{ color: '#212529' }} activeStyle={{ fontWeight: "bold" }}>
              Cursos
            </NavLink>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center', background: '#fff' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="http://www.verdaz.com.br"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <MdCopyright />
            <span> {'CopyRight 2022 MeetES'}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar >
  );
};

export default Aside;
