import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Grid,
  Button,
  IconButton
} from '@material-ui/core';
import { Close, NotificationsActiveOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

const NotifyDialog = (props) => {
  const { content, open, onAgree, onClose } = props;

  const { t } = useTranslation('dialog');
  return (
    <Dialog
      data-cy="dialogNotification"
      open={open}
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* <DialogTitle id="alert-dialog-title">{t("Notification")}</DialogTitle> */}
      <DialogTitle>
        <Grid container direction="row" alignItems="center">
          <Grid container item justify="flex-start" xs={1}>
            <NotificationsActiveOutlined />
          </Grid>
          <Grid container item justify="flex-start" xs={10}>
            {t('notification')}
          </Grid>
          <Grid container item justify="center" xs={1}>
            <IconButton onClick={() => onClose()}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t(`${content}`)}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onAgree()} color="primary" autoFocus>
          {t('agree')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NotifyDialog;
