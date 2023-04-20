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
      var title =
        items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
      // Get link
      var link =
        items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
      // Generate list item
      list +=
        " <li><a href='" + link + "' target='_blank'>" + title + "</a></li>";
    }
    // Close list
    list += "</ol>";
    // Display list
    const menu = document.getElementById("menu");
    // Add menu list
    menu.innerHTML = list;
  });
