$(document).ready(function() {
  var footer_height;
  footer_height = $('.colophon').outerHeight();
  $('.content').css({
    'margin-bottom': footer_height
  });
});

$(".contact_form").on('submit', function(e) {
  e.preventDefault();

  var $form = $(this);

  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert(`Obrigado!\n\nSua mensagem foi enviada e vou respondê-la em breve.\n\nAté lá,\nArthur.`);
    $form[0].reset();
  });
});


/*
  Responsive videos.
*/
(function() {
  var _debounce, _each, _filter, _resize, iframes, isVideo, resizeVideos, videos;

  resizeVideos = function() {
    _each(videos, function(video) {
      var newWidth;
      newWidth = video.parentElement.offsetWidth;
      _resize(video, newWidth);
    });
  };

  _each = function(items, action) {
    var i, len;
    i = 0;
    len = items.length;
    while (i < len) {
      action(items[i], i);
      i++;
    }
  };

  _filter = function(items, test) {
    var filtered, i, item;
    filtered = [];
    i = 0;
    while (i < items.length) {
      item = items[i];
      if (test(item, i)) {
        filtered.push(item);
      }
      i++;
    }
    return filtered;
  };

  _resize = function(video, newWidth) {
    var ASPECT_RATIO, newHeight;
    ASPECT_RATIO = 9 / 16;
    newHeight = ASPECT_RATIO * newWidth;
    video.setAttribute('width', newWidth.toString());
    video.setAttribute('height', newHeight.toString());
  };

  _debounce = function(func, wait, immediate) {
    var timeout;
    timeout = void 0;
    return function() {
      var args, callNow, context, later;
      context = this;
      args = arguments;
      later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  iframes = document.getElementsByTagName('iframe');

  isVideo = /(youtube)|(vimeo)|(cloudup)|(spotify)|(serialpodcast)|(stownpodcast)/i;

  videos = _filter(iframes, function(iframe) {
    return isVideo.test(iframe.getAttribute('src'));
  });

  resizeVideos();

}).call(this);
