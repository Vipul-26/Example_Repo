import React, {useState} from 'react';
import './FormComponent.css';
function FormComponent(props)
{
	let [error, setError] = useState("");
	let [disable1, setDisable1] = useState(false);
	let [disable2, setDisable2] = useState(false);
	let [selval1, setSelval1] = useState("kilometer");
	let [selval2, setSelval2] = useState("meter");
	let [btndis, setBtndis] = useState(true);
  let [inpval1, setInpval1] = useState("");
  let [inpval2, setInpval2] = useState("");
	let handleInput = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    if(value!=="")
    {
    	if(id==="i1")
    	{
        setDisable2(true);
    	}
    	else
    	{
        setDisable1(true);
    	}
    }
    else if(value==="")
    {
       if(id==="i1")
    	{
        setDisable2(false);
    	}
    	else
    	{
        setDisable1(false);
    	}
    }
    if(isNaN(value))
    {
      setError("Please enter a numeric value");
    }
    else
    {
    	setError("");
      if(value==="")
      {
    	  setBtndis(true);
      }
      else
      {
        setBtndis(false);
      }
      if(id==="i1")
      {
        setInpval1(value);
      }
      else
      {
        setInpval2(value);
      }
    }
  };
  let handleSelect = (event) => {
  	let id = event.target.id;
  	let value = event.target.value;
      if(id==="select1")
      {
      	setSelval1(value);
      	if(value==="kilometer")
      	{
      		setSelval2("meter");
      	}
      	else
      	{
      		setSelval2("kilometer");
      	}
      }
      else
      {
      	setSelval2(value);
      	if(value==="kilometer")
      	{
      		setSelval1("meter");
      	}
      	else
      	{
      		setSelval1("kilometer");
      	}
      }
  };
  let handleSubmit = (event) => {
       event.preventDefault();
       props.onSubmit();
       if(disable1===true)
       {
         if(selval2==="kilometer")
         {
          setInpval1(inpval2*1000);
         }
         else
         {
          setInpval1(inpval2/1000);
         }
       }
       else
       {
         if(selval1==="kilometer")
         {
          setInpval2(inpval1*1000);
         }
         else
         {
          setInpval2(inpval1/1000);
         }
       }
  };
	return (
   <div data-test="component-form" className='form'>
	  <h1 data-test="component-heading"> Conversion Application </h1>
	  <form onSubmit={handleSubmit}>
      <div className='comp'>
        <input type="text" id="i1" onChange={handleInput} disabled={disable1} value={inpval1} />
        <select id="select1" value={selval1} onChange={handleSelect}>
          <option value="kilometer">Kilometer</option>
          <option value="meter">Meter</option>
        </select>
      </div>
      <div className='comp'>
        <input type="text" id="i2" onChange={handleInput} disabled={disable2} value={inpval2} />
        <select id="select2" value={selval2} onChange={handleSelect}>
          <option value="kilometer">Kilometer</option>
          <option value="meter">Meter</option>
        </select>
      </div>
      <h3>{error}</h3>
      <button disabled={btndis} type="submit" >Convert</button>
    </form>
    </div>
  );
}
export default FormComponent;
