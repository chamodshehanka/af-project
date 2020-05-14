import React, { Component } from 'react';
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/admin/Grid/GridItem.js";
import GridContainer from "../../components/admin/Grid/GridContainer.js";
import Table from "../../components/admin/Table/Table.js";
import Tasks from "../../components/admin/Tasks/Tasks.js";
import CustomTabs from "../../components/admin/CustomTabs/CustomTabs.js";
import Danger from "../../components/admin/Typography/Danger.js";
import Card from "../../components/admin/Card/Card.js";
import CardHeader from "../../components/admin/Card/CardHeader.js";
import CardIcon from "../../components/admin/Card/CardIcon.js";
import CardBody from "../../components/admin/Card/CardBody.js";
import CardFooter from "../../components/admin/Card/CardFooter.js";

import { bugs, website, server } from "../../assets/variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../assets/variables/general";

import styles from "../../assets/jss/dashboard/views/dashboardStyle";

const useStyles = makeStyles(styles);

class dashboard extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default dashboard;
