import MainImage from '@/assets/SignUp_main.jpg';
import * as S from './SignUpPage.styled';
import { getFontSize } from '@/theme/utils';
import { writeBatchCategoryList } from '@/utils/utils';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { CheckBox, SignUpFormInput } from '@/components';
import { useSignUp } from '@/firebase/auth';
import { useCreateAuthUser } from '@/firebase/firestore';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default function SignUpPage() {
  useDocumentTitle('SignUpPage');
  const navigate = useNavigate();

  const { signUp, user: signUpUser } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();
  const formStateRef = useRef(initialFormState);

  const categoryList = [];
  const categoryNameList = ['Travel', 'Food', 'Hobby', 'Daily'];
  const categoryDescriptionList = [
    '이 카테고리는 Travel',
    '이 카테고리는 Food',
    '이 카테고리는 Hobby',
    '이 카테고리는 Daily',
  ];

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
    if (signUpUser) {
      (async () => {
        // const { name, email, uid } = formStateRef.current;
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
        await writeBatchCategoryList(categoryList);
        // await navigate('/signin');
      })();
      navigate('/signin');
    }
  }, [createAuthUser, signUpUser]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  return (
    <S.SignUpContainer>
      <S.HalfImageContainer>
        <S.ImageLogo>
          <Link to="/">I`s gallery</Link>
        </S.ImageLogo>
        <S.SignUpMainImage src={MainImage} alt="회원가입 메인 이미지" />
      </S.HalfImageContainer>
      <S.SignUpContent>
        <S.Header fontSize={getFontSize('2xl')}>Create an account</S.Header>
        <form onSubmit={SignUpSubmit}>
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
    </S.SignUpContainer>
  );
}
