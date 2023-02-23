import './style.css'
import { getData, populateList, addlist, } from './app.js'

addlist();

window.addEventListener('DOMContentLoaded', () => {
  getData()
  populateList()
  
})
