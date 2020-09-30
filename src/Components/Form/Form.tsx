import React from "react";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

interface PropsType {
  isLogin: boolean;
  login: string;
}
const ButtonTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#4D90FE",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px black",
    color: "black",
    height: "400px",
    padding: "0 30px",
    width: "300px",
    backgroundColor: "#F7F7F7",
    margin: "20px auto 0px auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formInput: {
    marginBottom: "15px",
    width: "300px",
    height: "50px",
  },
  formButton: {
    width: "310px",
    height: "50px",
    color: "white",
    marginBottom: "15px",
  },
  formHeader: {
    fontWeight: "bold",
    fontFamily: "Raleway, Arial",
    margin: "20px 0px",
    fontSize: 20,
  },
  formName: {
    fontWeight: "bold",
    fontFamily: "Raleway, Arial",
    color: "white",
    fontSize: 20,
  },
  formInputSubmit: {
  backgroundColor: '#FAFFBD',
  },

}));

const Form: React.FC<PropsType> = (props) => {
  const classes = useStyles();
  const {login , isLogin} = props;
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.formName}>MedicKabisha</div>
      <div className={classes.formHeader}>Login to Your Account</div>
      <input
        className={isLogin ? `${classes.formInput} ${classes.formInputSubmit}` : `${classes.formInput}`}
        disabled={isLogin}
        value= {isLogin ? "Admin" : ""}
        type="text"
        placeholder="UserName"
      />
      {/*
        <TextField className={classes.username} label="UserName"/>
            <TextField className={classes.password} label="Password" type="password"/>
*/}
      <input
        className={isLogin ? `${classes.formInput} ${classes.formInputSubmit}` : `${classes.formInput}`}
        disabled={isLogin}
        type="password"
        placeholder="Password"
        value= {isLogin ? "password" : ""}
      />
      <ThemeProvider theme={ButtonTheme}>
        <Button
          className={`${classes.formButton} ${login}`}
          disabled={isLogin}
          variant="contained"
          color="primary"
        >
          Login{" "}
        </Button>
      </ThemeProvider>
      <div >© Demo 2018</div>
    </form>
  );
};

export default Form;
