import { useEffect, useRef } from 'react';
import { CheckBox } from '@/components';
import * as S from './SignUpPase.styled';
import { useSignUp, useAuthState } from '@/firebase/auth';
import {
  useCreateAuthUser,
  useCreateData,
  useWriteBatchData,
} from '@/firebase/firestore';
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
  const { createAuthUser } = useCreateAuthUser();
  const { createData } = useCreateData();
  const { writeBatchData } = useWriteBatchData();
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

  useEffect(() => {
    if (user) {
      (async () => {
        const { name, email, uid } = formStateRef.current;
        await createAuthUser(user);
      })();
    }

    //* 카테고리 분류 부분 (작업중)---------
    //   if (user) {
    //     async () => {
    //       const { name, uid } = formStateRef.current;
    //       await writeBatchData('test', 'key');
    //     };
    //   }
    //*------------------------------
  }, [createAuthUser, user]);

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
