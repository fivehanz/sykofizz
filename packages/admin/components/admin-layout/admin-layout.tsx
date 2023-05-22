/* eslint-disable-next-line */
export interface AdminLayoutProps {
  children: React.ReactNode;
}

import AdminSidebar from '../../components/admin-sidebar/admin-sidebar';
import { NavLinkProps } from '../../components/nav-link/nav-link';

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <AdminSidebar links={links}>{children}</AdminSidebar>;
}

// sidebar links
const links: NavLinkProps[] = [
  {
    href: '/admin',
    label: 'admin dashboard',
  },
  {
    href: '/admin/users',
    label: 'users',
  },
  {
    href: '/admin/posts',
    label: 'posts',
  },
  {
    href: '/admin/pages',
    label: 'pages',
  },
  {
    href: '/auth',
    label: 'login',
  },
  {
    href: '/auth/logout',
    label: 'logout',
  },
];
