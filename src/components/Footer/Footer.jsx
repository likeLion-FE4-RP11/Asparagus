import Logo from '@/assets/Logo.png';
import * as S from './Footer.styled';

export function Footer() {
  return (
    <S.FooterArea>
      <S.Info>
        <S.FirstHeading>
          <img src={Logo} alt="아이즈 갤러리 로고" />
          &nbsp; I&apos;s gallery
        </S.FirstHeading>
        <S.FirstParagraph>
          <span>Preserve your photos and leave memories.</span>
          <span>I’s gallery is invites you to your exhibition.</span>
          <span>&nbsp;</span>
          <span>COPYRIGHT@2023 | I’S gallery.</span>
        </S.FirstParagraph>
      </S.Info>

      <S.Member>
        <S.SecondHeading>Production team</S.SecondHeading>
        <S.SecondParagraph>
          <li>
            김진섭&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/seovee">https://github.com/seovee</a>
          </li>
          <li>
            김진희&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/kyuran6">https://github.com/kyuran6</a>
          </li>
          <li>
            문나래&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/munanrae">
              https://github.com/munanrae
            </a>
          </li>
          <li>
            오승택&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/5wintaek">
              https://github.com/5wintaek
            </a>
          </li>
          <li>
            최예송&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/to06109">https://github.com/to06109</a>
          </li>
        </S.SecondParagraph>
      </S.Member>
    </S.FooterArea>
  );
}
