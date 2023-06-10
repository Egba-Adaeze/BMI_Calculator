import React,{useState} from 'react';
import { IoFastFoodSharp } from "react-icons/io5";
import {CgGym} from "react-icons/cg";
import { FaBed} from "react-icons/fa";
import {BsGenderAmbiguous} from "react-icons/bs";
import {FaBirthdayCake} from "react-icons/fa";
import {GiMuscleUp} from "react-icons/gi" ;
import {MdChildCare} from "react-icons/md";
import { BiChild } from "react-icons/bi";
import style_Calculator from "../Components/style_Calculator.css";

import man from "../Images/man.PNG";

export default function Calculator() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState('');

    const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      setResult('Please enter valid weight and height.');
      return;
    }
    let bmi;
    if (unit === 'metric') {
      bmi = weightValue / (heightValue * heightValue);
    } else {
      bmi = (weightValue   / (heightValue * heightValue)) *703 ;
    }

    const category = getBMICategory(bmi);

    setResult(`Your BMI is ${bmi.toFixed(1)} (${category})`);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <div>

      <div className='form1'>
        <p className='large'> Body Mass Index Calculator</p>

        <p className='word'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,</p>


        <div className='form2'>
          <h2>Enter your details below</h2>
          <div className='radios'>
            <input type='radio' value='Metric' name='units' checked={unit === 'metric'} onChange={() => setUnit('metric')} className='metric-radio'  /> Metric
            <input type='radio' value='Imperial' name='units' checked={unit === 'imperial'} onChange={() => setUnit('imperial')} className='imperial-radio' /> Imperial
          </div>
          <div className='height-weight'>
            <label htmlFor="height">Height</label>
            <label htmlfor="weight">Weight</label>
          </div>
            <div className='inputs'>
            <input type="number" id="height" placeholder='0' value={height} onChange={(e) =>setHeight(e.target.value)}  />
            <input type="number" id="weight" placeholder='0' value={weight} onChange={(e) => setWeight(e.target.value)} />
           
            </div>
            <button className='big-btn' onClick={calculateBMI}> <b>Welcome!</b><br/><br/> Enter your height and weight and you shall see your result here: {result}</button>
        </div>
      </div>


<div className='section2'>
<div className='img-container'>
<img src={man} alt="man" />;
</div>
<div className='text-container'>
  <h2 className='larger'>What your IBM Result Means</h2>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
</div>
   </div> 

      <div className='section3'>
        <div>
          <p><IoFastFoodSharp /></p>
          <h4>Healthy eating</h4>
          <p className='just'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipisci</p>
        </div>
        <div>
          <p><CgGym/></p>
          <h4>Regular Exercise</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipisci</p>
        </div>

        <div>
          <p><FaBed/></p>
          <h4>Adequate sleep</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipisci</p>
        </div>
      </div>
      <div className='section4'> 
      <div className='sub-section1'>
        <h1>Limitations of BMI</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elit.consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing eli.</p>
      </div>
      <div className='sub-section2'>
       
        <h4><BsGenderAmbiguous/> Gender</h4>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing eli</p>
      </div>
      </div>
      <div className='section5'> 
      <div className='sub-section3'>
        <h4><FaBirthdayCake/> Age</h4>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing eli</p>
      </div>
      <div className='sub-section4'>
        <h4><GiMuscleUp/> Muscle</h4>
        <p>Lorem ipsum dolor  sit amet, consectetuer adipiscing elit.consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing eli</p>
      </div>
      </div>
      <div className='section6'>
      <div className='sub-section5'>
        <h4><MdChildCare/> Pregnancy</h4>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing eli</p>
      </div>
      <div className='sub-section6'>
        <h4><BiChild/>Race</h4>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing eli</p>
      </div>
      </div>
    </div>

  )
}
