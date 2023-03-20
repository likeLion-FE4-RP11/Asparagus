import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function HomePage() {
  useDocumentTitle('홈페이지');
  return <div>홈페이지</div>;
}
