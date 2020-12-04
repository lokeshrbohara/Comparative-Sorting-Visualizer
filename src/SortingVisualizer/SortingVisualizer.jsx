import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithm/SortingAlgorithm.js';
import {getQuickSortAnimations} from '../SortingAlgorithm/QuickSort.js';
import {getBubbleSortAnimations} from '../SortingAlgorithm/BubbleSort.js';
import {getHeapSortAnimations} from '../SortingAlgorithm/HeapSort.js';
import CompareVisualizer from './CompareVisualizer';
import SetJumbotron from './GetJumbotron';
import UserInput from './UserInput';

import { Button } from 'react-bootstrap';

import './SortingVisualizer.css';

// Change this value for the speed of the animations.
var ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
//const NUMBER_OF_ARRAY_BARS = 150;

// This is the main color of the array bars.
var PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
var SECONDARY_COLOR = 'gold';

var PIVOTCOLOR = "red";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      modalshow: false,
      userip:false,
      compare:false,
      narraybars: 250,
      sarray: 10,
      theme:"Dark"
    };
    this.modalShowtoggle = this.modalShowtoggle.bind(this);
    this.modalHidetoggle = this.modalHidetoggle.bind(this);
    this.comparealgo = this.comparealgo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.themechange = this.themechange.bind(this);

    
    this.user = this.user.bind(this);


  }

  componentDidMount() {
    this.resetArray();
    this.themechange();
    //document.getElementById('yut').style.backgroundColor="black";
  }
 
  resetArray() {
    const array = [];
    this.setState({userip:false});
    if(!this.state.userip){
    for (let i = 0; i < this.state.narraybars; i++) {
      array.push(randomIntFromInterval(5, window.innerHeight-350));
    }
    this.setState({array});
  }
  }

  user(arrayy){
    this.setState({array:arrayy});
  }
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.sarray);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.sarray);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
        //console.log(i+1);
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 1;
        if(isColorChange) {
            if(i%3===0){
                const [barOneIdx, barTwoIdx, pivotidx] = animations[i];
               
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const pivotidxStyle = arrayBars[pivotidx].style;

                //const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                
                barOneStyle.backgroundColor = SECONDARY_COLOR;
                barTwoStyle.backgroundColor = SECONDARY_COLOR;
                pivotidxStyle.backgroundColor = PIVOTCOLOR;
                }, i * this.state.sarray);

            }
            else{
                
                const [barOneIdx, barTwoIdx, pivotidx] = animations[i];
                
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const pivotidxStyle = arrayBars[pivotidx].style;

                //const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
               
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
                pivotidxStyle.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.sarray);
            }
        }
        else {
            setTimeout(() => {
            
            if(animations[i].length!==0){
                const [barOneIdx, barTwoIdx, new1height, new2height] = animations[i];

                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${new2height}px`;

                const barTwoStyle = arrayBars[barTwoIdx].style;
                barTwoStyle.height = `${new1height}px`;
            }
            }, i * this.state.sarray);
        
        }
      }
    
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const animations = getHeapSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 1;
        if(isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * this.state.sarray);
        }
        else{
            setTimeout(() => {
            
                if(animations[i].length!==0){
                    const [barOneIdx, barTwoIdx, new1height, new2height] = animations[i];
    
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${new2height}px`;
    
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${new1height}px`;
                }
                }, i * this.state.sarray);
        }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 1;
        if(isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * this.state.sarray);
        }
        else{
            setTimeout(() => {
            
                if(animations[i].length!==0){
                    const [barOneIdx, barTwoIdx, new1height, new2height] = animations[i];
    
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${new2height}px`;
    
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${new1height}px`;
                }
                }, i * this.state.sarray);
        }
    }

  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  comparealgo(t){
    this.setState({compare:t});
  }
  modalShowtoggle(){
    //e.preventDefault();
    this.setState({userip:true})
    this.setState({modalshow: true});
  }
  modalHidetoggle(){
    //e.preventDefault();
    this.setState({modalshow: false});
  }
  handleChange(event){
    this.setState({narraybars: parseInt(event.target.value)}, ()=> this.resetArray());
    
  }
  handleSpeedChange(event){
    this.setState(()=>({sarray: 10-event.target.value}));
    //ANIMATION_SPEED_MS=10-event.target.value;
    //console.log(ANIMATION_SPEED_MS);
    }

  themechange(){
    //e.preventDefault();
    if(this.state.theme=="Dark")
    {
      document.documentElement.style.backgroundColor="black";
      PRIMARY_COLOR = 'turquoise';
      SECONDARY_COLOR = "gold";
      PIVOTCOLOR = "red";
      this.setState({theme:"Light"});
      var y=document.getElementsByTagName('button');
      for (var i = 0; i < y.length; i++) {
        y[i].style.color = "white";
        y[i].style.borderColor = "gold";

      }
      document.getElementById('yoiu').style.color="gold";
      document.getElementById('yoiw').style.color="gold";
      document.getElementById('yut').style.backgroundColor="black";
      document.getElementById('yut').style.color="gold";



    }
    else
    {
      document.documentElement.style.backgroundColor="#D2D6DB";
      PRIMARY_COLOR="#072F5F";
      SECONDARY_COLOR = "red";
      PIVOTCOLOR = "yellow";
      this.setState({theme:"Dark"});
      document.getElementById('yoiu').style.color="black";
      document.getElementById('yoiw').style.color="black";
      document.getElementById('yut').style.backgroundColor="#D2D6DB";
      document.getElementById('yut').style.color="#072F5F";

      var y=document.getElementsByTagName('button');
      for (var i = 0; i < y.length; i++) {
        y[i].style.color = "black";
        y[i].style.borderColor = "#072F5F";

      }
      
    }
  }


  render() {
    const {array} = this.state;
    const l = this.state.array.length;

    
    return (
      <>
      <SetJumbotron />
      {!this.state.compare &&
       <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${44/l}%`,
              margin: `0 ${22/l}%`
            }}></div>
        ))}
        <br />
        <button onClick={() => this.resetArray()}>Generate New Array</button>
      <button onClick={() => this.mergeSort()}>Merge Sort</button>
      <button onClick={() => this.quickSort()}>Quick Sort</button>
      <button onClick={() => this.heapSort()}>Heap Sort</button>
      <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
      
      <button onClick={this.modalShowtoggle}>User Input</button>
      <button onClick={(t)=>this.comparealgo(true)}>Compare</button>
      <button onClick={this.themechange}>{this.state.theme}</button>

      <div style={{display: "inline-flex"}}>
       <div id="yoiu" style={{color:"gold", margin:"10px"}}>Number of Bars:  <input type="number" value={this.state.narraybars} onChange={this.handleChange} /> </div>
       <div id="yoiw" style={{color:"gold", margin:"10px"}}>Animation Speed:  <input type="range" value={null} min="1" max="9" onChange={this.handleSpeedChange} /> </div>
       </div>
      </div>
    }


     {this.state.compare &&
        <CompareVisualizer
          compare={this.state.compare}
          comparealgo={this.comparealgo}
          th={this.themechange}
        />
      }


      {this.state.userip &&
        <UserInput
          show={this.state.modalshow}
          onHide={this.modalHidetoggle}
          user={this.user}
        />
      }
     
      

    </>
    
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}