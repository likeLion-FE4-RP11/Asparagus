import { db } from '@/firebase/firestore';
import {
  collection,
  query,
  doc,
  deleteDoc,
  where,
  getDocs,
  limit,
} from 'firebase/firestore';

const COLLECTION_KEY = 'images';

/**
 * Image 아이템 삭제하는 유틸리티 함수
 * @param {any} deleteId Image 아이템 ID
 * @returns Promise<any>
 */
export const deleteImageItem = async (deleteId) => {
  const imageItemDocumentRef = doc(db, `${COLLECTION_KEY}/${deleteId}`);
  // 데이터 삭제
  // 참고: https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=ko
  return await deleteDoc(imageItemDocumentRef);
};
