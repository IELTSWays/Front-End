import { useState, useEffect } from "react";

// mtu
import Grid from "@mui/material/Grid";
// mtu

import ActiveCourse from "@/components/ActiveCourse";
import LastTickets from "@/components/LastTickets";
import LastOrders from "@/components/LastOrders";
import AllCharts from "@/components/AllCharts";
import DailyMessage from "@/components/DailyMessage";

import useGetProfile from "@/services/Requests/useGetProfile"

const Dashboard = () => {

  const { data, refetch } = useGetProfile();

  useEffect(() => {
    refetch()
  }, [])

  return <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={4} sm={8} md={12}>
      <DailyMessage firstName={data?.first_name} />
    </Grid>
    <Grid item xs={4} sm={8} md={6}>
      <ActiveCourse />
    </Grid>
    <Grid item xs={4} sm={8} md={6}>
      <AllCharts/>
    </Grid>
    <Grid item xs={4} sm={8} md={6}>
      <LastTickets />
    </Grid>
    <Grid item xs={4} sm={8} md={6}>
      <LastOrders />
    </Grid>
  </Grid>
  };

export default Dashboard;
