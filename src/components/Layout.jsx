import Header from './Header';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

function Layout({ children }) {
  return (
    <div>
      <ScrollProgress />

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
