import { node, string } from 'prop-types';
import { Header, Footer, Container } from '@/components';
import { Outlet } from 'react-router-dom';

/* Component ---------------------------------------------------------------- */

export function BaseLayout({ children, ...restProps }) {
  return (
    <div {...restProps}>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}

export function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
/* Props -------------------------------------------------------------------- */

BaseLayout.defaultProps = {
  className: '',
};

BaseLayout.propTypes = {
  className: string,
  children: node,
};
