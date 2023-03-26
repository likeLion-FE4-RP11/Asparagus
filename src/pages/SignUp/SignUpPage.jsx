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
import { writeBatchCategoryList, getCategoryIds } from '@/utils/utils';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default function SignUpPage() {
  // 브라우저탭 이름
  useDocumentTitle('회원가입 → Likelion 4th');

  const { signUp, user: signUpUser } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();
  const { createData } = useCreateData();
  const { writeBatchData } = useWriteBatchData();
  const formStateRef = useRef(initialFormState);

  const categoryList = [];
  const categoryNameList = ['Travel', 'Food', 'Hobby', 'Daily'];
  const categoryDescriptionList = [
    '이 카테고리는 Travel',
    '이 카테고리는 Food',
    '이 카테고리는 Hobby',
    '이 카테고리는 Daily',
  ];

  const SignUpPageReset = () => {
    console.log('reset');
  };

  const SignUpSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = formStateRef.current;

    await signUp(email, password, name);
  };

  useEffect(() => {
    if (signUpUser) {
      (async () => {
        const { name, email, uid } = formStateRef.current;
        await createAuthUser(signUpUser);
        await categoryNameList.map((categoryName, index) => {
          const categoryObject = {
            description: categoryDescriptionList[index],
            isAllow: true,
            likeCount: 0,
            name: categoryName,
            uid: signUpUser.uid,
          };
          categoryList.push(categoryObject);
        });
        console.log(categoryList);
        await writeBatchCategoryList(categoryList);
        await getCategoryIds(signUpUser.uid);
      })();
    }
  }, [createAuthUser, signUpUser]);

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
