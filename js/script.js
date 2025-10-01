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

  // Theme toggle functionality
  $(document).on('click', '#themeToggle, #themeToggleMobile', function() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  });
});


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

$("#mobileMenuBtn").on("click", function() {
  $("#mobileMenu").removeClass("hidden").addClass("flex").removeClass("opacity-0").addClass("opacity-100");
  $("body").addClass("overflow-hidden");
  console.log("pencet");
  
});

$("#closeMenuBtn").on("click", function() {
  $("#mobileMenu").removeClass("opacity-100").addClass("opacity-0");
  setTimeout(function() {
    $("#mobileMenu").removeClass("flex").addClass("hidden");
    $("body").removeClass("overflow-hidden");
  }, 300);
});

// Scroll animation for navbar
$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $("nav").addClass("h-[70px] shadow-lg").removeClass("h-[96px]");
  } else {
    $("nav").removeClass("h-[70px] shadow-lg").addClass("h-[96px]");
  }
});

// Animate sections on scroll
function checkVisibility() {
  const sections = ["#heroSection", "#tentangKamiSection", "#layananSection", "#kelilingSection"];
  
  sections.forEach(section => {
    const $section = $(section);
    if ($section.length) {
      const sectionTop = $section.offset().top;
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();
      
      if (scrollTop + windowHeight > sectionTop + 100) {
        $section.addClass("opacity-100").removeClass("opacity-0");
        
        // Special case for hero image
        if (section === "#heroSection") {
          setTimeout(() => {
            $("#heroImage").addClass("opacity-100").removeClass("opacity-0");
          }, 300);
        }
        
        // Animate tentang kami items
        if (section === "#tentangKamiSection") {
          const items = ["#layananItem", "#aksesibilitasItem", "#lokasiItem"];
          items.forEach((item, index) => {
            setTimeout(() => {
              $(item).addClass("fade-in-up");
            }, index * 200);
          });
        }
        
        // Animate controls container
        if (section === "#layananSection") {
          setTimeout(() => {
            $("#controlsContainer").addClass("fade-in-up");
          }, 300);
        }
      }
    }
  });
}

// Initial check and scroll event
checkVisibility();
$(window).on("scroll", checkVisibility);

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