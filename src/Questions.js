import React, { useState } from "react";
import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, FormLabel, Button } from "@mui/material";

function Questions() {
    const[selectedValues,setSelectedValues]=useState({
        "radio-buttons-group1":"",
        "radio-buttons-group2":"",
        "radio-buttons-group3":"",
        "radio-buttons-group4":""
        
    })
    const handleRadioChange = (groupName, value) => {
        setSelectedValues((prevValues) => ({
          ...prevValues,
          [groupName]: value,
        }));
      };
      let count = 0;

    const handleSubmit=()=>{
        console.log("selected values" ,selectedValues)
        if(selectedValues){
            if(selectedValues["radio-buttons-group1"] === "80 -140 days"){
             alert("question 1 is correct")
             count++
          
            }
            else{
             alert("question 1 is wrong")
            }
         
            if(selectedValues["radio-buttons-group2"] === "75 cm"){
             alert("question 2 is correct")
             count++
            
            }
            else{
             alert("question 2 is wrong")
            }
         
            if(selectedValues["radio-buttons-group3"] === "Atlantic Ocean and Pacific Ocean"){
             alert("question 3 is correct")
             count++
           
            }
            else{
             alert("question 3 is wrong")
            }
         
            if(selectedValues["radio-buttons-group4"] === "Mixed farming"){
             alert("question 4 is correct")
             count++
            
            }
            else{
             alert("question 4 is wrong")
            }
             }
             alert(count +"Questions are correct out of 4 Questions")
             count =0;
    }
   
  return (
    <Container className="Container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons1">
              <h3>Q. The duration of monsoon in India extends for an average period of -</h3>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons1"
              name="radio-buttons-group1"   
              onChange={(e)=>handleRadioChange("radio-buttons-group1", e.target.value)}
              value={selectedValues["radio-buttons-group1"]}
            >
              <FormControlLabel value="80 -140 days" control={<Radio />} label="1) 80 -140 days" />
              <FormControlLabel value="100-120 days" control={<Radio />} label="2) 100-120 days" />
              <FormControlLabel value="90- 130 days" control={<Radio />} label="3) 90- 130 days" />
              <FormControlLabel value="100-140 days" control={<Radio />} label="4) 100-140 days" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl >
            <FormLabel id="demo-radio-buttons2">
              <h3>Q. Dry land farming in India is largely confined to areas with rainfall less than -</h3>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons2"
              name="radio-buttons-group2"
              onChange={(e)=>handleRadioChange("radio-buttons-group2", e.target.value)}
              value={selectedValues["radio-buttons-group2"]}
            >
              <FormControlLabel value="100 cm" control={<Radio />} label="1) 100 cm" />
              <FormControlLabel value="85 cm" control={<Radio />} label="2) 85 cm" />
              <FormControlLabel value="80 cm" control={<Radio />} label="3) 80 cm" />
              <FormControlLabel value="75 cm" control={<Radio />} label="4) 75cm" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons3">
              <h3>Q. The Panama Canal opened in 1914, and links -</h3>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons3"
              name="radio-buttons-group3"
              onChange={(e)=>handleRadioChange("radio-buttons-group3", e.target.value)}
              value={selectedValues["radio-buttons-group3"]}
            >
              <FormControlLabel value="Red Sea and Mediterranean Sea" control={<Radio />} label="1) Red Sea and Mediterranean Sea" />
              <FormControlLabel value="Atlantic Ocean and Pacific Ocean" control={<Radio />} label="2) Atlantic Ocean and Pacific Ocean" />
              <FormControlLabel value="Indian Ocean and Pacific Ocean" control={<Radio />} label="3) Indian Ocean and Pacific Ocean" />
              <FormControlLabel value="Adriatic Sea and Black Sea" control={<Radio />} label="4) Adriatic Sea and Black Sea" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons4">
              <h3>Q. Which one of the following terms describes the practice of growing two or more crops simultaneously on the same piece of land?</h3>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons4"
              name="radio-buttons-group4"
              onChange={(e)=>handleRadioChange("radio-buttons-group4", e.target.value)}
              value={selectedValues["radio-buttons-group4"]}
            >
              <FormControlLabel value="Crop rotation" control={<Radio />} label="1) Crop rotation" />
              <FormControlLabel value="Mixed cropping" control={<Radio />} label="2) Mixed cropping" />
              <FormControlLabel value="Intercropping" control={<Radio />} label="3) Intercropping" />
              <FormControlLabel value="Mixed farming" control={<Radio />} label="4) Mixed farming" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Button onClick={handleSubmit} variant="contained">Submit</Button>
      </Grid>
    </Container>
  );
}

export default Questions;
