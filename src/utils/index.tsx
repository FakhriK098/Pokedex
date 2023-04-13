import Constant from '../assets/Contants';

export const createImgLink = (id: number, url?: string): string => {
  let imgUrl: string = '';
  if (id > 0) {
    imgUrl = `${Constant.BaseUrlImg}${id}.png`;
  } else {
    const urlSplit = url?.split('/');
    const idUrl = urlSplit[urlSplit?.length - 2];
    imgUrl = `${Constant.BaseUrlImg}${idUrl}.png`;
  }

  return imgUrl;
};
