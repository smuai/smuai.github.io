import React from "react";
import "./styles.css";
import Grid from '@material-ui/core/Grid';

class Member extends React.Component {
  render() {
    let { member } = this.props;
    let { img, name, position, linkedIn } = member;

    // if(name.length > 19) {
    //   var bottom = "10px"
    //   var top = "10px"
    // } else {
    //   bottom = "24px"
    //   top = "23px"
    // }

    return (
      <div id="member">
        {/* {console.log(name.slice(0, name.lastIndexOf(' ')).toUpperCase() + `\n` + name.slice(name.lastIndexOf(' ')+1).toUpperCase())} */}
        <a href={linkedIn} target="_blank" rel="noopener noreferrer"><img className="avatar" src={img} alt="Avatar" /></a>
        <Grid item>
          <a href={linkedIn}>
            <h4 className="name"
              // style={{marginBottom: bottom, marginTop: top}}
            >
              {/* {name.length > 14 ? name.slice(0, name.lastIndexOf(' ')).toUpperCase() + `\r\n` + name.slice(name.lastIndexOf(' ')+1).toUpperCase() : name.toUpperCase()} */}
              {name.toUpperCase()}
            </h4>
          <i className="fa fa-linkedin-square" /></a>
          <h5 className="position">{position}</h5>
        </Grid>
      </div>
    );
  }
}

export default Member;