import { CheckBox } from '@/components';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { CategoryTitle, FormInput, ImageContainer } from '@/components/index';
import * as S from './SignUpPase.styled';
export default function SignUpPage() {
  // 브라우저탭 이름
  useDocumentTitle('SignUpPage');

  return (
    <S.SignUpContainer>
      <S.SignUpContent>
        <S.FormContainer>
          <S.SingUpTitle>Create an acount</S.SingUpTitle>
          <FormInput type="text" label="Name" name="이름" />
          <FormInput type="email" label="Email" name="이메일" />
          <FormInput type="password" label="Password" name="비밀번호" />
          <FormInput
            type="password"
            label="Password Check"
            name="비밀번호확인"
          />
          <S.FormCheckBox>
            I agree to the Terms of Service and Privacy Notice
          </S.FormCheckBox>
          <S.SignUpButton>Sign me up!</S.SignUpButton>
        </S.FormContainer>
      </S.SignUpContent>
      <S.HalfImageContainer>
        <S.ImageLogo>I's gallery</S.ImageLogo>
        {/* 여기에 img 추가해야함 */}
      </S.HalfImageContainer>
    </S.SignUpContainer>
  );
}
