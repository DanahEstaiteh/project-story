import React from "react";
import Link from "@material-ui/core/Link";
import logo from "../Images/pos-icon.png";
import UserImage from "../Images/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faUsers,
  faCogs,
  faArchive,
  faBookmark,
  faDollarSign,
  faChartLine,
  faSignOutAlt,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  headerListLeft: {
    display: "flex",
    padding: "40px 40px 40px 0px",
    alignItems: "center",
    zIndex: 1,
    top: 0,
  },
  header: {
    position: "sticky",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1,
    width: "100%",
    top: 0,
    height: "70px",
    boxShadow: "2px 2px 2px 1px grey",
  },
  item: {
    listStyleType: "none",
    color: "gray",
    paddingLeft: "30px",
  },
  headerLink: {
    color: "gray",
    paddingLeft: "3px",
  },
  UserImage: {
    width: "30px",
    height: "30px",
  },
  UserType: {
    paddingLeft: "10px",
  },
  headerListRight: {
    display: "flex",
    padding: "40px 0px 40px 40px",
    alignItems: "center",
    color: "gray",
  },
  itemDrop: {
    paddingRight: "0px",
  },
  arrowDropDown: {
    color: "gray",
  },
});

const preventDefault = (event: React.MouseEvent<HTMLElement>) =>
  event.preventDefault();

interface HeaderItemProps {
  IconClass: IconProp;
  LinkHref: string;
  Name: string;
}

const HeaderItem: React.FC<HeaderItemProps> = (props) => {
  const classes = useStyles();
  const { IconClass, LinkHref, Name } = props;
  return (
    <li className={classes.item}>
      <FontAwesomeIcon icon={IconClass} />
      <Link
        href={LinkHref}
        onClick={preventDefault}
        className={classes.headerLink}
      >
        {Name}
      </Link>
    </li>
  );
};
const LanguageList: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List>
      <ListItem>
        <LanguageIcon />
        {open ? (
          <ArrowDropUpIcon onClick={handleClick} />
        ) : (
          <ArrowDropDownIcon onClick={handleClick} />
        )}
      </ListItem>
    </List>
  );
};
const PosHeader = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <img src={logo} alt="poslogo" />

      <ul className={classes.headerListLeft}>
        <HeaderItem IconClass={faCreditCard} LinkHref="#" Name="POS" />
        <HeaderItem IconClass={faArchive} LinkHref="#" Name="Products" />
        <HeaderItem IconClass={faUsers} LinkHref="#" Name="People" />
        <ArrowDropDownIcon className={classes.arrowDropDown} />
        <HeaderItem IconClass={faMoneyBill} LinkHref="#" Name="Sales" />
        <HeaderItem IconClass={faDollarSign} LinkHref="#" Name="Expense" />
        <HeaderItem IconClass={faBookmark} LinkHref="#" Name="Categories" />
        <ArrowDropDownIcon className={classes.arrowDropDown} />
        <HeaderItem IconClass={faCogs} LinkHref="#" Name="Setting" />
        <HeaderItem IconClass={faChartLine} LinkHref="#" Name="Reports" />
      </ul>
      <ul className={classes.headerListRight}>
        <Avatar alt="userInfo" src={UserImage} className={classes.UserImage} />
        <div className={classes.UserType}>admin</div>
        <LanguageList />
        <FontAwesomeIcon icon={faSignOutAlt} />
      </ul>
    </header>
  );
};

export default PosHeader;
