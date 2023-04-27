import { useNavigate } from "react-router-dom";

function UseNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate} />;
}
export default UseNavigation;
