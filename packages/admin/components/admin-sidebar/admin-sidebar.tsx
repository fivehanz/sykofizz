import AdminSidebarToggle from '../admin-sidebar-toggle/admin-sidebar-toggle';
import MainContainer from '../main-container/main-container';
import { NavLinkProps, NavLink } from '../nav-link/nav-link';

/* eslint-disable-next-line */
export interface AdminSidebarProps {
  children: React.ReactNode;
  links: NavLinkProps[];
}

export function AdminSidebar(props: AdminSidebarProps) {
  const { children, links } = props;

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col justify-start">
        <AdminSidebarToggle />
        {/* main content */}
        <MainContainer>{children}</MainContainer>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" />
        <ul className="menu w-64 bg-base-200 text-base-content">
          <li className="menu-title p-4">Dashboard</li>
          {links?.map((link, i) => (
            <li key={i} className="hover-bordered">
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminSidebar;
