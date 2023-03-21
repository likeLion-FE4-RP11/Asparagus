import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { CategoryTitle, FormInput } from '@/components/index';
import styled from 'styled-components/macro';

export default function SignUpPage() {
  // 브라우저탭 이름
  useDocumentTitle('SignUpPage');

  return (
    <div>
      <SingUpTitle>Create an acount</SingUpTitle>
      <form>
        <FormInput label="Name" name="이름" />
        <FormInput label="Email" name="이메일" />
        <FormInput label="Password" name="비밀번호" />
        <FormInput label="Password Check" name="비밀번호 확인" />
      </form>
    </div>
  );
}

const SingUpTitle = styled.h2`
  font-size: 38px;
  font-weight: 700;
`;
