import * as React from "react";
import {
  Grid,
  TextField,
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Button,
  CircularProgress
} from "@material-ui/core";
import { useStore } from "react-hookstore";
import { AccountStoreInterface } from "../state/AccountStore";
import { AccountApi } from "../backend/AccountApi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  })
);

export const Login: React.FC = () => {
  const classes = useStyles();
  let [account, setAccount] = useStore(AccountStoreInterface);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = async () => {
    try {
        setAccount({...account, isAuthenticating: true}, (state) => {
            account = state
        })
        const user = await AccountApi.login(username, password);
        setAccount({...account, isAuthenticated: true, user, isAuthenticating: false}, (state) => account = state)
      } catch (error) {
        setAccount({...account, authError: error}, (state) => account = state)
      } finally {
        setAccount({...account, isAuthenticating: false}, (state) => account = state)
      }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs>
            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmit}
              disabled={account.isAuthenticating}
            >
              Log in
            </Button>
            {account.isAuthenticating ? <CircularProgress /> : void 0}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
