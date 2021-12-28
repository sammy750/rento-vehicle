import React, { useState } from "react";
import { addDays } from 'date-fns';
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { WheelsRadio } from "./WheelsRadio";
import { CarRadio, BikeRadio } from "./VehicleRadio";
import { SuvModel, SedanModel, HatchbackModel, SportsModel, CruiserModel } from "./ModelRadio";
import DatePicker from "./DatePicker"


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "No. of wheels",
    "Vehicle Type",
    "Model",
    "Rental Dates",

  ];
}


const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstname"
        key={"abc"}
        render={({ field }) => (
          <TextField

            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}

        name="lastname"
        key={""}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />


    </>
  );
};




const FormA = () => {
  const classes = useStyles();

  const methods = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      wheels: "",
      vehicletype: "",
      model: "",
    },
  });


  const [activeStep, setActiveStep] = useState(0);

  const [wheels, setWheels] = useState(null);

  const [vehicletype, setVehicletype] = useState(null);

  const steps = getSteps();

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicForm />;
      case 1:
        return (
          <>

            <WheelsRadio name={"wheels"} label={"Wheels"} />
          </>
        );

      case 2:
        return (


          <>
            {wheels === "4" && <CarRadio name={"vehicletype"} label={"Vehicle Type"} />}


            {wheels === "2" &&
              <BikeRadio name={"vehicletype"} label={"Vehicle Type"} />}

          </>
        );

      case 3:
        return (
          <>
            {vehicletype === "hatchback" && <HatchbackModel name={"model"} label={"Model"} />}

            {vehicletype === "suv" && <SuvModel name={"model"} label={"Model"} />}

            {vehicletype === "sedan" && <SedanModel name={"model"} label={"Model"} />}

            {vehicletype === "sports" && <SportsModel name={"model"} label={"Model"} />}

            {vehicletype === "cruiser" && <CruiserModel name={"model"} label={"Model"} />}

          </>
          // ) ;    
        )
      case 4:
        return (
          <>
            <DatePicker name={"dates"} setDate={setDate} date={date} />
          </>
        );


      default:
        return "unknown step";
    }
  }

  const handleNext = async (e) => {



    console.log(e)

    const { firstname, lastname, wheels, vehicletype, model } = e


    setWheels(e.wheels)
    setVehicletype(e.vehicletype)
    setActiveStep(activeStep + 1)
    console.log(date)


    

      fetch('http://localhost:8080/stored', {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname, wheels, vehicletype, model, date }),
      headers: {
        'Content-Type': 'application/json', 'Accept': 'application/json'
      }
    })
      .then((data) => {
        data.json()
        setActiveStep(activeStep + 1);
      })
      .then((res) => {
        console.log(res);

      });

    

    
    




  };




  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {


          return (
            <Step key={index}>
              <StepLabel >{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <div>
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  back
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"

                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default FormA;