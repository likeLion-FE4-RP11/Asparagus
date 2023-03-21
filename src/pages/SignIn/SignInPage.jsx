import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import { FormInput } from '@/components';
import { LoginButton } from '@/components';

const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  useDocumentTitle('SignInPage');
  return (
    <form>
      <h1>Let’s get you started</h1>
      <FormInput
        name="email"
        type="emaail"
        label="이메일"
        placeholder="Enter your email"
      />
      <FormInput
        name="password"
        type="password"
        label="비밀번호"
        placeholder="Enter your password"
      />

      <LoginButton type="submit">로그인버튼</LoginButton>
    </form>
  );
}
