import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const NavScrollTop = props => {
useEffect(() => {
window.scrollTo(0, 0);
});
return props.children;
};

export default withRouter(NavScrollTop);