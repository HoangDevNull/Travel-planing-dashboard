import React from "react";
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
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

import ListUser from "./components/ListUser";
import withRole from "components/common/HOC/withRole";

import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import SearchIcon from "@material-ui/icons/Search";
import NotifyDialog from "components/common/components/NotifyDialog";

function createData(
  lastName,
  email,
  address,
  phoneNumber,
  statusAccount,
  activity
) {
  return { lastName, email, address, phoneNumber, statusAccount, activity };
}

const rows = [
  createData(
    "Johny Hung",
    "JohnyHung@gmail.com",
    "Viet Nam",
    "5",
    "activated",
    "15 phút trước"
  ),
  createData("Ms.K", "Ms.K@gmail.com", "USA", "2", "blocked", "1 giờ trước"),
  createData(
    "Lisa Nguyen",
    "Lisa Nguyen@gmail.com",
    "Viet Nam",
    "3",
    "activated",
    "7 ngày trước"
  ),
  createData(
    "Retail Row",
    "Retail Row@gmail.com",
    "Singapore",
    "7",
    "activated",
    "3 phút trước"
  ),
  createData("Adam ", "Adam@gmail.com", "Viet Nam", "8", "blocked", "Bây giờ"),
  createData(
    "Rodrigo Werner",
    "rodrigo@gmail.com",
    "Viet Nam",
    "3",
    "activated",
    "15 ngày trước"
  ),
  createData(
    "Hina Bloggs",
    "hina@gmail.com",
    "Viet Nam",
    "6",
    "activated",
    "1 tháng trước"
  )
];

const TeacherManager = () => {
  const [tabSelected, setTabSelected] = React.useState("1");
  const [data, setData] = React.useState(rows);

  const [blockUsers, setBlockUsers] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [sortOption, setSortOption] = React.useState("desc");
  const handleTabChanges = (event, newtabSelected) => {
    setTabSelected(newtabSelected);
  };

  const handleSortTable = (e) => {
    const option = e.target.value;
    setSortOption(option);
    if (option === "asc") {
      setData(
        rows.sort(function (a, b) {
          return a.lastName.localeCompare(b.lastName);
        })
      );
    } else {
      rows.sort(function (a, b) {
        return b.lastName.localeCompare(a.lastName);
      });
    }
  };

  const handleBlockUser = () => {
    const users = [...data];

    users.forEach((user, i) => {
      if (blockUsers.includes(user.lastName)) {
        users[i].statusAccount = "blocked";
      }
    });
    setData(users);
    setOpen(false);
  };

  const handleOpenDialog = (listUser) => {
    setBlockUsers(listUser);
    console.log({ listUser });
    setOpen(true);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const searchedUser = rows.filter((user) => user.lastName.includes(value));

    setData(searchedUser);
    if (value === "") {
      setData(rows);
    }
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
          {/* <Tabs
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
          <Divider /> */}

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
                onChange={handleSearch}
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
                  <option value="desc">{"Tên người dùng từ A -> Z"}</option>
                  <option value="asc">{" Tên người dùng từ Z -> A"}</option>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Table */}

          <Box>
            <ListUser
              type={tabSelected}
              data={data}
              onBlockUser={handleOpenDialog}
            />
          </Box>
        </Paper>
      </Box>

      <NotifyDialog
        content={
          <>
            <Typography component="span" variant="h6">
              Bạn có chắc chắn muốn block các user đã chọn:
            </Typography>
            <br />
            {blockUsers.map((user, i) => (
              <Typography component="span" key={i} variant="body2">
                <Box component="span" fontWeight="bold">{`${user} ${
                  i !== blockUsers.length - 1 ? "," : " "
                }  `}</Box>
              </Typography>
            ))}
          </>
        }
        open={open}
        onAgree={handleBlockUser}
        onClose={() => {
          setOpen(false);
        }}
      />
    </Box>
  );
};

export default withRole(TeacherManager, "admin");
