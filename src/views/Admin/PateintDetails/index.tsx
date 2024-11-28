import {
  Add,
  Bookmark,
  Delete,
  Edit,
  Message,
  Print,
  Refresh,
  Settings,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Button from "ui-components/Button";
import DatePicker from "ui-components/DatePicker";
import SelectField from "ui-components/SelectField";
import InputField from "ui-components/TextFeild";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ViewImageModal from "ui-components/ViewImageModal";

export default function HealthRecord({ classes }: any) {
  const navigate = useNavigate();
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      email_modal: false,
      delete_modal: false,
      edit_modal: false,
    }
  );
  return (
    <div className={classes.admin_layout_padding}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="Poppins-SemiBold fs-14">Health Records</p>
        <div>
          <Button
            value={<Settings style={{ fontSize: 18 }} />}
            style={{ borderRadius: 0 }}
            size="small"
          />
          &nbsp; &nbsp;
          <Button
            value={"Add Health Record"}
            style={{ borderRadius: 0 }}
            size="small"
            startIcon={<Add />}
            onClick={() => navigate("/admin/create/health-record")}
          />
        </div>
      </div>
      <br />

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <p style={{ whiteSpace: "nowrap" }}>Patient Name</p>
              <SelectField />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <p>Search</p>
              <InputField placeholder="Type term and press enter to search" />
            </div>
          </div>
          <DatePicker
            value={state.date}
            onChange={(date) => setState({ date: date })}
            label=""
            variant={"outlined"}
            show_icon={true}
          />
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
              }}
            >
              <p className="fs-12">
                <b> MR# </b>706 ,<b> Patient:</b> Beenish Faisal
              </p>
              <p className="fs-12">
                <b>Added By:</b> Dr Mehreen Abdul Jaleel
              </p>
              <p className="fs-12">
                <b>Created at:</b> 01 December, 2018 &nbsp;&nbsp;&nbsp;{" "}
                <b>Added at:</b> 01/12/2018 - 08:13PM
              </p>
              <div style={{paddingTop: 6}}>
                <Edit
                  onClick={(e) => {
                    navigate("/admin/create/health-record/1");
                    e.stopPropagation();
                  }}
                  style={{ fontSize: 18 }}
                />
                <Message
                  style={{ fontSize: 18 }}
                  onClick={(e) => {
                    setState({ email_modal: true });
                    e.stopPropagation();
                  }}
                />
                <Print style={{ fontSize: 18 }} />
                <Delete
                  onClick={(e) => {
                    setState({ delete_modal: true });
                    e.stopPropagation();
                  }}
                  style={{ fontSize: 18 }}
                />
                <Refresh
                  onClick={(e) => {
                    setState({ edit_modal: true });
                    e.stopPropagation();
                  }}
                  style={{ fontSize: 18 }}
                />
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                padding: 12,
                boxShadow: "0 1px 7px 0px rgba(0, 0, 0, 0.16)",
                borderRadius: "0px 0px 8px 8px",
              }}
            >
              Procedure : Root Canal ["14"]
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <ViewImageModal
        activity={state.email_modal}
        handleCloseModal={() => setState({ email_modal: false })}
        width={400}
      >
        <div style={{ height: 190 }}>
          <div
            style={{ paddingBottom: 4, paddingTop: 10, textAlign: "center" }}
          >
            <h4>Email Health Record To Patient</h4>
          </div>
          <hr />
          <div style={{ padding: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <p>Email to:</p>
              <div>
                <InputField placeholder="Search..." />
              </div>
            </div>
            <div style={{ paddingRight: 22 }}>
              <Button
                value={"Send"}
                size="small"
                style={{ marginTop: 18, float: "right" }}
              />
            </div>
          </div>
        </div>
      </ViewImageModal>

      <ViewImageModal
        activity={state.delete_modal}
        handleCloseModal={() => setState({ delete_modal: false })}
        width={400}
      >
        <div style={{ height: 190 }}>
          <div
            style={{ paddingBottom: 4, paddingTop: 10, textAlign: "center" }}
          >
            <h4>Confirm Delete</h4>
          </div>
          <hr />
          <div style={{ padding: 18, textAlign: "center" }}>
            <p>Are you sure you wanna delete?</p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 18,
                gap: "1rem",
              }}
            >
              <Button value={"Cancel"} size="medium" />
              <Button value={"Send"} size="medium" />
            </div>
          </div>
        </div>
      </ViewImageModal>

      <ViewImageModal
        activity={state.edit_modal}
        handleCloseModal={() => setState({ edit_modal: false })}
        width={600}
      >
        <div style={{ height: 295 }}>
          <div
            style={{ paddingBottom: 4, paddingTop: 10, textAlign: "center" }}
          >
            <h4>Edit History</h4>
          </div>
          <hr />
          <div style={{ padding: 18, textAlign: "center" }}>
            <p>Are you sure you wanna delete?</p>

            <div style={{ padding: 18 }}>
              <div>
                <div>
                  <TableContainer
                    style={{ border: "1px solid lightgrey", borderRadius: 8 }}
                  >
                    <Table>
                      <TableHead style={{ background: "#f1f1f1" }}>
                        <TableRow>
                          <TableCell>Version</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Edited By</TableCell>
                          <TableCell>Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[].length > 0 ? (
                          <TableRow>
                            <TableCell>row</TableCell>
                          </TableRow>
                        ) : (
                          <TableRow>
                            <TableCell align="center" colSpan={4}>
                              There are no records to show.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>

              <div
                style={{
                  marginTop: 18,
                }}
              >
                <Button
                  value={"Close"}
                  size="medium"
                  style={{ float: "right" }}
                  onClick={() => setState({ edit_modal: false })}
                />
              </div>
            </div>
          </div>
        </div>
      </ViewImageModal>
    </div>
  );
}
