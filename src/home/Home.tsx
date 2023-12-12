import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container, Box } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

export default function Home() {
  const [Sucursal, setSucursal] = React.useState("");

  const handleChangeSucursal = (event: SelectChangeEvent) => {
    setSucursal(event.target.value as string);
  };
  const [Servicio, setServicio] = React.useState("");

  const handleChangeServicio = (event: SelectChangeEvent) => {
    setServicio(event.target.value as string);
  };

  return (
    <Container sx={{ marginBottom: "32px" }}>
      <Stack spacing={4} alignItems="center">
        <Box
          sx={{
            width: 300,
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField
            fullWidth
            label="Escribir nombre completo"
            id="Nombre Completo"
          />
        </Box>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <InputLabel id="demo-simple-select-label">
            Seleccionar Sucursal
          </InputLabel>
          <Select
            sx={{
              width: 150,
              maxWidth: "100%",
              color: "#F2E5D5",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Sucursal}
            label="Seleccionar Sucursal"
            onChange={handleChangeSucursal}
          >
            <MenuItem value={"Tapiales"}>Tapiales</MenuItem>
            <MenuItem value={"Piedra Buena"}>Piedra Buena</MenuItem>
          </Select>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <InputLabel id="demo-simple-select-label">
            Seleccionar Servicio
          </InputLabel>
          <Select
            sx={{
              width: 150,
              maxWidth: "100%",
              color: "#F2E5D5",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Servicio}
            label="Seleccionar Servicio"
            onChange={handleChangeServicio}
          >
            <MenuItem value={"Servicio de Extensiòn de pestañas"}>
              Servicio de Extensiòn de pestañas
            </MenuItem>
            <MenuItem value={"Servicio de Cejas"}>Servicio de Cejas</MenuItem>
            <MenuItem value={"Servicio de Alisados y Tratamientos capilares"}>
              Servicio de Alisados y Tratamientos capilares
            </MenuItem>
          </Select>
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box color={"white"}>
            <DateRangeCalendar
              calendars={1}
              sx={{
                color: "white",
                ":not(.Mui-selected)": {
                  borderColor: "#fff",
                  color: "#fff",
                },
              }}
            />
          </Box>
          <TimePicker
            label="Seleccionar Horario"
            sx={{ width: 300, maxWidth: "100%", color: "#F2E5D5" }}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ width: 300, maxWidth: "100%", color: "#F2E5D5" }}
          >
            Reservar
          </Button>
        </LocalizationProvider>
      </Stack>
    </Container>
  );
}
