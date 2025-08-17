import hero from '../components/hero.js';
import navbar from '../components/navbar.js';

$(document).ready(function() {
    $('#navbar').append(navbar());
    $('#hero').append(hero())
});