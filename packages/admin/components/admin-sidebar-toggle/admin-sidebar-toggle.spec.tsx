import { render } from '@testing-library/react';

import AdminSidebarToggle from './admin-sidebar-toggle';

describe('AdminSidebarToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminSidebarToggle />);
    expect(baseElement).toBeTruthy();
  });
});
