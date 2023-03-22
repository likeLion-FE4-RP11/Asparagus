import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import { FormInput } from '@/components';
import { LoginButton } from '@/components';
import * as S from './SignPage.styled';
import googleIcon from '@/assets/Google-logo.svg';
import faceBookIcon from '@/assets/facebook-logo.svg';
import { getFontSize } from '@/theme/utils';

const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  useDocumentTitle('SignInPage');
  return (
    <S.FormContainer>
      <form>
        <S.Header fontSize={getFontSize('2xl')}>Let’s get you started</S.Header>
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
      <S.Info>
        Already have an account ? <Link to="/signup">Create Account </Link>
      </S.Info>
    </S.FormContainer>
  );
}
