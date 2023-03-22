import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import { FormInput, LoginButton } from '@/components';
import { getFontSize } from '@/theme/utils';
import { useRef } from 'react';
import googleIcon from '@/assets/Google-logo.svg';
import faceBookIcon from '@/assets/facebook-logo.svg';
import * as S from './SignPage.styled';
import { useAuthState, useSignIn, useSignOut } from '@/firebase/auth';

const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  useDocumentTitle('SignInPage');
  const formState = useRef(initialFormState);

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  // const { signOut } = useSignOut();
  const { isLoading, error, user } = useAuthState();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formState.current;
    console.log({ email, password });
    await signIn(email, password);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    formState.current[name] = value;
  };

  return (
    <S.FormContainer>
      <S.Header fontSize={getFontSize('2xl')}>Let’s get you started</S.Header>
      <form onSubmit={handleSignIn}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          onChange={handleChangeInput}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          onChange={handleChangeInput}
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
