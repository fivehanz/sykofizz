import { NavLinkProps } from '../../components/nav-link/nav-link';
import AdminSidebar from '../../components/admin-sidebar/admin-sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminSidebar links={links}>{children}</AdminSidebar>
    </>
  );
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
