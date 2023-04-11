import googleIcon from '@/assets/Google-logo.svg';
import faceBookIcon from '@/assets/facebook-logo.svg';
import loginImage from '@/assets/BackgroundImage.svg';
import * as S from './SignInPage.styled';
import { getFontSize } from '@/theme/utils';
import { getCategoryIds } from '@/utils/utils';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useContext } from 'react';
import { FormInput, LoginButton } from '@/components';
import { useAuthState, useSignIn } from '@/firebase/auth';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  FacebookAuthProvider,
} from 'firebase/auth';
import { AuthUserContext } from '@/contexts/AuthUser';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('아이디 혹은 비밀번호를 확인해주세요');
const provider = new GoogleAuthProvider();
const FaceBookprovider = new FacebookAuthProvider();
const auth = getAuth();
const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  useDocumentTitle('SignInPage');
  const formState = useRef(initialFormState);
  const navigate = useNavigate();

  const {
    isLoading: isLoadingSignIn,
    error: errorSignIn,
    signIn,
    user: signInUser,
  } = useSignIn();
  const { isLoading, error, user } = useAuthState();
  const { updateAuthUser } = useContext(AuthUserContext);

  useEffect(() => {
    if (signInUser) {
      (async () => {
        console.log('user', signInUser);
        const category_uids = await getCategoryIds(user.uid);
        await updateAuthUser({
          name: user.displayName,
          uid: user.uid,
          email: user.email,
          isLogin: true,
          categories: category_uids,
        });
        toast((t) => (
          <span>
            <b>✅ 로그인 성공</b>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                navigate('/');
              }}
            >
              Go to Home
            </button>
          </span>
        ));
      })();
    }
    if (errorSignIn && !signInUser) {
      alert('이메일이나 비밀번호를 확인해주세요');
    }
  }, [signInUser, errorSignIn]);

  const isValidEmail = (emailValue) => {
    const regExp =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regExp.test(emailValue);
  };

  const isValidPassword = (passwordValue) => {
    return passwordValue
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = formState.current;

    if (!isValidEmail(email)) {
      alert('입력한 이메일이 올바른 유형이 아닙니다');
      return;
    }

    if (!isValidPassword(password)) {
      alert('입력한 패스워드가 유효하지 않습니다');
      return;
    }

    await signIn(email, password);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formState.current[name] = value;
  };

  const handleSignGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
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
        const FBuser = result.FBuser;
        const FBcredential = FacebookAuthProvider.credentialFromResult(result);
        const FBaccessToken = FBcredential.FBaccessToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const FBerrorMessage = error.message;
        const FBcredential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  if (isLoading) {
    return <figure role="alert">페이지 로딩중</figure>;
  }

  return (
    <S.FormContainer>
      <Toaster />
      <S.ImgContainer>
        <S.Logo>
          <Link to="/">I`s gallery</Link>
        </S.Logo>

        <img src={loginImage} alt="로그인 메인 이미지" />
      </S.ImgContainer>
      <S.LeftContainer>
        <S.Header fontSize={getFontSize('2xl')}>Let’s get you started</S.Header>

        <S.FormStyle onSubmit={handleSignIn}>
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
            {!isLoadingSignIn ? 'log In' : ' Loading...'}
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
        </S.FormStyle>

        <S.Info>
          Already have an account ? <Link to="/signup">Create Account </Link>
        </S.Info>
      </S.LeftContainer>
    </S.FormContainer>
  );
}
