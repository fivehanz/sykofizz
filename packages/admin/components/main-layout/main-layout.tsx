import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

/* eslint-disable-next-line */
export interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <div className="relative min-h-screen" data-theme="night">
      <Navbar />
      <main className="pb-10">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
