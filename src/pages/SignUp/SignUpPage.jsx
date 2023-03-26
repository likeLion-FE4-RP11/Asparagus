import { useRef } from 'react';
import { CheckBox } from '@/components';
import * as S from './SignUpPase.styled';
import { useSignUp, useAuthState } from '@/firebase/auth';
import MainImage from '../../assets/SignUp_main.jpg';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  CategoryTitle,
  SignUpFormInput,
  ImageContainer,
} from '@/components/index';
import { DeprecatedLayoutGroupContext } from 'framer-motion';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default function SignUpPage() {
  // 브라우저탭 이름
  useDocumentTitle('회원가입 → Likelion 4th');

  const { signUp } = useSignUp();
  const { isLoading, error, user } = useAuthState();
  const formStateRef = useRef(initialFormState);

  //

  const SignUpPageReset = () => {
    console.log('reset');
  };

  const SignUpSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = formStateRef.current;

    if (!name || name.trim().length < 2) {
      alert('2글자 이상 입력해주세요🥹');
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      alert('입력한 비밀번호가 다릅니다🥹');
      return;
    }

    await signUp(email, password, name);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  const test = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <S.SignUpContainer>
        <S.SignUpContent>
          <form onSubmit={SignUpSubmit} onReset={SignUpPageReset}>
            <S.SingUpTitle>Create an acount</S.SingUpTitle>
            <SignUpFormInput
              type="text"
              label="이름"
              name="name"
              onChange={handleChangeInput}
            />
            <SignUpFormInput
              type="email"
              label="이메일"
              name="email"
              onChange={handleChangeInput}
            />
            <SignUpFormInput
              type="password"
              label="비밀번호"
              name="password"
              onChange={handleChangeInput}
            />
            <SignUpFormInput
              type="password"
              label="비밀번호 확인"
              name="passwordConfirm"
              onChange={handleChangeInput}
            />
            <CheckBox ref={formStateRef} context="Sign me up!">
              I agree to the Terms of Service and Privacy Notice
            </CheckBox>
          </form>
        </S.SignUpContent>
        <S.HalfImageContainer>
          <S.ImageLogo>I`s gallery</S.ImageLogo>
          <S.SignUpMainImage src={MainImage} alt="회원가입 메인 이미지" />
        </S.HalfImageContainer>
      </S.SignUpContainer>
    </>
  );
}
