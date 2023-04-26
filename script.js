// &#(number);
// a : high 257 rising 225 dipping 462 falling 224
// e : 275 233 283 232
// i : 299 237 464 236
// o : 333 243 466 242
// u : 363 250 468 249
// u with 2 dots : 252


const chap1Words = ['y&#299;', 'w&#468;', 'y&#250;', '&#283;r', 'b&#464;', 'm&#257;o', 
                    'd&#462;o', 'hu&#257;', 'j&#299;', 'q&#299;', 'xi&#233;', 'xu&#283;',
                    'k&#257;f&#275;i', 'k&#283;l&#232;', 'k&#462oy&#257;', 'hu&#466;gu&#333;',
                    'd&#236;t&#250;', 'f&#275;ij&#299;', 'm&#225;ob&#464;', '&#283;rj&#299;'];

const chap1Meanings = ['clothes', '5', 'fish', 'ear', 'pen', 'cat',
                       'island', 'flower', 'cockerel', '7', 'shoes', 'snow',
                       'coffee', 'cola', 'roast duck', 'hotpot',
                       'map', 'aeroplane', 'pencil', 'earphones'];

const chap1Phrases = ['N&#464; h&#462;o', 'N&#225n; h&#462;o', 'N&#464;men h&#462;o',
                      'Du&#236;buq&#464;', 'M&#233;i gu&#257nxi'];

const chap1PhrasesMeanings = ['Hello!', 'Hello! (polite)', 'Hello! (plural)',
                              'I&aposm Sorry', 'That&aposs OK / It doesn&apost matter'];

const chap2Phrases = ['Xi&#232xie', 'B&#250; xi&#232;', 'Xi&#232xie n&#236;',
                      'B&#250; k&#232;qi', 'Z&#224;iji&#224;n'];

const chap2PhrasesMeanings = ['Thank you!', 'Sure!', 'Thank you!',
                              'You&aposre Welcome!', 'GoodBye! / Bye!'];


const chap2Words = ['s&#257;n', 'sh&#257;n', 'zh&#257;ng', 'y&#225;ng',
                    'l&#237;ng', 'c&#224;i', 'sh&#466;u', 'xi&#243;ng',
                    'y&#250;n', 'x&#299;ng', 'yu&#225;n', 'r&#233;n',
                    'chu&#225;n', 'chu&#225;ng', 'ch&#299;', 'r&#232;',
                    'b&#299;ngxi&#257ng', 'j&#299;d&#224;n', 's&#299;j&#299;', 'z&#250;qi&#250;',
                    'j&#299;ch&#462;ng', 'p&#225; sh&#257;n', 'sh&#466;ubi&#462;o', 'xi&#466;ngm&#257;o'];

const chap2Meanings = ['3', 'mountains', 'clock', 'sheep',
                      '0', 'dish', 'hand', 'bear',
                      'cloud', 'stars', 'chinese currency', 'people',
                      'boat', 'bed', 'eat', 'fan',
                      'fridge', 'egg', 'driver', 'football',
                      'airport', 'to climb a mountain', 'watch', 'panda'];

const chap3Words = ['ji&#224o', 'sh&#233;nme', 'm&#237;ngzi', 'w&#466;',
                    'sh&#236;', 'l&#462;osh&#299;', 'ma', 'xu&#233;sheng',
                    'r&#233;n', 'Zh&#333;nggu&#243;', 'M&#283;igu&#243;', 'b&#257;j&#299;s&#299;t&#462;n'];

const chap3Meanings = ['to be called', 'what', 'name', 'I',
                       'to be', 'teacher', 'used at the end of a question', 'student',
                       'person', 'China', 'America', 'Pakistan'];

const chap3Text1 = ['N&#464; ji&#462;o sh&#283;nme m&#237;ngzi?',
                    'W&#466 ji&#224;o L&#464; Yu&#232;.'];

const chap3Text1Meaning = ['What is your name?',
                           'My name is Li Yue.'];

const chap3Text2 = ['N&#464; sh&#236; l&#462;osh&#299; ma?',
                    'W&#466; b&#250; sh&#236; l&#462;osh&#299;, w&#466 sh&#236 xu&#233;sheng.'];

const chap3Text2Meaning = ['Are you a teacher?',
                           'No, I&aposm not. I&aposm a student'];

const chap3Text3 = ['N&#464; sh&#236; Zh&#333;nggu&#243; ma?',
                    'W&#466; b&#250; sh&#236; Zh&#333;nggu&#243; r&#233;n, W&#466; sh&#236; M&#283;igu&#243; r&#233;n'];

const chap3Text3Meaning = ['Are you Chinese?',
                           'No, I&aposm not. I&aposm American'];

const chap4Words = ['t&#257; (&#22909;)', 'sh&#233;i', 'de', 'H&#224;ny&#468;',
                    'n&#462;', 'gu&#243;', 'ne',
                    't&#257; (&#20170;)', 't&#243;ngxu&#233;', 'p&#233;ngyou'];

const chap4Meanings = ['she / her', 'who / whom', 'used after an attribute', 'Chinese (language)',
                       'which', 'country', 'used at the end of a question'];

const chap4Text1 = ['T&#257; (&#22909;) sh&#236; sh&#233;i?',
                    'T&#257; (&#22909;) sh&#236; w&#466; de H&#224;ny&#468; l&#462;osh&#299;, t&#257; (&#22909;) ji&#224;o L&#464; Yu&#232;.'];

const chap4Text1Meaning = ['Who is she?',
                           'She is my Chinese teacher. Her Name is Li Yue.'];

const Chap4Text2 = ['N&#464; sh&#236; n&#462; gu&#243; r&#233;n?',
                    'W&#466; sh&#236; M&#283;igu&#243; r&#233;n. N&#464; ne?',
                    'W&#466; sh&#236; Zh&#333;nggu&#243; r&#233;n'];

const chap4Text2Meaning = ['Which country are you from?',
                           'I&aposm American. What about you?',
                           'I&aposm Chinese.'];

const chap4Text3 = ['T&#257; (&#20170;) sh&#236; sh&#233;i?', 
                    'T&#257; (&#20170;) sh&#236; w&#466; de t&#243;ngxu&#233;.',
                    'T&#257; (&#22909;) ne? T&#257; (&#22909;) sh&#236; n&#464; t&#243;ngxu&#233; ma?',
                    'T&#257; (&#22909) b&#250; sh&#236; w&#466; de t&#243;ngxu&#233;, t&#257; (&#22909) sh&#236; w&#466; de p&#233;ngyou.'];

const chap4Text3Meaning = ['Who is he?',
                           'He is my classmate.',
                           'What about her? Is she your classmate?',
                           'No, she isn&apost. She is my friend.'];

const chap5Words = ['ji&#257;', 'y&#250;u', 'k&#466;u',
                    'n&#252;&#233;r', 'j&#464;', 'su&#236;', 'le', 'j&#299;nni&#225;n',
                    'du&#333;', 'd&#224;'];

const chap5Meanings = ['family', 'to have / there be', 'measure word for members of families',
                       'daughter', 'how many', 'year (of age)', 'used at the middle or end of a sentence to indicate a new circumstance (past form)', 'this year',
                       'indicating degree or extent', '(of age) old'];

const chap5Text1 = ['N&#464; ji&#257; y&#250;u j&#464; k&#466;u r&#233;n',
                    'W&#466; ji&#257; y&#250;u s&#257;n k&#466;u r&#233;n'];

const chap5Text1Meanings = ['How many people are there in your family?',
                            'My family has 3 members.'];

const chap5Text2 = ['N&#464; n&#252;&#233;r j&#464; su&#236; le?',
                    'T&#257; (&#22909;) j&#299;nni&#225;n s&#236; su&#236; le.'];

const chap5Text2Meanings = ['How old is your daughter?',
                            'She is 4 years old.'];

 const chap5Text3 = ['L&#464; l&#462;osh&#299; du&#333; d&#224; le?',
                     'T&#257; (&#22909;) j&#299;nni&#225;n w&#468;sh&#237; su&#236; le.',
                     'T&#257; (&#22909;) n&#252;&#233;r ne?',
                     'T&#257; (&#22909;) n&#252;&#233;r j&#299;nni&#225;n &#232;rsh&#237; su&#236;'];
                     
const chap5Text3Meanings = ['How old is Professor Li?',
                            'She is 50 years old.',
                            'What about her daughter?',
                            'Her daughter is 20.'];

const chap6Words = ['hu&#236;', 'shu&#333;', 'm&#257;ma',
                    'c&#224;i', 'h&#283;n', 'h&#462;och&#299;', 'zu&#242;',
                    'xi&#283;', 'H&#224;nz&#236;', 'z&#236;', 'z&#283;nme', 'd&#250;'];

const chap6Meanings = ['can / to be able to', 'to speak / to say', 'mother',
                       'dish / cuisine', 'very / quite', 'delicious / tasty', 'to make / to produce / to cook / to do',
                       'to write', 'Chinese character', 'character / word', 'how', 'to read'];

const chap6Text1 = ['N&#464; hu&#236; shu&#333; H&#224;ny&#468; ma?',
                    'W&#466; hu&#236; shu&#333; H&#224;ny&#468;.',
                    'N&#464; de m&#257;ma hu&#236; shu&#333; H&#224;ny&#468; ma?',
                    'T&#257; (&#22909;) b&#250; hu&#236; shu&#333;' ];

const chap6Text1Meanings = ['Can you speak Chinese?',
                            'Yes, I can.',
                            'Can your mother speak Chinese?',
                            'No, she can not.'];

const chap6Text2 = ['Zh&#333;nggu&#243; c&#224;i h&#462;och&#299; ma?',
                    'Zh&#333;nggu&#243; c&#224;i h&#283;n h&#462;och&#299;',
                    'N&#464 hu&#236; zu&#242; Zh&#333;nggu&#243; c&#224;i ma?',
                    'W&#466 b&#250; hu&#236; zu&#242;'];

const chap6Text2Meanings = ['Is Chinese food delicious?',
                            'Yes, quite delicious.',
                            'Can you cook Chinese food?',
                            'No, I can&apost.'];

const chap6Text3 = ['N&#464; hu&#236; xi&#283; H&#224;nz&#236; ma?',
                    'W&#466; hu&#236; xi&#283;.',
                    'Zh&#224;ge z&#236; z&#283;nme xi&#283;?',
                    'Du&#236;buq&#464;, zh&#224;ge z&#236; w&#466; hu&#236; d&#250;, b&#250; hu&#236; xi&#283;.'];

const chap6Text3Meanings = ['Can you write Chinese characters?',
                            'Yes, I can.',
                            'How do you write this character?',
                            'Sorry. I can read it, but I don&apost know how to write it.'];

/*
console.log(chap1Words);

const copyChap1Words = [...chap1Words]

// Fisher Yates Algorithm to truly shuffle an array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
        array[i] = array[j];
      array[j] = temp;
    }
  }

  // document.getElementById("next").disabled = true;

  // shuffleArray(copyChap1Words);

let count = 0;
// document.getElementById("le").innerHTML = copyChap1Words[count];

  function next(){
    count=count+1;
    document.getElementById("le").innerHTML = copyChap1Words[count];
    if(count == chap1Words.length){
        count = 0;
    } 
    document.getElementById("next").disabled = true;
  }

  function submit(){
    let index = findIndex(copyChap1Words[count], chap1Words)
    let ans = document.getElementById("answer").value;
    document.getElementById("leans").innerHTML = ans;
    if(ans.toLowerCase() == chap1Meanings[index]){
        console.log("Correct");
    }else{
        console.log("Incorrect");
    }
    document.getElementById("next").disabled = false;
  }

  function findIndex(word, arr){
    for(let i=0; i < arr.length; i++) {
        if(arr[i] == word){
            return i;
        }
    }
  }
*/

const radioButtons = document.getElementsByName('btnradiolist');

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', () => {
    let selectedChap = radioButtons[i].value;
    if(selectedChap == 1){
      populateTable(chap1Words, chap1Meanings);
    } else if(selectedChap == 2){
      populateTable(chap2Words, chap2Meanings);
    } else if(selectedChap == 3){
      populateTable(chap3Words, chap3Meanings);
    } else if(selectedChap == 4){
      populateTable(chap4Words, chap4Meanings);
    } else if(selectedChap == 5){
      populateTable(chap5Words, chap5Meanings);
    } else if(selectedChap == 6){
      populateTable(chap6Words, chap6Meanings);
    } 
    console.log('Selected color:', radioButtons[i].value);
  });
}

        function populateChap1(){
            populateTable(chap1Words, chap1Meanings);
        }

        function populateTable(arr1, arr2){
            let table = document.getElementById("insertRows");
            if(table.hasChildNodes()){
                removeAllChildNodes(table)
            }
            console.log("deleted");

            for(let i = 0; i < arr1.length; i++){
                let row = document.createElement("tr");
                let indexCell = document.createElement("th");
                indexCell.setAttribute("scope", "row")
                let wordCell = document.createElement("td");
                let meaningCell = document.createElement("td");
            
                indexCell.innerHTML = i+1;
                wordCell.innerHTML = arr1[i];
                meaningCell.innerHTML = arr2[i];

                row.appendChild(indexCell);
                row.appendChild(wordCell);
                row.appendChild(meaningCell);
                table.appendChild(row);
            }
            
            console.log("inserted");            
        }

        function removeAllChildNodes(parent){
            while(parent.firstChild){
                parent.removeChild(parent.firstChild);
            }
        }


function listall(){
  let final = chap1Words.concat(chap2Words, chap3Words, chap4Words, chap5Words, chap6Words);
  console.log(final);
  let ans = chap1Meanings.concat(chap2Meanings, chap3Meanings, chap4Meanings, chap5Meanings, chap6Meanings);
  populateTable(final, ans);
}

  

