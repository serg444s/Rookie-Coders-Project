export async function murkupCategoryList(fetch) {
  return await fetch.data
    .map(({ list_name }) => {
      return `<li class="category-item" data-category="${list_name}">${list_name}</li>`;
    })
    .join('');
}
