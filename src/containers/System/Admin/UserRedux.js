import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    // try {
    //   let res = await getAllCodeService("gender");
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //     });
    //   }
    //   console.log(res);
    // } catch (e) {
    //   console.log(e);
    // }
  }

  componentDidUpdate(preProps, preState, snapshot) {
    if (preProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
  }

  render() {
    // console.log('check state: ',this.state);
    let genders = this.state.genderArr;
    let language = this.props.language;
    console.log("Check props", this.props.genderRedux);
    return (
      <div className="user-redux-container">
        <div className="title"> Hoi dan IT</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-3">Them moi nguoi dung</div>
              <div className="col-3">
                <label>Email</label>
                <input className="form-control" type="email"></input>
              </div>
              <div className="col-3">
                <label>Password</label>
                <input className="form-control" type="password"></input>
              </div>
              <div className="col-3">
                <label>FirstName</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-3">
                <label>LastName</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-3">
                <label>Phonenumber</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-9">
                <label>Address</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-3">
                <label>Gender</label>
                <select class="form-control">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>{" "}
              </div>

              <div className="col-3">
                <label>Position</label>
                <select class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>{" "}
              </div>

              <div className="col-3">
                <label>RoleId</label>
                <select class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>{" "}
              </div>
              <div className="col-3">
                <label>Image</label>
                <input className="form-control" type="text"></input>
              </div>

              <div className="col-12 mt-3">
                <button className="primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
