var offset, currentNode, tempID, tempVAL, lengthOfNode, images;

// Describe this function...
function updateCurrentNode(offset) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  currentNode = (typeof currentNode === 'number' ? currentNode : 0) + offset;
  if (currentNode == lengthOfNode) {
    currentNode = 0;
  } else if (currentNode == -1) {
    currentNode = 4;
  }
  displayCurrentNode();
}

// Describe this function...
function displayCurrentNode() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_img_current = document.getElementById('img_current');
  element_img_current.setAttribute("src", getImage());
}

// Describe this function...
function getImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  tempID = 0;
  images = ['https://www.beano.com/wp-content/uploads/2020/02/cat1.jpg?strip=all&quality=86&w=887', 'https://www.beano.com/wp-content/uploads/2020/02/cat2.jpg?strip=all&quality=86&w=887', 'https://www.beano.com/wp-content/uploads/2020/02/cat3.jpg?strip=all&quality=86&w=887', 'https://www.beano.com/wp-content/uploads/2020/02/cat4.jpg?strip=all&quality=86&w=887', 'https://www.beano.com/wp-content/uploads/2020/02/cat5.jpg?strip=all&quality=86&w=887'];
  tempVAL = images[0];
  while (!(tempID == currentNode)) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    tempID = (typeof tempID === 'number' ? tempID : 0) + 1;
    images.shift();
    tempVAL = images[0];
  }
  return tempVAL;
}

// Describe this function...
function show_result() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_div_result = document.getElementById('div-result');
  element_div_result.setAttribute("class", 'active');
}


currentNode = 0;
lengthOfNode = 5;
updateCurrentNode(0);


document.getElementById('btn_next').addEventListener('click', (event) => {
  updateCurrentNode(1);

});

document.getElementById('btn_last').addEventListener('click', (event) => {
  updateCurrentNode(-1);

});

document.getElementById('btn_quiz').addEventListener('click', (event) => {
  let element_btn_quiz = document.getElementById('btn_quiz');
  element_btn_quiz.setAttribute("class", 'inactive');
  let element_q1 = document.getElementById('q1');
  element_q1.setAttribute("class", 'active');

});

document.getElementById('a1').addEventListener('click', (event) => {
  let element_img_result = document.getElementById('img_result');
  element_img_result.setAttribute("src", 'https://33.media.tumblr.com/698fe7e467b151699acd2ecf1a7b2bca/tumblr_nw6ourqUoX1ucw7ggo4_r1_400.gif');
  let element_lb_result1 = document.getElementById('lb_result1');
  show_result();
  element_lb_result1.innerText = 'You are a PERSIAN!';
  let element_lb_result2 = document.getElementById('lb_result2');
  show_result();
  element_lb_result2.innerText = 'Known for their long hair and squashed faces, this gentle breed requires regular grooming and should remain indoors only. Typically quiet and rather aloof, Persians dislike loud noises and enjoy lounging regally upon a cushion or a lap. Less active than other breeds, their shorter legs make them less inclined to jump and climb. Although they do enjoy the attention, they will not demand it. Persian cats are usually quite shy and reserved around strangers, but affectionate with people they know.';

});

document.getElementById('a2').addEventListener('click', (event) => {
  let element_img_result2 = document.getElementById('img_result');
  element_img_result2.setAttribute("src", 'https://24.media.tumblr.com/206b7afa6ac0672cc4a187ad36a4c73a/tumblr_mojv4dpLx01rsfkz7o1_250.gif');
  let element_lb_result12 = document.getElementById('lb_result1');
  show_result();
  element_lb_result12.innerText = 'You are a SIAMESE!';
  let element_lb_result22 = document.getElementById('lb_result2');
  show_result();
  element_lb_result22.innerText = 'Intelligent and very vocal, this breed is mischievous and talkative. When they have an opinion, they will let you know. Not all Siamese cats have the “pointed” coloring that makes the breed famous, but their distinct patterning is a natural mutation. Siamese cats bond strongly with their owners and are very loving. Siamese cats need active, stimulating play and lots of affection. Their personalities require a great deal of social interaction.';

});

document.getElementById('a3').addEventListener('click', (event) => {
  let element_img_result3 = document.getElementById('img_result');
  element_img_result3.setAttribute("src", 'https://68.media.tumblr.com/495be7a0c1b3b2fa7431b9ad510376c2/tumblr_olyo7bsDbI1tmficxo1_400.gif');
  let element_lb_result13 = document.getElementById('lb_result1');
  show_result();
  element_lb_result13.innerText = 'You are a BRITISH SHORTHAIR!';
  let element_lb_result = document.getElementById('lb_result');
  show_result();
  element_lb_result.innerText = 'The domestic shorthair is the most common breed of cat. Because they are a mix of various breeds, they can be black, grey, white, calico, tabby, tuxedo, or tortoiseshell. Their personalities vary as much as their markings, but all of them are strong and energetic. Domestic shorthair cats were originally “working cats” meant to control the rodent population on farms. They have a strong hunting instinct that needs to be satisfied with stimulating play. Their urge to hunt gives them lots of energy, even during the night. Don’t be surprised if they get a sudden attack of the zoomies at 4 a.m.';

});