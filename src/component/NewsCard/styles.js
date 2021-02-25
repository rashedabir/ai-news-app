import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid #202020",
    background: "#202020",
    height: "100%"
  },
  activeCard: {
    borderBottom: "10px solid #22289a",
    background: "#202020",
    height: "100%"
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    color: "white",
  },
  date:{
    color: "grey"
  },
  title: {
    padding: "0 16px",
    color: "white"
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});

export default styles;
