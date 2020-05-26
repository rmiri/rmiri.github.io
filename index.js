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

// function([string1, string2],target id,[color1,color2])    
consoleText(['full-stack developer', 'full time learning'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
//   if (colors === undefined) colors = ['#000'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
//   target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        // var usedColor = colors.shift();
        // colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        // target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}