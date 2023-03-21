import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { CategoryTitle, Category } from '@/components'
import styled from 'styled-components/macro';

export default function HomePage() {
  useDocumentTitle('HomPage');
  return <div>
    <CategoryTitle />
    <Category />
  </div>;
}
