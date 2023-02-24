import './style.css';
import { getData, populateList, addlist } from '../modules/app.js';

addlist();

window.addEventListener('DOMContentLoaded', () => {
  getData();
  populateList();
});
