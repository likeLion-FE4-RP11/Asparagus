import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { CategoryTitle, FormInput, ImageContainer } from '@/components/index';
import * as S from './SignUpPase.styled';
export default function SignUpPage() {
  // 브라우저탭 이름
  useDocumentTitle('SignUpPage');

  return (
    <S.SignUpContainer>
      <S.SingUpTitle>Create an acount</S.SingUpTitle>
      <S.FormContainer>
        <FormInput label="Name" name="이름" />
        <FormInput label="Email" name="이메일" />
        <FormInput label="Password" name="비밀번호" />
        <FormInput label="Password Check" name="비밀번호 확인" />
        <S.FormCheckBox>체크박스 들어갈 자리</S.FormCheckBox>
        <S.SignUpButton>Sign me up!</S.SignUpButton>
      </S.FormContainer>
      <S.HalfImageContainer>
        <ImageContainer />
      </S.HalfImageContainer>
    </S.SignUpContainer>
  );
}
