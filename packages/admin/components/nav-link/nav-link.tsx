import Link from 'next/link';

/* eslint-disable-next-line */
export interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink(props: NavLinkProps) {
  const { href, label } = props;
  return <Link href={href}>{label}</Link>;
}

export default NavLink;
