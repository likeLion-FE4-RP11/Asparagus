import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  MainSwiper, 
  SeeMoreButton, 
  SeeMoreImg,
  TopButton,
  CategoryTitle,
  Category,
  RecentImageTitle,
} from '@/components'
import { useState, useEffect } from 'react';
import { collection, getDocs, getDoc, query, where, limit, orderBy, } from 'firebase/firestore';
import { db } from '@/firebase/firestore';
import * as S from './HomePage.styled';

export default function HomePage() {
  const [imgArr, setImgArr] = useState([]); 
  const [moreImgArr, setMoreImgArr] = useState([])
  useDocumentTitle('HomePage');
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
  
    const getImages = async () =>{
      const q = query(
        collection(db, 'images'),
        where('user_uid',"==","EHSFq6SN4UfSAyGTw6UH"),
        orderBy('createAt', 'desc'), //최신순으로 정렬
        limit(3)
      )
      const myImgList = await getDocs(q)
  
      const imageList = []
      myImgList.docs.map((doc)=>imageList.push(doc.data().url))
     
      imageList.sort(()=>Math.random()-0.5)
      setImgArr(imageList);
    }

    getImages()

    const getCategories = async () =>{
      const q = query(collection(db, "categories"), where("isAllow", "==", true),where('user_uid',"!=","EHSFq6SN4UfSAyGTw6UH"),limit(3));
      
      const querySnapshot = await getDocs(q);
      const categoryList = []
      querySnapshot.docs.map((doc) => {
        categoryList.push(doc.id);
      });

      console.log(categoryList)

      const moreImgList = []
      categoryList.map(async(item)=>{
        const q2 = query(collection(db, "images"),where("category_uid","==",`${item}`));
        const querySnapshot2 = await getDoc(q2);
        // querySnapshot2.docs.map((doc)=>{
        //   moreImgList.push(doc.data().url)
        // })
        const url = querySnapshot2.data()
        moreImgList.push(url)
      })
      console.log(moreImgList)
      setMoreImgArr(moreImgList)

    }

    getCategories()

    // console.log(categoryIdList)

    // const getMoreImg = async () =>{
    //   categoryIdList.map((item)=>{
    //     const q2 = query(
    //       collection(db, 'images'),
    //       where('category_uid',"==",`${item}`),
    //       limit(1)
    //     )
    //     const moreImg = await getDocs(q2)
    //     console.log(moreImg)
    //   })
        // const imageList = []
        // moreImg.docs.map((doc)=>imageList.push(doc.data().url))
       
        // imageList.sort(()=>Math.random()-0.5)
        // setMoreImgArr(imageList);
  

  
    // getMoreImages()
  },[])

  // console.log(moreImgArr)



  return <>
    <MainSwiper/>
    <CategoryTitle title={'C A T E G O R Y'} />
    <Category />
    <RecentImageTitle title={'R E C E N T\u00A0\u00A0\u00A0 I M A G E'} />

    <S.MainSection>
    <SeeMoreImg src={imgArr[0]}/>
    <SeeMoreImg src={imgArr[1]}/>
    <SeeMoreImg src={imgArr[2]}/>
    </S.MainSection>

    <SeeMoreButton
        onClick={() => {
          setVisible(!visible);
        }}
        style={{marginTop: '160px', marginBottom: '90px' }}
      >
    </SeeMoreButton>

    <S.SeeMoreSection>
    {visible && <SeeMoreImg src={moreImgArr[3]}/>}
    {visible && <SeeMoreImg src={moreImgArr[4]}/>}
    {visible && <SeeMoreImg src={moreImgArr[5]}/>}
    </S.SeeMoreSection>

    <TopButton />
    </>
}