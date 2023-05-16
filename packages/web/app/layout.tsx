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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
