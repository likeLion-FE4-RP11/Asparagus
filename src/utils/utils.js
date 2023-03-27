import {
  collection,
  doc,
  writeBatch,
  serverTimestamp,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@/firebase/firestore';

const USER_COLLECTION_KEY = 'users';
const IMAGE_COLLECTION_KEY = 'images';
const CATTEGORY_COLLECTION_KEY = 'categories';

/**
 * 데이터 일괄 쓰기 유틸리티 함수
 * @param {any[]} dataList 데이터 리스트
 */
export const writeBatchImageList = async (dataList) => {
  // Firestore 인스턴스로부터 콜렉션 참조
  const imageCollectionRef = collection(db, IMAGE_COLLECTION_KEY);

  // 일괄 쓰기 생성 (최대 쓰기 수: 500)
  const batch = writeBatch(db);

  dataList.forEach((data) => {
    const documentRef = doc(imageCollectionRef);
    batch.set(documentRef, { ...data, createAt: serverTimestamp() });
  });

  // 일괄 쓰기를 원자 단위로 커밋
  await batch.commit();
};

//& 카테고리 일괄 쓰기
export const writeBatchCategoryList = async (dataList) => {
  // Firestore 인스턴스로부터 콜렉션 참조
  const CategoryCollectionRef = collection(db, CATTEGORY_COLLECTION_KEY);

  // 일괄 쓰기 생성 (최대 쓰기 수: 500)
  const batch = writeBatch(db);

  dataList.forEach((data) => {
    const documentRef = doc(CategoryCollectionRef);
    batch.set(documentRef, { ...data });
  });

  // 일괄 쓰기를 원자 단위로 커밋
  await batch.commit();
};

/**
 * 유저 uid와 카테고리 이름으로 카테고리 uid 가져오는 유틸리티 함수
 * @param {string} user_uid 유저 uid
 * @param {string} category_name 카테고리 이름
 * @returns Promise<any>
 */

export const getCategoryId = async (user_uid, category_name) => {
  let category_uid = '';
  // 문서 가져오기
  // 참고: https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko#get_a_document
  const categoryDocRef = collection(db, CATTEGORY_COLLECTION_KEY);
  const q = query(categoryDocRef, where('user_uid', '==', user_uid));

  const categoryDocSnapshot = await getDocs(q);

  categoryDocSnapshot.forEach((doc) => {
    // console.log(doc.data().name);
    if (doc.data().name === category_name) {
      category_uid = doc.id;
    }
  });

  return category_uid ?? null;
};

export const getCategoryIds = async (uid) => {
  let category_uid = {};
  // 문서 가져오기
  // 참고: https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko#get_a_document
  const categoryDocRef = collection(db, CATTEGORY_COLLECTION_KEY);
  const q = query(categoryDocRef, where('uid', '==', uid));

  const categoryDocSnapshot = await getDocs(q);
  categoryDocSnapshot.forEach((doc) => {
    category_uid[doc.data().name] = doc.id;
  });
  return category_uid ?? null;
};

/**
 * 이미지 아이템 추가하는 유틸리티 함수
 * @param {any} imageItem image 아이템 (객체)
 * @returns Promise<any>
 */
export const addImageItem = async (imageItem) => {
  const imageCollectionRef = collection(db, IMAGE_COLLECTION_KEY);
  // 데이터 추가
  // 참고: https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko
  return await addDoc(imageCollectionRef, {
    ...imageItem,
    createAt: serverTimestamp(),
  });
};
