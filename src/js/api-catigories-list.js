import axios from 'axios';
import { fetchOneCategori } from './fetchOneCategori.js';

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
      listItem.dataset.category = category.list_name;
      const link = document.createElement('a');
      link.textContent = category.list_name;
      link.href = `#${category.list_name}`;
      link.classList.add('link_category-book');
      listItem.appendChild(link);
      categoriesBooks.appendChild(listItem);
      link.addEventListener('click', activeCategory);
      listItem.addEventListener('click', async e => {
        const categoryName = listItem.dataset.category;
        await fetchOneCategori(categoryName);
      });
    });
  } catch (error) {
    console.error('Error rendering categories:', error);
  }
}
document.addEventListener('DOMContentLoaded', renderCategories);

function activeCategory(e) {
  const links = document.querySelectorAll('.link_category-book');
  console.log(links);
  links.forEach(link => link.classList.remove('active-category'));
  e.currentTarget.classList.add('active-category');
  console.log(e.currentTarget);
}
