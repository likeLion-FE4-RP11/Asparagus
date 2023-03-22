import { CheckBox } from '@/components';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function SignUpPage() {
  useDocumentTitle('SignUpPage');
  return (
    <>
      <div>회원가입</div>
      <CheckBox />
    </>
  );
}
