function appendListToHTML(listHTML) {
  document.getElementById("menu").innerHTML = listHTML
  document.body.style.cursor = "pointer"
}

function handleProxyResponse(data) {
  const parser = new DOMParser()
  const htmlData = parser.parseFromString(data.contents, "text/xml")
  const items = htmlData.getElementsByTagName("item")
  let list = "<ol>"

  for (var i = 0; i < items.length; i++) {
    const title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue
    const link = items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue

    list += "<li><a href='" + link + "' target='_blank'>" + title + "</a></li>"
  }

  list += "</ol>"

  appendListToHTML(list)
}

function handleCommonResponse(items) {
  var list = "<ol>"

  for (var i = 0; i < items.length; i++) {
    const { owner_username, tabcoins, title, slug } = items[i]
    const link = `${URL}/${owner_username}/${slug}`

    const isTrending = tabcoins > 10 ? ' <span class="burning" title="Em alta">🔥</span>' : ""
    list += "<li><a href='" + link + "' target='_blank'>" + isTrending + " " + title + "</a></li>"
  }

  list += "</ol>"

  appendListToHTML(list)
}

function handleFetch(URL, responseHandler) {
  fetch(URL)
    .then((response) => {
      if (response.ok) return response.json()
      throw new Error("Network response was not ok.")
    })
    .then((data) => responseHandler(data))
    .catch((err) => console.error(err))
}
function appendListToHTML(listHTML) {
  document.getElementById("menu").innerHTML = listHTML
  document.body.style.cursor = "pointer"
}

function handleProxyResponse(data) {
  const parser = new DOMParser()
  const htmlData = parser.parseFromString(data.contents, "text/xml")
  const items = htmlData.getElementsByTagName("item")
  let list = "<ol>"

  for (var i = 0; i < items.length; i++) {
    const title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue
    const link = items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue

    list += "<li><a href='" + link + "' target='_blank'>" + title + "</a></li>"
  }

  list += "</ol>"

  appendListToHTML(list)
}

function handleCommonResponse(items) {
  var list = "<ol>"

  for (var i = 0; i < items.length; i++) {
    const { owner_username, tabcoins, title, slug } = items[i]
    const link = `${URL}/${owner_username}/${slug}`

    const isTrending = tabcoins > 10 ? '<span class="burning" title="Em alta">🔥</span>' : ""
    list += "<li><a href='" + link + "' target='_blank'>" + isTrending + " " + title + "</a></li>"
  }

  list += "</ol>"

  appendListToHTML(list)
}

function handleFetch(URL, responseHandler) {
  fetch(URL)
    .then((response) => {
      if (response.ok) return response.json()
      throw new Error("Network response was not ok.")
    })
    .then((data) => responseHandler(data))
    .catch((err) => console.error(err))
}

function loadMenu() {
  const PROXY = false // Just a question: why the Proxy is a const and why there's an IF for it if it's a const?
  const baseURL = "https://www.tabnews.com.br"

  if (PROXY) {
    const URL = `https://api.allorigins.win/get?url=${encodeURIComponent(`${baseURL}/recentes/rss`)}`

    handleFetch(URL, handleProxyResponse)
  } else {
    const URL = `${baseURL}/api/v1/contents`

    handleFetch(URL, handleCommonResponse)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadMenu()
})