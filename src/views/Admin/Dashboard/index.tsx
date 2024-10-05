import BookOnlineIcon from "@mui/icons-material/BookOnline";
import GroupIcon from '@mui/icons-material/Group';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TodayIcon from '@mui/icons-material/Today';
import CustomDataTable from "ui-components/DataTable";

const dashboard_data = [
  {
    label: "Total Appointments",
    number: 6221,
    icon: <BookOnlineIcon />,
  },
  {
    label: "Registered Patients",
    number: 1664,
    icon: <HowToRegIcon />
  },
  {
    label: "Pateints Visited Today",
    number: 32,
    icon: <TodayIcon />
  },
  {
    label: "Total Users",
    number: 5,
    icon: <GroupIcon />
  },
];

const columns = [
  { id: 'patientname', label: 'Patient Name', minWidth: 170 },
  { id: 'appointmenttime', label: 'Appointment Time', minWidth: 100 },
  { id: 'doctorname', label: 'Doctor Name', minWidth: 100 },
];

const rows = [
  { patientname: 'ali', appointmenttime: "12:00", doctorname: "abdullah" },
  { patientname: 'ahmed', appointmenttime: "03:00", doctorname: "abdullah" },
  { patientname: 'fahad', appointmenttime: "03:00", doctorname: "huzaifa" },
];

export default function Dashboard({ classes }: any) {
  const DashboardCard = ({ card }: any) => {
    return (
      <div
        style={{
          boxShadow: "0 1px 7px 0px rgba(0, 0, 0, 0.16)",
          padding: "16px 32px",
        }}
      >
        <p className="Poppins-SemiBold">{card.label}</p>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p className="Poppins-Light fs-28">{card.number}</p>
          {card.icon}
        </div>
      </div>
    );
  };

  return (
    <div className={classes.admin_layout_padding}>
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {dashboard_data.map((item: any) => (
          <DashboardCard card={item} />
        ))}
      </div>

<div style={{marginTop: 200}}>
      <CustomDataTable
      columns={columns}
      // rows={rows}
      rows={[]}
      title="Appointments Today"
      rowsPerPageOptions={[5, 10, 20]}
    />
    </div>
    </div>
  );
}
