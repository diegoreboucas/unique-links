function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light");
  } else {
    html.classList.add("light");
  }
  */

  //pegar a tag img
  const profileImage = document.querySelector(".profile img");
  //substitur a imgage
  if (html.classList.contains("light")) {
    //se tiver light mode, add imagem light
    profileImage.setAttribute("src", "./assets/logo-unique.svg");
    profileImage.setAttribute(
      "alt",
      "Logotipo Unique Etiquetas,com fundo degradê tons de preto e letra branca."
    );
  } else {
    //se tiver sem light mode, manter a imagem normal.
    profileImage.setAttribute("src", "./assets/logo-unique-light.svg");
  }
}
