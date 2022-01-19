$(document).ready(function () {
  // MODAL
  var modalText = {
    rsglobal: {
      title: 'Real Source Global Investment',
      tag: 'INVESTMENT PLATFORM.',
      detail:
        'Real Source Global Investment Application is an investment platform for customers to invest their money and earn returns at specified intervals with other features such as Multi Level Marketing, Referrals, Withdrawal functions, etc.',
      link: 'http://rsglobal.com.ng',
    },
    mybetwealth: {
      title: 'My Bet Wealth',
      tag: 'BET STAKING PLATFORM.',
      detail:
        'MyBetWealth Application is a bet staking platform for customers to invest their money on bet stakes (on football matches) and earn returns at specified intervals with other features such as Multi Level Marketing, Referrals, Withdrawal functions, etc.',
      link: 'https://mybetwealth.com',
    },
    brixenmore: {
      title: 'Brixenmore Real Estate - Coming Soon',
      tag: 'REAL ESTATE PLATFORM.',
      detail: 'Brixenmore is a real estate platform.',
      link: 'http://brixenmore.com',
    },
    brixenmore_app: {
      title: 'Brixenmore Real Estate - WebApp',
      tag: 'REAL ESTATE PLATFORM.',
      detail:
        'Brixenmore is a real estate platform that allows property owner to list, and manage their properties for sale and rent and also for users to apply and make payment for such listed properties',
      link: 'https://brixenmore-landing-page.vercel.app',
    },
    owanate: {
      title: 'Owanate Amarache Portfolio',
      tag: 'PORTFOLIO SITE',
      detail: 'Portfolio site of Owanate Amachree',
      link: 'http://owanate.com',
    },
    gnome_movies: {
      title: 'Gnome Movies ',
      tag: 'MOVIE UPLOAD WEB APP',
      detail:
        'A website developed with react that allows user to search for latest movies and get information about it. It also allow user to switch between dark mode and light mode and also stores the latest movie searched by user',
      link: 'https://gnome-movies.netlify.app',
    },
  };

  $('#gallery .button').on('click', function () {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function () {
    shiftSlide(-1);
  });
  $('#prev').click(function () {
    shiftSlide(1);
  });

  carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function () {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') no-repeat center center/cover",
        backgroundSize: 'contain',
      });
    });
  }
});
