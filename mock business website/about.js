
//main function
$(function () {
    updateEmployeeDescription();
    imposeMaxLength('#shrink-text-1');
    imposeMaxLength('#shrink-text-2');
    
    updateGridTemplate();
    
})

//function for setting employee description when clicking on employees picture 
function updateEmployeeDescription() {
    $('#workerDaisy').click(function () {
        $("#employee-description").text("Daisy has been working for Good Gums for 10 years. her role as a Horticultural Worker involves a wide range of activities which include: planting, irrigating, weeding, and harvesting, and oversees their activities. Maintains personnel and production records. ");
    });
    
    $('#workerIvy').click(function () {
        $("#employee-description").text("Ivy has been working for Good Gums for 8 years. her role as a Horticultural Specialty Grower involves a wide range of activities which include: Inspects fields periodically to ascertain nutrient deficiencies, detect insect, disease, and pest infestations, and identify foreign-plant growth, and selects, purchases and schedules materials, such as fertilizers and herbicides, to insure quality control. ");
    });

    $('#workerJarred').click(function () {
        $("#employee-description").text("Jarred has been working for Good Gums for 12 years. her role as a Tree Surgeon involves a wide range of activities which include: planting, pruning, transplanting, fertilizing, monitoring and treatment for insects and diseases and tree removal. Consulting arborists specialize in diagnosing problems, recommending treatments, tree appraisals and suggesting where to obtain competent tree service. ")
    });

    $('#workerRen').click(function () {
        $("#employee-description").text("Ren has been working for Good Gums for 15 years. her role as a Tree Surgeon involves a wide range of activities which include: according to scheduled activities, such as planting, irrigating, weeding, and harvesting, and oversees their activities. Maintains personnel and production records. Arranges with customers for sale of crop. ");
    })
}


//function for limiting text length  
function imposeMaxLength(element) {
    var txt= $(element).text();
    var originalText = $(element).text()
    
    if(($(window).width() > 450) && ($(window).width() < 1042)) {
        if(txt.length > 20) {
            $(element).text(txt.substring(0,19) + '…') }
    } else {
        $(element).text(originalText)
    }
    
    $(window).resize(function() {
        if(($(this).width() > 450) && ($(this).width() < 1042)) {
            if(txt.length > 20) {
                $(element).text(txt.substring(0,19) + '…') }
        } else {
            $(element).text(originalText)
        }
    });
}

//function for updating laying out employee information and photo gird
function updateGridTemplate() {
    resizeGridTemplate();
    $(window).resize(function() {
        resizeGridTemplate();
    });
}

//function for resizing laying out employee information and photo gird
function resizeGridTemplate() {
    if(($(window).width() > 450) && ($(window).width() < 700))  {
        $('.employee-gallery-container').css("grid-template", "repeat(1, 1fr) / repeat(2, 1fr)");
    }
    else if($(this).width() <  450 ) {
        $('.employee-gallery-container').css("grid-template", "repeat(1, 1fr) / repeat(1, 1fr)");
    } 
    else {
        $('.employee-gallery-container').css("grid-template", "repeat(1, 1fr) / repeat(4, 1fr)");
    }
}
