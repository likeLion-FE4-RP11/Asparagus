import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
// 추후 page 폴더의 메인과 카테고리 페이지들 안에 버튼컴포넌트가 나가야 함

const Button = styled.button`
  width: 214px;
  height: 77px;
  font-size: 2.36rem;
  align-items: center;
  border-radius: 20px;
  border: 2px solid transparent;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Pretendard';
  font-weight: 600;
  background-color: #f59d6c;

  &:hover {
    border-color: #ffffff;
    background-color: #b2673c;
  }
`;

export function DeleteButton() {
  // 추후 이미지 리스트 초기 값 (이거는 나중에 버튼이 들어가는 페이지안에 들어가야 함)
  // const [imageList, setimageList] = useState();

  // 함수에 index를 받고 setimageList를 한다.
  // 기존의 imageList에서 filter메소드 사용해서, 이미지와 index를 받는다. index는 i로 사용
  // filter 메소드로 리턴값을 i 랑 index를 비교해서 같지 않다는 것을 리턴
  // 이미지는 필요없으니까 언더스코어(_)로 처리 : 사용하지 않겠다는 의미
  // 리스트에서 index랑 전달된 아래의 index랑 일치하는 거를 거른 나머지를 다시 setimageList에 업데이트 해주세요!
  const handleDeleteImage = (index) => () => {
    setimageList(imageList.filter((_, i) => i !== index));
  };

  return (
    <Button type="button" onClick={handleDeleteImage()}>
      Delete
    </Button>
  );
}

DeleteButton.propTypes = {
  data: PropTypes.bool,
  setData: PropTypes.bool,
};
