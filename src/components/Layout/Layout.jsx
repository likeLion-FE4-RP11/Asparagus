import { node, string } from 'prop-types';
import { Header, Footer, Container } from '@/components';

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

/* Props -------------------------------------------------------------------- */

BaseLayout.defaultProps = {
  className: '',
};

BaseLayout.propTypes = {
  className: string,
  children: node,
};
