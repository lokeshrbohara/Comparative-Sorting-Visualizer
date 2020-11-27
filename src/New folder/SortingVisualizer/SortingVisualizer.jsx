import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithm/SortingAlgorithm.js';
import {getQuickSortAnimations} from '../SortingAlgorithm/QuickSort.js';
import {getBubbleSortAnimations} from '../SortingAlgorithm/BubbleSort.js';
import UserInput from './UserInput';

import { Button } from 'react-bootstrap';

import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      modalshow: false,
      userip:false,
      compare:false
    };
    this.modalShowtoggle = this.modalShowtoggle.bind(this);
    this.modalHidetoggle = this.modalHidetoggle.bind(this);
    this.comparealgo = this.comparealgo.bind(this);

    this.user = this.user.bind(this);


  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    this.setState({userip:false});
    if(!this.state.userip){
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, window.innerHeight-200));
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
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
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
                
                barOneStyle.backgroundColor = 'red';
                barTwoStyle.backgroundColor = 'red';
                pivotidxStyle.backgroundColor = 'black';
                }, i * ANIMATION_SPEED_MS);

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
                }, i * ANIMATION_SPEED_MS);
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
            }, i * ANIMATION_SPEED_MS);
        
        }
      }
    
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
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
            }, i * ANIMATION_SPEED_MS);
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
                }, i * ANIMATION_SPEED_MS);
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

  comparealgo(){
    this.setState({compare:true});
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

  render() {
    const {array} = this.state;
    const l = this.state.array.length;

    
    return (
      <>
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
      <button onClick={() => this.testSortingAlgorithms()}>
        Test Sorting Algorithms (BROKEN)
      </button>
      <button onClick={this.modalShowtoggle}>Show Modal</button>
      <button onClick={this.comparealgo}>Compare</button>
       
      </div>
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