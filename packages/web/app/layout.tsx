import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import './global.css';

export const metadata = {
  title: 'sykofizz',
  description: 'sykofizz description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body>
        <div className="relative min-h-screen">
          <Navbar />
          <main className="pb-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
