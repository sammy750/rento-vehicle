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

const suv = [
  {
    label: "4x4 Disel Toyota Fortuner",
    value: "4x4 Disel Toyota Fortuner",
  },
  {
    label: "4x4 Disel Automatic Toyota Fortuner",
    value: "4x4 Disel Automatic Toyota Fortuner",
  },
  {
    label: "4x2 Petrol Toyota Fortuner",
    value: "4x2 Petrol Toyota Fortuner",
  },
  {
    label: "4x2 Petrol Automatic Toyota Fortuner",
    value: "4x2 Petrol Automatic Toyota Fortuner",
  }
];

const sedan = [
  {
    label:"4x4 Disel Maruti Swift",
    value:"4x4 Disel Maruti Swift"
  },
  {
    label: "4x2 Petrol Maruti Swift",
    value: "4x2 Petrol Maruti Swift",
  },
  {
    label: "4x2 Petrol Automatic Maruti Swift",
    value: "4x2 Petrol Automatic Maruti Swift",
  }
]

const hatchback = [
  {
    label:"4x4 Disel Honda City",
    value:"4x4 Disel Honda City"
  },
  {
    label: "4x2 Petrol Honda City",
    value: "4x2 Petrol Honda City"
  },
  {
    label: "4x2 Petrol Automatic Honda City",
    value: "4x2 Petrol Automatic Honda City"
  }
]

const sports = [
  
    {
      label: "Yamaha FZS-FI V3",
      value: "Yamaha FZS-FI V3",
    },
    {
      label: "Yamaha FZ-X",
      value: "Yamaha FZ-X",
    },
    {
      label: "Yamaha Fascino 125",
      value: "Yamaha Fascino 125",
    },
]

const cruiser = [
  {
    label: "KTM FZS-FI V3",
    value: "KTM FZS-FI V3",
  },
  {
    label: "KTM FZ-X",
    value: "KTM FZ-X",
  },
  {
    label: "KTM Fascino 125",
    value: "KTM Fascino 125KTM",
  }
]

export const SedanModel: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    return sedan.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
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

export const HatchbackModel: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    return hatchback.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
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

export const SuvModel: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    return suv.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
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

export const SportsModel: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    return sports.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
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

export const CruiserModel: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    return cruiser.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
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
