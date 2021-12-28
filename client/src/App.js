import React from "react"
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import FormA from "./components/FormA"

import "./App.css"


const App = () => {
  return (  
    <>
    <CssBaseline />
    <Container component={Box} p={4}>
      <Paper component={Box} p={3}>
        <FormA />
      </Paper>
    </Container>
  </>
  )
}

export default App;