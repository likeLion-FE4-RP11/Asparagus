import MainImage from '@/assets/SignUp_main.jpg';
import * as S from './SignUpPage.styled';
import { getFontSize } from '@/theme/utils';
import { writeBatchCategoryList } from '@/utils/utils';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback } from 'react';
import { CheckBox, LoadingSpinner, SignUpFormInput } from '@/components';
import { useSignUp } from '@/firebase/auth';
import { useCreateAuthUser } from '@/firebase/firestore';
import { toast, Toaster } from 'react-hot-toast';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default function SignUpPage() {
  useDocumentTitle('SignUpPage');
  const [emailState, setEmail] = useState('');
  const [passwordState, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('');

  const navigate = useNavigate();
  const { signUp, user: signUpUser, isLoading } = useSignUp();
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

  // 유효성 검사 ------
  // const ValidateName = (name) => {
  //   return name.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/);
  // };

  const ValidateEmail = (emailState) => {
    return emailState
      .toLowerCase()
      .match(
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      );
  };

  const ValidatePwd = (passwordState) => {
    return passwordState
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  };

  const isEamilValid = ValidateEmail(emailState);
  const isPwdValid = ValidatePwd(passwordState);
  const isConfirmPwd = passwordState === confirmPwd;

  // -------------

  const SignUpSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = formStateRef.current;
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

  const onChangeEmail = useCallback((e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (!ValidateEmail(currentEmail)) {
      setEmailMsg('이메일 형식이 올바르지 않습니다.');
    } else {
      setEmailMsg('올바른 이메일 형식입니다.');
    }
    formStateRef.current['email'] = currentEmail;
  });

  const onChangePwd = useCallback((e) => {
    const currentPwd = e.target.value;
    setPassword(currentPwd);

    if (!ValidatePwd(currentPwd)) {
      setPwdMsg('영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요');
    } else {
      setPwdMsg('안전한 비밀번호입니다');
    }
    formStateRef.current['password'] = currentPwd;
  });

  const onChangeConfirmPwd = useCallback(
    (e) => {
      const currentConfirmPwd = e.target.value;
      setConfirmPwd(currentConfirmPwd);

      if (currentConfirmPwd !== passwordState) {
        setConfirmPwdMsg('비밀번호가 일치하지 않습니다.');
      } else {
        setConfirmPwdMsg('비밀번호가 일치합니다.');
      }
    },
    [passwordState]
  );

  return (
    <S.SignUpContainer>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
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
                onChange={onChangeEmail}
              />
              {!isEamilValid ? (
                <S.WorngEmailMsg>{emailMsg}</S.WorngEmailMsg>
              ) : (
                <S.CorrectEmailMsg>{emailMsg}</S.CorrectEmailMsg>
              )}
              <SignUpFormInput
                type="password"
                label="비밀번호"
                name="password"
                onChange={onChangePwd}
              />
              {!isPwdValid ? (
                <S.WorngPwdMsg>{pwdMsg}</S.WorngPwdMsg>
              ) : (
                <S.CorrectPwdMsg>{pwdMsg}</S.CorrectPwdMsg>
              )}
              <SignUpFormInput
                type="password"
                label="비밀번호 확인"
                name="passwordConfirm"
                onChange={onChangeConfirmPwd}
              />
              {!isConfirmPwd ? (
                <S.WorngConfirmPwdMsg>{confirmPwdMsg}</S.WorngConfirmPwdMsg>
              ) : (
                <S.CorrectConfirmPwdMsg>{confirmPwdMsg}</S.CorrectConfirmPwdMsg>
              )}
              <CheckBox ref={formStateRef} context="Sign me up!">
                I agree to the Terms of Service and Privacy Notice
              </CheckBox>
            </form>
          </S.SignUpContent>
        </>
      )}
    </S.SignUpContainer>
  );
}
