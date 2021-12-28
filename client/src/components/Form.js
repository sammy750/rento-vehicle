import React, { useState } from "react";

import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";


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
        "Rental Date",
    ];
}




function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <>
                    <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                        name="firstName"
                    />
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        margin="normal"
                        name="lastName"
                    />

                </>
            );

        case 1:
            return (
                <>
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                        name="emailAddress"
                    />

                </>
            );
        case 2:
            return (
                <>
                    <TextField
                        id="address1"
                        label="Address 1"
                        variant="outlined"
                        placeholder="Enter Your Address 1"
                        fullWidth
                        margin="normal"
                        name="address1"
                    />

                </>
            );
        case 3:
            return (
                <>
                    <TextField
                        id="cardNumber"
                        label="Card Number"
                        variant="outlined"
                        placeholder="Enter Your Card Number"
                        fullWidth
                        margin="normal"
                        name="cardNumber"
                    />

                </>
            );
        case 4:
            return (
                <>
                    <TextField
                        id="address2"
                        label="Address 2"
                        variant="outlined"
                        placeholder="Enter Your Address 2"
                        fullWidth
                        margin="normal"
                        name="address2"
                    />

                </>
            );
        default:
            return "unknown step";
    }
}



const Form = () => {


    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        ;
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
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

                    <form>{getStepContent(activeStep)}</form>
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
                        onClick={handleNext}
                    >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </>
            )}
        </div>

    )
}

export default Form;