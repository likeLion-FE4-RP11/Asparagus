import Spinner from '@/assets/LoadingSpinnerGif.gif';
import * as S from './LoadingSpinner.styled';

export function LoadingSpinner() {
  return (
    <S.Container>
      <S.LoadingImage src={Spinner} alt="로딩중" />
      <S.LoadingText>Loading...😃</S.LoadingText>
    </S.Container>
  );
}
