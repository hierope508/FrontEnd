import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

class Calendar extends Component {
  state = { selectedDate: new Date() };
  handleDateChange = () => {};
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="static"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

export default Calendar;
