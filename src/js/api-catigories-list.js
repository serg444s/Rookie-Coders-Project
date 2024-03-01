import axios from 'axios';

export async function getCategoriesAPI() {
  const baseURL = `https://books-backend.p.goit.global/books/category-list`;
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}
export async function renderCategories() {
  try {
    const categories = await getCategoriesAPI();
    const categoriesBooks = document.querySelector('.categories-list_books');
    categories.forEach(category => {
      const listItem = document.createElement('li');
      listItem.classList.add('item-list_category');
      const link = document.createElement('a');
      link.textContent = category.list_name;
      link.href = `${category.list_name}`;
      link.classList.add('link_category-book');
      // link.addEventListener('click', (e)=>{
      //   e.preventDefault()
      //   e.target.style.color = 'blue';
      //
      // })
      listItem.appendChild(link);
      categoriesBooks.appendChild(listItem)
    })
  } catch (error) {
    console.error('Error rendering categories:', error);
  }
}
document.addEventListener('DOMContentLoaded', renderCategories);