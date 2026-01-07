export const imageTosvg = () => {
  if (typeof window !== 'undefined' && window.jQuery) {
    $(document).ready(function () {
      $('img.svg-img[src$=".svg"]').each(function () {
        var $img = $(this);
        var imgURL = $img.attr("src");
        var attributes = $img.prop("attributes");
        
        $.get(
          imgURL,
          function (data) {
            var $svg = $(data).find("svg");
            $svg = $svg.removeAttr("xmlns:a");
            $.each(attributes, function () {
              $svg.attr(this.name, this.value);
            });
            $img.replaceWith($svg);
          },
          "xml"
        );
      });
    });
  }
};