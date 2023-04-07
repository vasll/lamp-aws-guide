$(document).ready(()=> {
    const COLLAPSED_WIDTH = $('#collapsable-sidebar').width()   // Get initial sidebar width
    const HIDDEN_WIDTH = '0px'
    const ANIMATION_TIME = '200'
    var isSidebarHidden = false;

    // Hide sidebar button listener
    $('#hide-sidebar-button').on('click', ()=>{
        if(!isSidebarHidden){
            $("#collapsable-sidebar").animate({width: HIDDEN_WIDTH}, ANIMATION_TIME)
            $("#main").animate({'marginLeft': HIDDEN_WIDTH}, ANIMATION_TIME)

            $("#collapsable-sidebar").find('*').each((index, item)=>{
                $(item).fadeOut('fast')
            })

            $('#show-sidebar-button').delay(ANIMATION_TIME).show(ANIMATION_TIME)
            
            isSidebarHidden = true;
        }
    })

    $('#show-sidebar-button').on('click', ()=>{
        if(isSidebarHidden){
            $("#show-sidebar-button").fadeOut('fast')

            $("#collapsable-sidebar").animate({width: COLLAPSED_WIDTH}, ANIMATION_TIME)
            $("#main").animate({'marginLeft': COLLAPSED_WIDTH}, ANIMATION_TIME)

            $("#collapsable-sidebar").find('*').each((index, item)=>{
                $(item).fadeIn('slow')
            })
            
            isSidebarHidden = false;
        }
    })


})