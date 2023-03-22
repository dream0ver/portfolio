const load = () => {
  const body = document.querySelector("body")
  const element = document.createElement("div")
  const heading = document.createElement("h2")
  const para = document.createElement("p")
  const link = document.createElement("a")
  heading.innerText = "dream0ver's home on the internet."
  para.innerHTML =
    " <span>Iam a simple man , i see recursive functions i <a href='#' onclick='load()'>panic</a>.</span>"
  link.innerText = "check out my startup."
  link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  element.append(heading, para, link)
  body.appendChild(element)
}
