import React, { Component } from 'react';
import {
  DialogActions,
  Dialog,
  Button,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Zoom,
  Checkbox,
  Grid,
  Box,
  IconButton,
  Typography,
  withStyles,
  Avatar,
  TextField
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import IconText from './IconText';
import { Rating } from '@material-ui/lab';

const styles = (theme) => ({
  root: {
    overflow: 'unset',
    borderRadius: 20,
    maxHeight: '60%',
    margin: 15,
    minWidth: 300
  },
  dialogHead: {
    borderRadius: 20,
    background: '#fff',
    color: 'unset',
    paddingLeft: theme.spacing(4.5)
  },
  btnClose: {
    boxShadow: '0px 3px 6px #0000001A',
    position: 'absolute',
    top: -10,
    right: -10,
    background: '#fff',
    borderRadius: 12,
    cursor: 'pointer',
    transition: 'all .25s ease',
    '&:hover': {
      transform: 'translate(-4px,4px)'
    }
  },
  fontBold: {
    fontWeight: 'bold'
  }
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700]
    }
  }
}))(Button);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

/**
 * Need to split redering for only this componet
 * Whom import this will not render on every state updated
 */
class DialogImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: {}
    };
  }

  componentDidMount() {
    const { getRef } = this.props;
    getRef(this);
  }

  open = (data) => {
    this.setState({ open: true, data: data });
  };

  close = () => {
    this.setState({ open: false });
  };

  handleSave = () => {
    this.close();
  };

  render() {
    const { open, data } = this.state;
    const { classes } = this.props;
    const user = data?.user;
    return (
      <Dialog
        TransitionComponent={Transition}
        disableBackdropClick
        fullWidth
        maxWidth='md'
        open={open}
        onClose={this.close}
        classes={{
          paper: classes.root
        }}
      >
        <DialogTitle disableTypography className={classes.dialogHead}>
          <Typography variant='h6' color='textPrimary'>
            Infomation
          </Typography>

          <Box className={classes.btnClose} onClick={this.close}>
            <IconButton disabled>
              <Close color='action' />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container justify='space-around' alignItems='center'>
            <Grid item xs={12} sm={5}>
              <Typography variant='body1' color='textSecondary'>
                Posted by
              </Typography>
              <IconText
                label={
                  <Typography variant='h6' className={classes.fontBold}>
                    {user?.username}
                  </Typography>
                }
                icon={<Avatar src={user?.avatar} />}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography variant='body1' color='textSecondary'>
                  File Type:
                </Typography>
                <Typography variant='h6' className={classes.fontBold}>
                  {data?.extendtion}
                </Typography>
              </Box>
            </Grid>
            {/* Spacing */}
            <Box width='100%' mt={3} />
            {/* Spacing */}
            <Grid item xs={12} sm={5}>
              <Typography variant='body1' color='textSecondary'>
                Album
              </Typography>
              <Typography variant='h6' className={classes.fontBold}>
                {data?.category}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography variant='body1' color='textSecondary'>
                  Published date:
                </Typography>
                <Typography variant='h6' className={classes.fontBold}>
                  {data?.createdAt}
                </Typography>
              </Box>
            </Grid>
            {/* Spacing */}
            <Box width='100%' mt={3} />
            {/* Spacing */}
            <Grid item xs={12} sm={5}>
              <Typography variant='body1' color='textSecondary'>
                Viewer
              </Typography>
              <Typography variant='h6' className={classes.fontBold}>
                {data?.viewer}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography variant='body1' color='textSecondary'>
                  Rating
                </Typography>
                <Rating name='read-only' value={data?.rating} readOnly />
              </Box>
            </Grid>
            {/* Spacing */}
            <Box width='100%' mt={3} />
            {/* Spacing */}

            <Grid item xs={12} sm={11}>
              <TextField
                label='Rating'
                multiline
                placeholder='Write your note before you block this image'
                rows={5}
                variant='outlined'
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container justify='space-evenly'>
            <Box width='25%' my={2}>
              <ColorButton
                fullWidth
                variant='contained'
                onClick={this.handleSave}
              >
                Block
              </ColorButton>
            </Box>

            <Box width='25%' my={2}>
              <Button fullWidth variant='outlined' onClick={this.close}>
                cancel
              </Button>
            </Box>
          </Grid>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(DialogImage);
