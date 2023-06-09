import css from "./Layout.module.css";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {

  const { pathname } = useLocation()


  return (
    <div className={css.container}>


      {/* making the dashboard as the default route */}

      {pathname === "/" && <Navigate to="/auth" />}


      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
