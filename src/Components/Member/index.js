import React from "react";
import "./styles.css";
import Grid from '@material-ui/core/Grid';

class Member extends React.Component {
  render() {
    let { member } = this.props;
    let { img, name, position, linkedIn } = member;

    if(name.length > 19) {
      var bottom = "10px"
      var top = "10px"
    } else {
      bottom = "24px"
      top = "23px"
    }

    return (
      <div className="member" style={{justify: "center"}}>
        {/* {console.log(name.slice(0, name.lastIndexOf(' ')).toUpperCase() + `\n` + name.slice(name.lastIndexOf(' ')+1).toUpperCase())} */}
        <a href={linkedIn}><img className="avatar" src={img} alt="Avatar" /></a>
        <Grid item>
          <a href={linkedIn}><h1 style={{marginBottom: bottom, marginTop: top}}>{name.length > 14 ? name.slice(0, name.lastIndexOf(' ')).toUpperCase() + `\r\n` + name.slice(name.lastIndexOf(' ')+1).toUpperCase() : name.toUpperCase()}</h1>
          <i className="fa fa-linkedin-square" style={{fontSize: "36px"}} /></a>
          <h3 style={{marginTop: "8px"}}>{position}</h3>
        </Grid>
      </div>
    );
  }
}

export default Member;