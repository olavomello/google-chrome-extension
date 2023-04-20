function loadMenu() {

  // Const
  const PROXY = false;

  if( PROXY ) {
  // Proxy access to the RSS feed
  fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://www.tabnews.com.br/recentes/rss"
    )}`
  )
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      // Parse string to HTML
      var parser = new DOMParser();
      var htmlData = parser.parseFromString(data.contents, "text/xml");

      // Get all items
      var items = htmlData.getElementsByTagName("item");
      // Generate OL List
      var list = "<ol>";
      // Loop through items
      for (var i = 0; i < items.length; i++) {
        // Get title
        var title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        // Get link
        var link = items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
        // Generate list item
        list += " <li><a href='" + link + "' target='_blank'>" + title + "</a></li>";
      }
      // Close list
      list += "</ol>";
      
      // Add menu list
      document.getElementById("menu").innerHTML = list;
      
      // Change body cursor to pointer
      document.body.style.cursor = "pointer";
    });
  } else {
  // Reading direct TabNews API

  // BASE URL
  const URL = "https://www.tabnews.com.br";

  const options = {method: 'GET'};
  fetch(URL+'/api/v1/contents', options)
    .then(response => response.json())
    .then((items) => {
      
      // Generate OL List
      var list = "<ol>";
      // Loop through items
      for (var i = 0; i < items.length; i++) {
        const { owner_username, tabcoins, title, slug } = items[i];

        // Link
        var link = `${URL}/${owner_username}/${slug}`;

        // Is burining?
        const burning = ( tabcoins > 10 ) ? ' <span class="burning" title="Em alta">🔥</span>' : '';  

        // Generate list item
        list += " <li><a href='" + link + "' target='_blank'>" + burning + " " + title + "</a></li>";
      }
      // Close list
      list += "</ol>";
      
      // Add menu list
      document.getElementById("menu").innerHTML = list;
      
      // Change body cursor to pointer
      document.body.style.cursor = "pointer";
    })
    .catch(err => console.error(err));
  }
}

// Document ready
document.addEventListener("DOMContentLoaded", function () {
  // Load menu
  loadMenu();
});