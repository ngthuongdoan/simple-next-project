import { Watch } from "../types/Watch";

export type Pagination = {
  maxItems: number;
  list: Watch[];
  pageCurrent: number;
};

export const findPageSize = ({ maxItems, pageCurrent, list }: Pagination) => {
  const delta = list.length / maxItems - Math.floor(list.length / maxItems);
  let maxPage: number;

  // Tong so trang phai co
  if (delta > 0) {
    maxPage = Math.floor(list.length / maxItems) + 1;
  } else {
    maxPage = Math.floor(list.length / maxItems);
  }

  return maxPage;
};

export const pagination = ({ maxItems, list, pageCurrent }: Pagination) => {
  return list.slice((pageCurrent - 1) * maxItems, pageCurrent * maxItems);
};
