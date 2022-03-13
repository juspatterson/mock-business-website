
//main function
$(function () {
    dropDownLinks()
});

//function for showing site map links when clicking on header and rotating disclosure-indicator
function dropDownLinks() {
    $('.sitemap-heading').click(function() {
        $(this).children('.disclosure-indicator').toggleClass("rotated");
        $(this).next('.sitemap-link-list').slideToggle('slow');
    });
}