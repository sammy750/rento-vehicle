import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

import {WheelsRadio} from "./WheelsRadio"



const cars = [
  {
    label:"hatchback",
    value:"hatchback"
  },
  {
    label:"suv",
    value:"suv"
  },
  {
    label:"sedan",
    value:"sedan"
  }
]

 const bikes = [
   {
     label:"sports",
     value:"sports"
   },
   {
     label:"cruiser",
     value:"cruiser"
   }
 ]




// const options = [


//   {WheelsRadio ==  ? cars : bikes}

 






//   // {
//   //   label: "hatchback",
//   //   value: "hatchback",
//   // },
//   // {
//   //   label: "suv",
//   //   value: "suv",
//   // },
//   // {
//   //   label: "sedan",
//   //   value: "sedan"
//   // },
//   // {
//   //   label: "sports",
//   //   value: "sports",
//   // },
//   // {
//   //   label: "cruiser",
//   //   value: "cruiser",
//   // },


// ];

export const CarRadio: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    if(cars){
      return cars.map((singleOption) => (
        <FormControlLabel
          value={singleOption.value}
          label={singleOption.label}
          control={<Radio />}
        />
      ));
    }
  };

  return (
  <>
    <FormControl >
      <FormLabel >{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
    </>
  );
};

export const BikeRadio: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    if(cars){
      return bikes.map((singleOption) => (
        <FormControlLabel
          value={singleOption.value}
          label={singleOption.label}
          control={<Radio />}
        />
      ));
    }
  };

  return (
  <>
    <FormControl >
      <FormLabel >{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
    </>
  );
};
