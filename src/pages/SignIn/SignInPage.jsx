import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import { FormInput } from '@/components';

const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  useDocumentTitle('SignInPage');
  return (
    <div>
      <h2>로그인 페이지</h2>
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
    </div>
  );
}
