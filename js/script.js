import hero from "../components/hero.js";
import keliling from "../components/keliling.js";
import layanan from "../components/layanan.js";
import navbar from "../components/navbar.js";
import tentangKami from "../components/tentangKami.js";

$(function () {
  $("#navbar").append(navbar());
  $("#hero").append(hero());
  $("#tentangKami").append(tentangKami());
  $("#layanan").append(layanan());
  $("#keliling").append(keliling());

});

// Safer: works even if #faq is added/re-rendered later
$("#faq").on("click", function () {
  $(this).toggleClass("bg-white");
  $(this).toggleClass("rounded-xl");
  $(this).toggleClass("pointer-events-none");
  $("#jwl").removeClass("bg-white");
  $("#jwl").removeClass("rounded-xl");
  $("#jwl").removeClass("pointer-events-none");
  $("#faqItem").removeClass("opacity-0");
  $("#faqItem").toggleClass("opacity-100");
  $("#faqItem").toggleClass("translate-y-0");
  $("#faqItem").removeClass("translate-y-10");
  $("#jwlItem").toggleClass("translate-y-10");
  $("#jwlItem").removeClass("translate-y-0");
  $("#jwlItem").toggleClass("opacity-0");
  $("#jwlItem").removeClass("opacity-100");
});

  $("#jwl").on("click", function () {
  $(this).toggleClass("bg-white");
  $(this).toggleClass("rounded-xl");
  $(this).toggleClass("pointer-events-none");
  $("#faq").removeClass("bg-white");
  $("#faq").removeClass("rounded-xl");
  $("#faq").removeClass("pointer-events-none");
  $("#jwlItem").removeClass("opacity-0");
  $("#jwlItem").toggleClass("opacity-100");
  $("#jwlItem").toggleClass("translate-y-0");
  $("#jwlItem").removeClass("translate-y-10");
  $("#faqItem").toggleClass("translate-y-10");
  $("#faqItem").removeClass("translate-y-0");
  $("#faqItem").toggleClass("opacity-0");
  $("#faqItem").removeClass("opacity-100");
});

$(function () {
      const singleOpen = true;

      $('.accordion-trigger').on('click', function () {
        const $btn = $(this);
        const isExpanded = $btn.attr('aria-expanded') === 'true';
        const panelId = $btn.attr('aria-controls');
        const $panel = $('#' + panelId);

        if (singleOpen) {
          // Close all others
          $('.accordion-trigger').not($btn).attr('aria-expanded', 'false')
            .find('.chev').removeClass('rotate-180');
          $('.accordion-panel').not($panel).each(function () {
            const $p = $(this);
            if (!$p.hasClass('hidden')) {
              $p.stop(true, true).slideUp(160, function () {
                $p.addClass('hidden');
              });
            }
          });
        }

        if (isExpanded) {
          // Close current
          $btn.attr('aria-expanded', 'false');
          $btn.find('.chev').removeClass('rotate-180');
          $panel.stop(true, true).slideUp(160, function () {
            $panel.addClass('hidden');
          });
        } else {
          // Open current
          $btn.attr('aria-expanded', 'true');
          $btn.find('.chev').addClass('rotate-180');
          $panel.removeClass('hidden').hide().stop(true, true).slideDown(160);
        }
      });
    });