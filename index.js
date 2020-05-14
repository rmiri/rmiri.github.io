// const proj1 = document.getElementById('project1')
// const proj1div = document.getElementById('proj1Div')

// const proj2 = document.getElementById('project2')
// const proj2div = document.getElementById('proj2Div')

const photoDiv = document.getElementsByClassName('photoDiv')
const projectInfo = document.getElementsByClassName('projectInfo')


const myFunction = (j) => {
    // console.log('hellu')
    console.log(projectInfo[j])
    // projectInfo[i].className = 'projectInfoVisible';
}

for (let i = 0; i < photoDiv.length; i++) {
    // console.log(projectInfo[i])
    photoDiv[i].addEventListener('click', function(){
        if (projectInfo[i].style.display === 'none'){
            projectInfo[i].style.display = 'inline-block';
        } else {
            projectInfo[i].style.display = 'none'
        }
    });
}


// proj1.addEventListener('click', ()=> {
//     if ( proj1div.className === 'projectInfo' ){
//         proj1div.className = 'projectInfoShow';
//     } else {
//         proj1div.className = 'projectInfo'
//     }
//  alert('hi')
// })

// proj2.addEventListener('mouseover',() => {
//     if ( proj1div.className === 'projectInfo' ){
//         proj1div.className = 'projectInfoShow';
//     } else {
//         proj1div.className = 'projectInfo'
//     }
// })

