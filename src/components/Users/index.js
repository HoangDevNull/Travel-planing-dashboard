import React from 'react';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Paper,
  Tabs,
  Button,
  Tab,
  Divider,
  TextField,
  FormControl,
  Select,
  InputLabel
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import TableTeacher from './components/TableTeacher';
import withRole from 'components/common/HOC/withRole';

import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const TeacherManager = () => {
  const history = useHistory();
  const [tabSelected, setTabSelected] = React.useState('1');
  const [sortOption, setSortOption] = React.useState('A -> Z');
  const handleTabChanges = (event, newtabSelected) => {
    setTabSelected(newtabSelected);
  };

  const handleSortTable = (e) => {
    console.log(e.target.value);
    setSortOption(e.target.value);
  };

  return (
    <Box>
      <Grid container justify="space-between">
        <Grid item>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              onClick={(event) => event.preventDefault()}
            >
              Trang chủ
            </Link>
            <Typography color="textPrimary">Tổng quan</Typography>
            <Typography color="textPrimary">Người dùng</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box my="15px" display="flex">
            <Box flex="1">
              <Typography variant="h5">Quản lý người dùng</Typography>
            </Box>

            <Button startIcon={<SystemUpdateAltIcon />}>Export</Button>
          </Box>

          <Divider />
        </Grid>
      </Grid>

      {/* Content  */}

      <Box mt="24px">
        <Paper>
          <Tabs
            value={tabSelected}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChanges}
            aria-label="disabled tabs example"
          >
            <Tab label="Tất cả" value="1" />
            <Tab label="Đã bị block" value="2" />
            <Tab label="Chưa kích hoạt" value="3" />
          </Tabs>
          <Divider />

          {/* Filter */}

          <Box display="flex" justifyContent="space-around">
            <Box my="20px" ml="24px" minWidth="400px">
              <TextField
                InputProps={{
                  startAdornment: (
                    <Box mr="8px">
                      <SearchIcon />
                    </Box>
                  )
                }}
                fullWidth
                placeholder="Tìm kiếm người dùng"
                type="search"
                variant="outlined"
              />
            </Box>
            <Box flexGrow="1" />
            <Box my="20px" mr="10px">
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Sắp xếp
                </InputLabel>
                <Select
                  native
                  value={sortOption}
                  onChange={handleSortTable}
                  label="Sắp xếp"
                >
                  <option value="desc">{'Tên người dùng từ A -> Z'}</option>
                  <option value="asc">{' Tên người dùng từ Z -> A'}</option>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Table */}

          <Box>
            <TableTeacher type={tabSelected} />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default withRole(TeacherManager, 'admin');
