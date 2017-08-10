const { div, img, p } = require('elementx');

module.exports = function PokedexGen1() {
	const PokedexGen1 =
  div({id:"pokedex"},
    div({id: "bigCircle"}, div({id: 'blueCircle'}),
    div({id: "redDot"}),
    div({id: "yellowDot"}),
    div({id: "greenDot"}),
    div({id: "screen"},
      div({id:"redButton1", class:'redButton'}),
      div({id:"redButton2", class:'redButton'}),
      div({id: 'display'},
       img({src:"#", alt: "insert pokemon name here"})
     ),
     div({id:'redCircle', class:'redButton'})
  ),
    div({id: "blackCircle", class:'redButton'}),
    div({id: "screenRed", class:'thinButton'}),
    div({id: "screenBlue", class:'thinButton'}),
    div({id: "greenRectangle"}),
    div({id: "dPad"},
      div({class:'rectangle'}),
      div({id:'verticalR', class:'rectangle'})
    ),
    div({id: "lidClosed"},
      div({id:'trapezoidLidBorder'}),
      div({id:'trapezoidLid'}),
      div({id:'yellowTriangle'},
        div({id:'innerTriangle'})
      ),
      div({id:'groove'})
    ),
    div({id: "lidOpen"},
      div({id:'trapezoidOpenBorder'}),
      div({id:'trapezoidOpenLid'}),
      div({id:'quoteScreen'},
          p('text & author pokemon')
      ),
      div({id:'blueButtons'},
        div({class:'hline'}),
        div({class:'vline a'}),
        div({class: 'vline b'}),
        div({class: 'vline c'}),
        div({class: 'vline d'})
      ),
      div({id:'grayButtons'},
        div({class:'grayDiv'})
      ),
      div({id:'one', class: 'blackButton'}),
      div({id:'two', class: 'blackButton'}),
      div({id:'firstButton', class: 'thinButton'}),
      div({id:'secondButton', class:'thinButton'}),
      div({id:'goldButton'})
    )
  )
)
};


#pokedex {
  position:absolute;
  background-color: red;
  height: 350px;
  width: 250px;
  border-radius: 10px;
  border: black solid 1px;
  box-shadow: inset 1px 1px 7px 4px #B80000;
  box-shadow:12px 8px 5px 1px gray
}

#bigCircle {
  position: absolute;
  top: 20px;
  left: 20px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: black solid 1px;
  background-color: white;
  box-shadow: inset 2px 2px 3px 3px gray
}

#blueCircle {
  position: absolute;
  left: 1.5px;
  top: 1.5px;
  height: 36px;
  width: 36px;
  border-radius: 20px;
  background-color: blue;
}

#redDot{
  position: absolute;
  left: 70px;
  top: 20px;
  border-radius: 6px;
  height: 10px;
  width: 10px;
  border: black solid 1px;
  background-color: red;
}

#yellowDot {
  position: absolute;
  left: 90px;
  top: 20px;
  border-radius: 6px;
  height: 10px;
  width: 10px;
  border: black solid 1px;
  background-color: yellow;}

#greenDot {
   position: absolute;
  left: 110px;
  top: 20px;
  border-radius: 6px;
  height: 10px;
  width: 10px;
  border: black solid 1px;
  background-color: lightgreen;
}

#screen {
  position: absolute;
  top: 80px;
  left: 25px;
  border-radius: 10px 10px 10px 30px;
  border: black solid 1px;
  height:160px;
  width:200px;
  background-color: lightgray;
  box-shadow: inset 2px 1px 2px 2px gray
}

#redButton1 {
  left: 80px;
  top: 7px;
}

#redButton2 {
  left: 110px;
  top: 7px;
}

#display {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 165px;
  border-radius: 0 0 0 20px;
  background-color: black;
  color: white;
  position: absolute;
  top: 22px;
  left: 17px;
}

.redButton{
  border: black solid 1px;
  height: 5px;
  width: 5px;
  border-radius: 10px;
  background-color: red;
  position: absolute;
}

#redCircle {
  height: 10px;
  width: 10px;
  bottom: 13px;
  left: 13px;
}

#blackCircle {
  width: 30px;
  height: 30px;
  bottom: 70px;
  border-radius: 15px;
  left: 15px;
  background-color: black;
}

#greenRectangle {
  width: 80px;
  height: 50px;
  background-color: green;
  position: absolute;
  bottom: 15px;
  left: 55px;
  border-radius: 10px;
  border: black solid 1px;
}

#screenRed {
  position: absolute;
  bottom: 85px;
  left: 60px;
  background-color: red;
  border: black solid 1px;
}

#screenBlue {
  position: absolute;
  bottom: 85px;
  left: 105px;
  background-color: blue;
  border: black solid 1px;
}

#dPad {
  width: 80px;
  height: 80px;
  background-color: transparent;
  position: absolute;
  bottom: 10px;
  left: 150px;
}

.rectangle {
  background-color: black;
  height: 30px;
  width: 80px;
  position: absolute;
  top: 25px;
  border-radius: 10px;
}

#verticalR {
  transform: rotate(90deg)
}


/* LID CLOSED */

#lidClosed {
  z-index: 1;
  box-sizing: border-box;
  position: absolute;
  background-color: red;
  top: 70px;
  height: 281px;
  width: 251px;
  border: black solid 1px;
  border-radius: 10px 0 10px 10px;
transition-duration: 1s;
}

#lidClosed:hover #yellowTriangle {
  visibility: hidden;
}

#lidClosed:hover #innerTriangle {
  visibility: hidden;
}

#lidClosed:hover {
/*     left: 255px; */
 transform: rotateY(180deg) translateX(-252px);
}

#trapezoidLidBorder {
  position: absolute;
  top: -30px;
  right: -1px;
  border-bottom: 30px solid black;
    border-left: 52px solid transparent;
    border-right: 0px solid transparent;
    height: 0;
    width: 100px;

}

#trapezoidLid {
  position: absolute;
  top: -29px;
  right: 0px;
    border-bottom: 35px solid red;
    border-left: 59px solid transparent;
    border-right: 0 solid transparent;
    height: 0;
    width: 100px;
}


#yellowTriangle {
  position: absolute;
  margin: 50% 4px;
  width: 0;
  height: 0;
  border-top: 22px solid transparent;
  border-bottom: 22px solid transparent;
  border-left:22px solid black;
}

#innerTriangle {
    position: relative;
    top: -20px;
    right: 21px;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid yellow;
}

#groove {
  position: absolute;
  border: black solid 1px;
  border-radius: 20px;
  height: 6px;
  width: 45%;
  bottom: 30px;
  left: 65px;
  box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.3)
}



/*Lid Open*/

#lidOpen {
  visibility: hidden;
  z-index: 2;
  box-sizing: border-box;
  position: absolute;
  background-color: red;
  top: 61px;
/*   left: 8px; */
  left:250px;
  height: 290px;
  width: 254px;
  border: black solid 1px;
  border-radius: 10px 0 10px 10px;
  box-shadow:12px 8px 5px 1px gray;
}

#trapezoidOpenBorder {
  transform: rotateY(180deg);
  position: absolute;
  top: -30px;
  left: 0px;
  border-bottom: 30px solid black;
    border-left: 50px solid transparent;
    border-right: 0px solid transparent;
    height: 0;
    width: 100px;

}

#trapezoidOpenLid {
  z-index: 1;
  transform: rotateY(180deg);
  position: absolute;
  top: -29px;
  left: 0px;
    border-bottom: 37px solid red;
    border-left: 61px solid transparent;
    border-right: 0 solid transparent;
    height: 0;
    width: 100px;
}

#quoteScreen {
  box-sizing: border-box;
  width: 200px;
  height: 85px;
  position: absolute;
  top: 20px;
  margin: 0 25px;
  background-color: black;
  overflow: scroll;
  color: white;
  padding: 0 5px;
/*set font to gameboy font */
}

#blueButtons {

  background-color: DeepSkyBlue;
  position: absolute;
  height: 70px;
  width: 200px;
  top: 115px;
  margin: 0 25px;
  border: black solid 1px;
}

.hline {
  width: 200px;
  background-color: black;
  height: 1px;
  position: absolute;
  margin: 34px 0;
  box-sizing: border-box;
}

.vline {
  height: 70px;
  background-color: black;
  width: 1px;
  box-sizing: border-box;
}

.a {
  position: absolute;
  left: 38px;
}

.b {
  position: absolute;
  left: 78px;
}

.c {
  position: absolute;
  left: 118px;
}

.d {
  position: absolute;
  left: 160px;
}

#grayButtons {
  position: absolute;
  height: 35px;
  width: 87px;
  background-color: lightgray;
  bottom: 55px;
  left: 25px;
  border: black solid 1px;
}

.grayDiv {
  box-sizing: border-box;
  height: 35px;
  width: 1px;
  background-color: black;
  position: absolute;
  left: 44px;
}

#blackButton {
  height: 35px;
  width: 90px;
  background-color: black;
  border-radius: 5px;
}

.one {
  position: absolute;
  left: 25px;
  bottom: 10px;
}

.two {
  position: absolute;
  left: 135px;
  bottom: 10px;
}

.thinButton {
  height: 7px;
  width: 30px;
  border-radius: 5px;
  background-color: black;
}

#firstButton {
  position: absolute;
  bottom: 90px;
  right: 60px;
}

#secondButton {
  position: absolute;
  bottom: 90px;
  right: 26px;
}

#goldButton {
  width: 25px;
  height: 25px;
  border-radius: 15px;
  position: absolute;
  background-color: gold;
  bottom: 56px;
  right: 40px;
  box-shadow: inset 1px 1px 5px 1px gray;
}

/* Keep in flow to edit*/
/* #lidOpen {
  visibility: hidden;
}

#lidClosed {
  visibility: visible;
}  */


// event listener

const lidClosed = document.getElementById('lidClosed')

const lidOpen = document.getElementById('lidOpen')

const trapezoidBorder =
document.getElementById('trapezoidLidBorder')

const trapezoidLid =
  document.getElementById('trapezoidLid')

lidClosed.addEventListener('transitionend', event => {
trapezoidBorder.setAttribute('style', 'visibility: hidden');
trapezoidLid.setAttribute('style', 'visibility:hidden');
lidClosed.setAttribute('style', 'visibility: hidden');
lidOpen.setAttribute('style', 'visibility:visible');
})
