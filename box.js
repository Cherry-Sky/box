let i = 1

$('<div/>', {
    'id': 'box' + i,
    'class': 'clrBox',
    click: function(){
        
        $(this).toggleClass('dark')


    }
}).appendTo('body')

let q = 2

$('<div/>', {
    'id': 'box' + q,
    'class': 'clrBox',
    
    click: function(){
        $(this).toggleClass('dark')
    }
}).appendTo('body')

let w = 3

$('<div/>', {
    'id': 'box' + w,
    'class': 'clrBox',
    
    click: function(){
        $(this).toggleClass('dark')
    }
}).appendTo('body')

let e = 4

$('<div/>', {
    'id': 'box' + e,
    'class': 'clrBox',
    
    click: function(){
        $(this).toggleClass('dark')
    }
}).appendTo('body')






//$('#box').on('click', function() {

  //  $(this).css('background-color','black')
    
// })