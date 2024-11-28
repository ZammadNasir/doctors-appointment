import { doctors_data } from "dummyData";
import { useNavigate } from "react-router-dom";
import CustomDataTable from "ui-components/DataTable";
import CircleIcon from "@mui/icons-material/Circle";

const columns = [
  { id: "doctorid", label: "Doctor ID", minWidth: 100 },
  { id: "doctorname", label: "Doctor Name", minWidth: 200 },
  { id: "is_active", label: "Status", minWidth: 200 },
  { id: "medicalspecialty", label: "Medical Specialty", minWidth: 200 },
  {
    id: "hospitalaffiliation",
    label: "Clinic/Hospital Affiliation",
    minWidth: 200,
  },
  { id: "phonenumber", label: "Phone", minWidth: 200 },
  { id: "availability", label: "Availability", minWidth: 250 },
  { id: "appointmentduration", label: "Appointment Duration", minWidth: 200 },
  { id: "experience", label: "Experience", minWidth: 100 },
  {
    id: "Patient Reviews or Ratings",
    label: "Patient Reviews or Ratings",
    minWidth: 250,
  },
];

const new_data = doctors_data.map((item: any) => {
  return {
    doctorid: item.doctorid,
    doctorname: item.doctorname,
    medicalspecialty: item.medicalspecialty,
    hospitalaffiliation: item.hospitalaffiliation,
    phonenumber: item.phonenumber,
    availability: item.availability,
    appointmentduration: item.appointmentduration,
    experience: item.experience,
    "Patient Reviews or Ratings": item["Patient Reviews or Ratings"],
    is_active: item.is_active ? (
      <span>
        Active <CircleIcon sx={{ fontSize: 10, color: "lightgreen" }} />
      </span>
    ) : (
      <span>
        Inactive <CircleIcon sx={{ fontSize: 10, color: "#d2112c" }} />
      </span>
    ),
  };
});

export default function Doctors({ classes }: any) {
  const navigate = useNavigate();
  return (
    <div className={classes.main_layout_padding}>
      <CustomDataTable
        columns={columns}
        rows={new_data}
        title="Doctors"
        onRowClick={(row: any) =>
          navigate(`/admin/doctor/details/${row.doctorid}`)
        }
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
}
