//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  $(function() {


    $('#id_route').on('change', function(e) {

        if ($(this).val() == agriculture) {

            var arr = ['1', '2'];
            $('#id_standard option').each(function(i) {
                if ($.inArray($(this).attr('value'), arr) == -1) {
                    $(this).css('display', 'none');
                } else {
                    $(this).css('display', 'inline-block');
                }
            });
        } else if ($(this).val() == business) {

            var arr = ['3', '4'];
            $('#id_standard option').each(function(i) {
                if ($.inArray($(this).attr('value'), arr) == -1) {
                    $(this).css('display', 'none');
                } else {
                    $(this).css('display', 'inline-block');
                }
            });
        } else if ($(this).val() == care) {

            var arr = ['5', '6'];
            $('#id_choices option').each(function(i) {
                if ($.inArray($(this).attr('value'), arr) == -1) {
                    $(this).css('display', 'none');
                } else {
                    $(this).css('display', 'inline-block');
                }
            });
        } else {

            $('#id_choices option').each(function(i) {
                $(this).css('display', 'inline-block');
            });

        }

    })


});
})
