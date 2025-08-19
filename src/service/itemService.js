const baseUrl = "http://localhost:8080/api/v1/public/item/";
const list = "list";

export const fetchItemList = (itemCategory) => {
  const url = baseUrl + list + (itemCategory ? itemCategory : "");
  return fetch(url).then((response) => response.json());
};
