import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: "-20px",
    color: "white",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "120px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "rgba(21, 101, 192)",
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    padding: "3%",
    borderRadius: 10,
    color: "white",
    backgroundColor: "rgba(21, 101, 192)",
    margin: "0 12px",
    marginBottom: "10px",
    textAlign: "center",
    height: "25vmin",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "170px",
      height: "initial",
      marginTop: "15px",
      "&:nth-of-type(1)": {
        marginBottom: "12px",
      },
    },
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  logoContainer: {
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  },
  alanLogo: {
    height: "35vmin",
    borderRadius: "16%",
    padding: "0 5%",
    margin: "3% 0",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin",
    },
  },
  card2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    width: "350px",
    height: "300px",
    padding: "20px",
    borderRadius: 10,
    color: "white",
    marginTop: "30px",
    marginBottom: "10px",
  },
}));
