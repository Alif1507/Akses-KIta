import hero from '../components/hero.js';
import layanan from '../components/layanan.js';
import navbar from '../components/navbar.js';
import tentangKami from '../components/tentangKami.js';

$(document).ready(function() {
    $('#navbar').append(navbar());
    $('#hero').append(hero())
    $("#tentangKami").append(tentangKami())
    $('#layanan').append(layanan())
});