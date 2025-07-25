const menuQuiz = () => {
    document.querySelector(".pop").style.display = "block";
    window.addEventListener("dblclick", () => {
            document.querySelector(".pop").style.display = "none";
        }
    )}


const quizstart=(e)=>{
   console.log(e);
}