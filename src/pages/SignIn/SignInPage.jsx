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
        label="Email"
        placeholder="Enter your email"
      />
      <FormInput
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
      />

      <LoginButton type="submit">Log In</LoginButton>
    </form>
  );
}
