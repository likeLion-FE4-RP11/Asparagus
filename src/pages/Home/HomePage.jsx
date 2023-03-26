import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { MainSwiper, TopButton, CategoryTitle, Category } from '@/components';

export default function HomePage() {
  useDocumentTitle('HomePage');

  return (
    <>
      <MainSwiper />
      <CategoryTitle title={'C A T E G O R Y'} />
      <Category />
      <TopButton />
    </>
  );
}
