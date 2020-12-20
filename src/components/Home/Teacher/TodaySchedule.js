import React from 'react';

import {
  Grid,
  Typography,
  Divider,
  Card,
  CardHeader,
  useTheme,
  IconButton,
  Box
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import TableSubject from 'components/Home/components/TableSubject';
library.add(fab, far, fas);

function createData(subject, teacher, week, room, day, time) {
  return { subject, teacher, week, room, day, time };
}

const rows_1 = [
  createData('abc', 'Mr.T', '1->20', 'B306', 'Thứ 7', '8->9'),
  createData('xyz', 'Ms.K', '2->16', 'B305', 'Thứ 5', '8->9')
];
const rows_2 = [
  createData('abc', 'Mr.T', '1->20', 'B306', 'Thứ 7', '8->9'),
  createData('xyz', 'Ms.K', '2->16', 'B305', 'Thứ 5', '8->9'),
  createData('abc', 'Mr.T', '1->20', 'B306', 'Thứ 7', '8->9'),
  createData('xyz', 'Ms.K', '2->16', 'B305', 'Thứ 5', '8->9')
];

const TeacherHome = () => {
  const theme = useTheme();

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          action={
            <IconButton>
              <FontAwesomeIcon
                size="sm"
                color={theme.palette.primary.textColor}
                icon={['fas', 'ellipsis-v']}
              />
            </IconButton>
          }
          title={<Typography variant="h5">Lịch dạy ngày hôm nay</Typography>}
        />
        <Divider />
      </Card>
      <Box mt="20px">
        <TableSubject rows={rows_1} />
      </Box>

      <Box mt="50px">
        <Card>
          <CardHeader
            action={
              <IconButton>
                <FontAwesomeIcon
                  size="sm"
                  color={theme.palette.primary.textColor}
                  icon={['fas', 'ellipsis-v']}
                />
              </IconButton>
            }
            title={
              <Typography variant="h5">Lịch dạy các ngày khác!</Typography>
            }
          />
          <Divider />
        </Card>
      </Box>
      <Box mt="20px">
        <TableSubject rows={rows_2} />
      </Box>
    </Grid>
  );
};
export default TeacherHome;
