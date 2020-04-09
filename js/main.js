$('.contact-page').hide()
$('.chatego').hide()
$('.close_chategories').hide()

//chategories visible
$('.chategories').click(function (e) {
    e.preventDefault()
    $(this).hide()
    $('.close_chategories').show()
    $('.close_chategories').css({
        background: 'rgb(174, 0, 255)',
    })
    $('.chatego').fadeIn()
})

//chategories hide
$('.close_chategories').click(function (e) {
    e.preventDefault()
    $('.chatego').fadeOut()
    $('.chategories').show()
    $('.close_chategories').hide()
})

//contact page slide down
$('.Humbger-open').click(function (e) {
    e.preventDefault()
    $('.contact-page').slideDown()
})

//contact page slide up
$(".Humbger-close").click(function (e) {
    e.preventDefault()
    $('.contact-page').slideUp()
})