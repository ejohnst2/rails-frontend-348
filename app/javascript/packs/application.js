// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import { initUpdateNavbarOnScroll } from '../components/navbar'
import { loadDynamicBannerText } from '../components/banner'

import 'bootstrap';

// call the function that we imported
initUpdateNavbarOnScroll();
loadDynamicBannerText();

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

console.log("Hello batch 348, let's see if this works!");
