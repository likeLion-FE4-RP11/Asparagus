import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';
import { BaseImage } from '@/components';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '@/firebase/firestore';

const ImageContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${(props) => props.bgColor};
  text-align: left;
  z-index: 1;
  width: 471px;
  height: 600px;
  margin-right: 71px;
`;

export function SeeMoreImg() {

  const [imgArr, setImgArr] = useState([]); 

  useEffect(()=>{
  
    const getImages = async () =>{
      const q = query(
        collection(db, 'images'),
        where('user_uid',"==","EHSFq6SN4UfSAyGTw6UH"),
        limit(3)
      )
      const myImgList = await getDocs(q)
  
      const imageList = []
      myImgList.docs.map((doc)=>imageList.push(doc.data().url))
     
      imageList.sort(()=>Math.random()-0.5)
      setImgArr(imageList);
    }
  
    getImages()
  },[])

  console.log(imgArr)

  return (
    <ImageContainer>
        <BaseImage width="471px" height="600px" imgArr={imgArr}/>
    </ImageContainer>
  );
}

ImageContainer.displayName = 'ImageContainer';
