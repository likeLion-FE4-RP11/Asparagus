import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import { FormInput } from '@/components';
import { LoginButton } from '@/components';
import * as S from './SignPage.styled';
import googleIcon from '@/assets/Google-logo.svg';
import faceBookIcon from '@/assets/facebook-logo.svg';

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
      <LoginButton type="submit" className="google">
        <S.Img src={googleIcon} alt="구글 로그인" />
        Continuew with Google
      </LoginButton>
      <LoginButton type="submit" className="facebook">
        <S.Img src={faceBookIcon} alt="페이스북 로그인 " />
        Continuew with facebook
      </LoginButton>
    </form>
  );
}
