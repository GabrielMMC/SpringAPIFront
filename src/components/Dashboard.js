import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './NavBar'
import { mudarDados } from './actions/AppActions'
import { useDispatch, useSelector } from 'react-redux'
import ListCourse from './Course/ListCourse'
import Aside from './Private/SideBar/Aside'

const Dashboard = () => {
  const toggled = useSelector(store => store.AppReducer.toggled)
  const collapsed = useSelector(store => store.AppReducer.collapsed)
  const dispatch = useDispatch();
  const handleCollapsedChange = (checked) => {
    dispatch(mudarDados({ collapsed: checked }));

  };

  const handleToggleSidebar = (value) => {
    // setToggled(value);
    dispatch(mudarDados({ toggled: !toggled }));
  };

  React.useEffect(() => {
    const event = (e) => {
      if (window.innerWidth <= 768) {
        dispatch(mudarDados({ toggled: false, collapsed: false }));

      }
      else {

        dispatch(mudarDados({ toggled: true, collapsed: true }));

      }
    };
    window.addEventListener('resize', event)
    if (window.innerWidth <= 768) {
      dispatch(mudarDados({ toggled: false, collapsed: false }));
    }
    else {
      dispatch(mudarDados({ toggled: true, collapsed: true }));
    }
    // GetRole();

    return () => {
      window.removeEventListener('resize', event);

      // Anything in here is fired on component unmount.
    }
  }, [])
  const location = useLocation()
  const marginLeft = (!toggled || window.innerWidth <= 768) ? 0 : (!collapsed ? 270 : 80);
  console.log('location', toggled);
  return (
    <>
      <Navbar />
      <div className={`app ${toggled && 'toggled'}`}>
        <Aside collapsed={collapsed} toggled={toggled} handleToggleSidebar={handleToggleSidebar} handleCollapsedChange={handleCollapsedChange} />
        <div className="content-page">
          <div className="container-fluid">
            {location.pathname === '/dashboard' ? <ListCourse /> : <Outlet />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard