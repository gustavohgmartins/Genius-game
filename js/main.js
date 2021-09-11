

let sequence = [];
let click_sequence = [];
let score = 0;

const green = document.querySelector('.green');  //0 - green
const red = document.querySelector('.red');      //1 - red
const yellow = document.querySelector('.yellow');//2 - yellow
const blue = document.querySelector('.blue');    //3 - blue


let sequence_generator = () =>{ 
    let color_sequence = Math.floor(Math.random() * 4);
    sequence[sequence.length] = color_sequence;
    click_sequence = [];
  
    for(let i in sequence) {
        let elementColor = create_element_color(sequence[i]);
        glow(elementColor, Number(i) + 1);
    }
  
}

let create_element_color = (color) =>{
  if(color == 0){
    return green;
  }else if(color == 1){
    return red;
  }else if(color == 2){
    return yellow;
  }else if(color == 3){
    return blue;
  }      
}


let glow = (element, number) =>{
    number = number * 500; 
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);

}


let check_sequence = () => {
  for(let i in click_sequence){
    if(click_sequence[i] != sequence[i]) {
        game_over();
        break;
    }
  }
  if(click_sequence.length == sequence.length){
    setTimeout(() => {
    
        next_level();
    },300);
  }
}


let click = (color) =>{
  click_sequence[click_sequence.length] = color;
  create_element_color(color).classList.add('selected');
  
  setTimeout(()=>{
    create_element_color(color).classList.remove('selected');
    check_sequence();
  },250);
}

let play_game = () =>{
  alert("Welcome to Genius!\n Press ok to play")
  score = -1;
  setTimeout(() => {
  next_level();
  },600);
}

let next_level = () =>{
  score++;
  sequence_generator();
}

let game_over = () =>{
  
  $("#hub").remove();
  $("#main_game").append("<div class='game_over'<h2>GAME OVER!</h2><h1 id='final_score'>Score:"+score+"</h1><a onClick='window.location.reload()'>&nbsp&nbsp Play again &#9654;</a></div>");
  sequence = [];
  click_sequence = [];
  
}






green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


play_game()