var inc = 1;


$(document).ready(function(){

  generateTOC();
  scrollSpyForActiveLi();
  generateHighlight();
  addsideBarButton();


    $(".sidr-inner a").bind('click',function(e){
      var that = this;
      e.preventDefault();
      $.sidr('close',function() {
        var href = $(that).attr("href");
        topMenuHeight = 32;
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 300);
        
      });
        
        
    });

});

function rec(node,current,array)
{
    if(current==array.length)
    {
        return "";
    }

    var li = "<ul>";
    
    $(node).nextAll(array[current-1]+","+ array[current]).each(function(){
        if($(this).prop('tagName')==array[current-1])
        {
            
            return false;
        }
         li += "<li><a href='#"+$(this).text().replace(/ /g,"-")+inc+"'>"+$(this).text()+"</a>";
        //$(this).before("<a name='"+$(this).text()+inc+"'></a>");
        $(this).attr("id",$(this).text().replace(/ /g,"-")+inc);
        inc++;

        li +=rec(this,current+1,array);
        li +="</li>";
    });
    li +="</ul>";
    return li;
}


function generateTOC()
{

    var md = $("#content").html();
    var converter = new Showdown.converter();
    var html = converter.makeHtml(md);
    $("#content").html(html);
    

    var arr = ["H1","H2","H3","H4","H5","H6"];

    var li = "<ul>";
    $("H1").each(function(){
        
        if($(this).hasClass('title'))
        {
          return;
        }

        li += "<li><a href='#"+$(this).text().replace(/ /g,"-")+inc+"'>"+$(this).text()+"</a>";
        // $(this).before("<a name='"+$(this).text()+inc+"'></a>");
        $(this).attr("id",$(this).text().replace(/ /g,"-")+inc);
        inc++;
        li +=rec(this,1,arr);
        li +="</li>"
    });
    li +="</ul>";

    $("#toc").append(li);
    if($("#toc").attr("data-autohide")=== undefined)
    {
      $("#toc").attr("data-autohide","false");
    }


    if($("#toc").attr("data-autohide").toUpperCase()=="TRUE")
    {
      $("#toc > ul > li > ul").css("display","none");
    }
}

function scrollSpyForActiveLi()
{
   //scroll spy
    // Cache selectors
    var lastId,
        topMenu = $("#toc"),
       // topMenuHeight = topMenu.outerHeight()+50,
       topMenuHeight = 0;
        // All list items
        menuItems = topMenu.find("a");
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

        

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
        
      var href = $(this).attr("href");
      
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems.parent().removeClass("active");
          menuItems.filter("[href=#"+id+"]").parent().addClass("active");
          
          if($("#toc").attr("data-autohide").toUpperCase()=="TRUE")
          {
            $("#toc > ul > li > ul").css("display","none");
            
            $("ul").removeClass("showChild");
            if($("#toc > ul > li").hasClass("active"))
            {
              $("#toc > ul > li.active > ul").addClass("showChild");
            }
            $("#toc > ul > li > ul > li.active").parent().addClass("showChild");
            $("#toc > ul > li > ul > li > ul > li.active").parent().parent().parent().addClass("showChild");
          }
          
          
       }                   
    });
}

function generateHighlight()
{
  hljs.tabReplace = '    '; //4 spaces
    hljs.initHighlightingOnLoad();

    $("pre > code").each(function(ele,i) {
      //fix for hightlight.js erro
      var newHTML = $(this).html().replace(/&amp;gt;/gm,"&gt;").replace(/&amp;lt;/gm,"&lt;");
      
      $(this).html(newHTML);

    });
}

function addsideBarButton()
{
  $("#content").prepend('<div id="topNav"><a id="navmenu" href="#sidebar"></a></div>');
  
  $("#navmenu").click(function(){
  
     $('#navmenu').sidr({
      name : 'sidr-main',
      side: 'left',
      source: '#toc'
    });
  });


  $('#navmenu').sidr({
      side: 'left',
      source: '#toc'
    });



}