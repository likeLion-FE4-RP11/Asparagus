import { useRef } from 'react';
import { CheckBox } from '@/components';
import * as S from './SignUpPase.styled';
import { useSignUp, useAuthState } from '@/firebase/auth';
import { useCreateAuthUser } from '@/firebase/firestore';
import MainImage from '../../assets/SignUp_main.jpg';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  CategoryTitle,
  SignUpFormInput,
  ImageContainer,
} from '@/components/index';

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
  const { createAuthUser } = useCreateAuthUser;
  const formStateRef = useRef(initialFormState);

  //

  const SignUpPageReset = () => {
    console.log('reset');
  };

  const SignUpSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = formStateRef.current;

    await signUp(email, password, name);
    await createAuthUser(user); //! FireStore를 user정보를 올리는 코드를 추가했습니다.
  };
  console.log(user); //! 콘솔에 null이 뜨다가 몇초 뒤에 전에 입력했던 회원가입 정보가 나타납니다.

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
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
              label="이메ㄴ일"
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
