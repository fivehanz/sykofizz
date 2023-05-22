/* eslint-disable-next-line */
export interface AdminSidebarToggleProps {}

export function AdminSidebarToggle(props: AdminSidebarToggleProps) {
  return (
    <label
      htmlFor="my-drawer"
      className="lg:hidden btn btn-primary drawer-button"
    >
      Open drawer
    </label>
  );
}

export default AdminSidebarToggle;
