#jQuery-Simple-Slideshow-Image-db-Alleatoire
Simple Slideshow avec affichage des images d'une base de données de façon alléatoire

<b>jQuery-Slideshow.js</b>
```js
$(document).ready(function () {
//-----------------------------------------------------------------------------------------
// SLIDESHOW BANNER
//-----------------------------------------------------------------------------------------
  $(document).ready(function() {
  	(function($){  
  	  setInterval(function(){  
  	    //$(".slideshow ul li:first-child").animate({"margin-left": -350}, 800, function(){  
  	    $(".slideshow ul li:first-child").animate({"margin-top": -350}, 1500, function(){
  	        $(this).css("margin-top",0).appendTo(".slideshow ul");  
  	    });  
  	  }, 3500);  
  	})(jQuery);
    //-----------------------------------------------------------------------------------------
    // SLIDESHOW BANNER :: IMAGES ALEATOIRE
    //-----------------------------------------------------------------------------------------
    var collection = $("ul.alleatoire li").get();
    collection.sort(function() {
        return Math.random()*10 > 5 ? 1 : -1;
    });
    $.each(collection,function(i,el) {
        $(el).appendTo( $(el).parent() );
    });
  });
});
```
<br />

<b>style.css</b>
```css
.slideshow {
   width: 100%;
   height: 350px;
   overflow: hidden;
   border: 2px solid #555;
   background:#fff;
   text-align:center;
   margin:auto auto auto auto;
   overflow:hidden;
}

.slideshow ul {
   width: auto;
   height: 200px;
   padding:0; margin:0;
   list-style: none;
}

.slideshow-txt{
   position:absolute;
   width:100%;
   color:#fff;
   height:auto;
   padding:0px;
   background:#555;
   opacity:0.8;
}
```
<br />

<b>index.html</b>
```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr" dir="ltr">
  <head>
  <script type='text/javascript' src='js/jQuery-Slideshow.js'></script>
  <link href="css/style.css" rel="stylesheet" media="all" type="text/css"> 
  </head>
  <body>
    <div class="slideshow">
      <ul class="alleatoire">
        <!-- 
        On boucle toutes les bannières de la DB.
        -->
        {% for banner in banners %}
          <!-- 
          On boucle tout les articles de la DB.
          -->
          {% for article in articles %}
            <!-- 
            Si le titre de l'article et identique au titre de la bannière on affiche.
            -->
            {% if article.articletitle==banner.articletitle %}
              <li>
                <div>
                <div style="position:absolute;width:100%;color:#fff;height:auto;padding:0px;background:#555;opacity:0.8;">
                  <h4>{{ banner.title|capitalize }} <small style="color:#fff;"> - {{ article.pagetitle|capitalize }}</small></h4>
                </div>
                <img class="slideshow-img" src="{{ asset(['banner/', banner.path]|join) }}" alt="" width="100%" height="350" />
                </div>
              </li>
            {% endif %}
          {% endfor %}
        {% endfor %}
      </ul>
    </div>
  </body>
</html>
```
