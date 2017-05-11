$(document).foundation()

$('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
});

// IMAGE CARD
$('.sim-thumb').on('click', function() {
    $('#main-product-image').attr('src', $(this).data('image'));
})