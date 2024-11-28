import { Add, ArrowBackIos, Edit } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Card, CardHeader, Grid, Switch } from "@mui/material";
import classNames from "classnames";
import { doctors_data } from "dummyData";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "ui-components/Button";
import DateTimePicker from "ui-components/DateTimePicker";
import SelectField from "ui-components/SelectField";
import InputField from "ui-components/TextFeild";
import { statuses } from "utils/constants";

function DoctorsDetails(props: any) {
  const [state, setState] = React.useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      doctor_id: "",
      doctor_name: "",
      is_active: statuses[0],
      medicalspecialty: "",
      hospitalaffiliation: "",
      phonenumber: "",
      availability: "",
      appointmentduration: "",
      experience: "",

      disabled: true,
    }
  );

  const { classes } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  const get_doctor_information = () => {
    try {
      if (id) {
        let single_doctor = doctors_data.find(
          (item: any) => Number(item.doctorid) === Number(id)
        );

        if (single_doctor) {
          setState({
            doctor_id: single_doctor?.doctorid,
            doctor_name: single_doctor?.doctorname,
            is_active: single_doctor?.is_active ? statuses[0] : statuses[1],
            medicalspecialty: single_doctor.medicalspecialty,
            hospitalaffiliation: single_doctor.hospitalaffiliation,
            phonenumber: single_doctor.phonenumber,
            availability: single_doctor.availability,
            phone: single_doctor.phonenumber,
            experience: single_doctor.experience,
            appointment_duration: single_doctor.appointmentduration,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handle_update_switch = () => {
    setState({
      disabled: !state.disabled,
    });
  };

  useEffect(() => {
    if (id) {
      get_doctor_information();

      setState({
        disabled: true,
      });
    } else {
      setState({
        disabled: false,
      });
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.main_layout_padding}>
      <Card elevation={2} style={{ marginBottom: 20 }}>
        {id ? (
          <CardHeader
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>Doctor</span>
                <ArrowForwardIosIcon style={{ marginLeft: "5px" }} />
                <span style={{ marginLeft: "5px", fontSize: 24 }}>
                  {state.doctor_name}
                </span>
              </div>
            }
            action={<Switch onChange={handle_update_switch} />}
          />
        ) : (
          <CardHeader className={"red-background"} title={"Create Doctor"} />
        )}

        <div className={classes.content_padding}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={12} md={4} lg={4} item>
              <InputField
                fullWidth
                value={state.doctor_id}
                placeholder={"Doctor Id"}
                readOnly={true}
                classes={classes}
                disabled
                input_label={"Doctor Id"}
                onChange={(e: any) => {
                  const { value } = e.target;
                  setState({
                    doctor_id: value,
                  });
                }}
              />
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} item>
              <InputField
                fullWidth
                value={state.doctor_name}
                placeholder={"Doctor Name"}
                classes={classes}
                disabled={state.disabled}
                required
                input_label={"Doctor Name"}
                onChange={(e: any) => {
                  const { value } = e.target;
                  setState({
                    doctor_name: value,
                  });
                }}
              />
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} item>
              <SelectField
                options={statuses}
                value={state.is_active ?? statuses[0]}
                placeholder={"Status"}
                classes={classes}
                input_label={"Status"}
                disableClearable={true}
                readOnly={state.disabled}
                handleSelect={(event, name, value) =>
                  setState({
                    is_active: value,
                  })
                }
              />
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} item>
              <InputField
                fullWidth
                value={state.phone}
                placeholder={"Phone"}
                disabled={state.disabled}
                classes={classes}
                input_label={"Phone"}
                onChange={(e: any) => {
                  const { value } = e.target;
                  setState({
                    phone: value,
                  });
                }}
              />
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} item>
              <InputField
                fullWidth
                value={state.experience}
                placeholder={"Experience"}
                disabled={state.disabled}
                classes={classes}
                input_label={"Experience"}
                onChange={(e: any) => {
                  const { value } = e.target;
                  setState({
                    experience: value,
                  });
                }}
              />
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} item>
              <DateTimePicker
                input_label="Available Start Date"
                value={state.available_start_date}
                handleDateChange={(date: any) =>
                  setState({ available_start_date: date })
                }
                classes={classes}
                disabled={state.disabled}
              />
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} item>
              <DateTimePicker
                input_label="Available End Date"
                value={state.available_end_date}
                handleDateChange={(date: any) =>
                  setState({ available_end_date: date })
                }
                classes={classes}
                disabled={state.disabled}
              />
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} item>
              <InputField
                fullWidth
                value={state.appointment_duration}
                placeholder={"Appointment Duration"}
                classes={classes}
                disabled={state.disabled}
                input_label={"Appointment Duration"}
                onChange={(e: any) => {
                  const { value } = e.target;
                  setState({
                    appointment_duration: value,
                  });
                }}
              />
            </Grid>

            <Grid
              xs={12}
              sm={12}
              md={12}
              lg={12}
              item
              className={classNames(classes?.justify_end)}
              style={{ marginTop: "15px" }}
            >
              <Button
                size={"small"}
                value={"Back To All"}
                variant={"outlined"}
                onClick={() => {
                  navigate("/admin/doctors");
                }}
                startIcon={<ArrowBackIos />}
              />

              {id && !state?.disabled ? (
                <Button
                  size={"small"}
                  variant={"outlined"}
                  value={"Update Doctor"}
                  onClick={() => {}}
                  style={{ marginLeft: 10 }}
                  startIcon={<Edit />}
                />
              ) : null}

              {!id ? (
                <Button
                  size={"small"}
                  value={"Create Doctor"}
                  variant={"outlined"}
                  onClick={() => {}}
                  style={{ marginLeft: 10 }}
                  startIcon={<Add />}
                />
              ) : null}
            </Grid>
          </Grid>
        </div>
      </Card>
    </div>
  );
}

export default DoctorsDetails;
