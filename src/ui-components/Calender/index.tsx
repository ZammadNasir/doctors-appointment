import moment from "moment";
import { useReducer, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import InputField from "ui-components/TextFeild";
import ViewImageModal from "ui-components/ViewImageModal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Add } from "@mui/icons-material";
import DatePicker from "ui-components/DatePicker";
import SelectField from "ui-components/SelectField";
import { Checkbox } from "@mui/material";
import Button from "ui-components/Button";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const now = new Date();

const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: "Big conference for important people",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: "Power lunch",
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: "Planning Meeting with Paige",
    start: new Date(2015, 3, 13, 8, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
  },
  {
    id: 11.1,
    title: "Inconvenient Conference Call",
    start: new Date(2015, 3, 13, 9, 30, 0),
    end: new Date(2015, 3, 13, 12, 0, 0),
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2015, 3, 13, 11, 30, 0),
    end: new Date(2015, 3, 13, 14, 0, 0),
  },
  {
    id: 11.3,
    title: "Quote Follow-up - Tea by Tina",
    start: new Date(2015, 3, 13, 15, 30, 0),
    end: new Date(2015, 3, 13, 16, 0, 0),
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: "Late Same Night Event",
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    end: now,
  },
  {
    id: 16,
    title: "Video Record",
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: "Dutch Song Producing",
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: "Itaewon Halloween Meeting",
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: "Online Coding Test",
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: "An overlapped Event",
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: "Phone Interview",
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: "Cooking Class",
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: "Go to the gym",
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
] as any;

export default function ReactBigCalendar() {
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      eventsData: events,
      show_modal: false,
      add: "appointment",
    }
  );

  const handleSelect = ({ start, end }: any) => {
    setState({
      show_modal: true,
    });
    console.log(start);
    console.log(end);
    const title = "";
    if (title) {
      setState({
        eventsData: [
          ...state.eventsData,
          {
            start,
            end,
          },
        ],
      });
    }
  };
  return (
    <div className="App">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="work_week"
        events={state.eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
      <ViewImageModal
        activity={state.show_modal}
        handleCloseModal={() => setState({ show_modal: false })}
        // width={"1000px"}
        width={700}
      >
        <div style={{ height: 600 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: state.add === "appointment" ? "#e6e6e6" : "white",
                fontSize: 18,
                color: "#444444",
                padding: 12,
              }}
              className="Poppins-SemiBold"
              onClick={() => setState({ add: "appointment" })}
            >
              <p className="pointer"> Add Appointment </p>
            </div>
            <div
              style={{
                background: state.add === "events" ? "#e6e6e6" : "white",
                fontSize: 18,
                color: "#444444",
                padding: 12,
              }}
              className="Poppins-SemiBold"
              onClick={() => setState({ add: "events" })}
            >
              <p className="pointer"> Add Events </p>
            </div>
          </div>

          {state.add === "appointment" ? (
            <div style={{ padding: 30 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className="fs-14">Patient</p>
                <div
                  style={{ display: "flex", gap: "2rem", alignItems: "center" }}
                >
                  <InputField placeholder="Search By Name, MR# or Phone" />
                  <div
                    className="pointer"
                    style={{
                      background: "#11438f",
                      color: "#fff",
                      padding: "4px 10px",
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Add />
                      <p style={{ whiteSpace: "nowrap" }}>Add Patient</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Date</p>
                <div style={{ marginLeft: "auto" }}>
                  <DatePicker
                    value={state.date}
                    onChange={(date) => setState({ date: date })}
                    label=""
                    variant={"outlined"}
                    show_icon={true}
                    style={{ width: 381 }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Start Time</p>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <SelectField width={"143px"} />
                  <p className="fs-14" style={{ whiteSpace: "nowrap" }}>
                    End Time
                  </p>
                  <SelectField width={"143px"} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Doctor</p>
                <div
                  style={{ display: "flex", gap: "2rem", alignItems: "center" }}
                >
                  <SelectField width={"380px"} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Procedure</p>
                <div>
                  <SelectField width={"380px"} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Comments</p>

                <textarea
                  style={{ width: 381, resize: "none", height: 60 }}
                ></textarea>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Send Confirmation?</p>

                <Checkbox />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Button value={"Add Appointment"} size="medium" />
              </div>
            </div>
          ) : (
            <div style={{ padding: 30 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Doctor</p>
                <div
                  style={{ display: "flex", gap: "2rem", alignItems: "center" }}
                >
                  <SelectField width={"380px"} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Start Time</p>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <SelectField width={"143px"} />
                  <p className="fs-14" style={{ whiteSpace: "nowrap" }}>
                    End Time
                  </p>
                  <SelectField width={"143px"} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Decription</p>

                <textarea
                  style={{ width: 381, resize: "none", height: 60 }}
                ></textarea>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <p className="fs-14">Repeat</p>

                <Checkbox />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Button value={"Create Event"} size="medium" />
              </div>
            </div>
          )}
        </div>
      </ViewImageModal>
    </div>
  );
}
