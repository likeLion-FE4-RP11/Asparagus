import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link, useNavigate } from 'react-router-dom';

import { FormInput, LoginButton } from '@/components';
import { getFontSize } from '@/theme/utils';
import { useEffect, useRef } from 'react';
import googleIcon from '@/assets/Google-logo.svg';
import faceBookIcon from '@/assets/facebook-logo.svg';
import loginImage from '@/assets/BackgroundImage.svg';
import * as S from './SignPage.styled';
import { useAuthState, useSignIn, useSignOut } from '@/firebase/auth';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  FacebookAuthProvider,
} from 'firebase/auth';
import { AuthUserContext } from '@/contexts/AuthUser';
import { useContext } from 'react';
import { getCategoryIds } from '@/utils/utils';

const provider = new GoogleAuthProvider();
const FaceBookprovider = new FacebookAuthProvider();
const auth = getAuth();
const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  useDocumentTitle('SignInPage');
  const navigate = useNavigate();
  const formState = useRef(initialFormState);

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { signOut } = useSignOut();
  const { isLoading, error, user } = useAuthState();
  const { authUser, updateAuthUser } = useContext(AuthUserContext);

  console.log('context에서 받아온 정보: ', authUser, updateAuthUser);

  useEffect(() => {
    if (user) {
      (async () => {
        const category_uids = await getCategoryIds(user.uid);
        await updateAuthUser({
          name: user.displayName,
          email: user.email,
          isLogin: true,
          categories: category_uids,
        });
        navigate('/');
      })();
    }
  }, [user]);

  console.log(authUser);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formState.current;
    await signIn(email, password);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    formState.current[name] = value;
  };

  const handleSignGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handlSignFacebook = (e) => {
    e.preventDefault();

    signInWithPopup(auth, FaceBookprovider)
      .then((result) => {
        // The signed-in user info.
        const FBuser = result.FBuser;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const FBcredential = FacebookAuthProvider.credentialFromResult(result);
        const FBaccessToken = FBcredential.FBaccessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const FBerrorMessage = error.message;
        // const email = error.customData.email;
        const FBcredential = FacebookAuthProvider.credentialFromError(error);
        console.log(error);
        // ...
      });
  };

  if (isLoading) {
    return <figure role="alert">페이지 로딩중</figure>;
  }

  if (error) {
    return <figure role="alert">오류!</figure>;
  }

  return (
    <S.FormContainer>
      <S.LeftContainer>
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

          <LoginButton disabled={isLoadingSignIn} type="submit">
            {!isLoadingSignIn ? 'log in' : 'loading...'}
          </LoginButton>
          <LoginButton
            type="submit"
            onClick={handleSignGoogle}
            className="google"
          >
            <S.Img src={googleIcon} alt="구글 로그인" />
            Continuew with Google
          </LoginButton>
          <LoginButton
            type="submit"
            className="facebook"
            onClick={handlSignFacebook}
          >
            <S.Img src={faceBookIcon} alt="페이스북 로그인 " />
            Continuew with facebook
          </LoginButton>
        </form>
        <S.Info>
          Already have an account ? <Link to="/signup">Create Account </Link>
        </S.Info>
      </S.LeftContainer>
      <S.ImgContainer>
        <Link to="/">
          <S.Logo>I`s gallery</S.Logo>
        </Link>
        <img src={loginImage} alt="로그인 메인 이미지" />
      </S.ImgContainer>
    </S.FormContainer>
  );
}
