import { Box, Grid } from "@mui/material"

const ProbandoMui = () => {
  return (
    <>
        <Box >
            <h1>Hola</h1>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <h2 style={{width: "100%", height: "300px", backgroundColor: "red"}}>Caja uno</h2>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <h2 style={{width: "100%", height: "300px", backgroundColor: "blue"}}>Caja dos</h2>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <h2 style={{width: "100%", height: "300px", backgroundColor: "green"}}>Caja tres</h2>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default ProbandoMui