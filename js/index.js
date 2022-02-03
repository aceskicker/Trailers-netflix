   // Comando para eleccion de video

   let linkInRep = document.querySelector("#VideoEnRep");

   let linkInColumn = document.querySelectorAll("#videoEnColumna");

   let videos = document.querySelectorAll(".videos");
   
   function CambioTrailer() {
    videos[0].addEventListener("click", () => {
        linkInRep.setAttribute("src", linkInColumn[0].src)});

    videos[1].addEventListener("click", () => {
        linkInRep.setAttribute("src", linkInColumn[1].src)});

    videos[2].addEventListener("click", () => {
        linkInRep.setAttribute("src", linkInColumn[2].src)});

    videos[3].addEventListener("click", () => {
        linkInRep.setAttribute("src", linkInColumn[3].src)});
    
        }
   


   