import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { CategoryTitle, Category } from '@/components'
import styled from 'styled-components/macro';

export default function HomePage() {
  useDocumentTitle('HomePage');
  return <div>
    <CategoryTitle title="C A T E G O R Y" />
    <Category />
  </div>;
}
