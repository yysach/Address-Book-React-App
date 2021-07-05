
export function colorDiv(){
    const answerDiv = document.querySelectorAll('.answer')
    if(answerDiv){
        answerDiv.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}