import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.svg";
import { formattedMessage } from "react-intl";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <img className="header-logo" src={logo} />
            </div>
            <div className="center-content">
              <div className="child-centent">
                <div>
                  <b><formattedMessage id="homeheader.speciality" /></b>
                </div>
                <div className="sub-title"><formattedMessage id="homeheader.searchdoctor"/></div>
              </div>

              <div className="child-centent">
                <div>
                  <b><formattedMessage id="homeheader.heath-facility"/></b>
                </div>
                <div className="sub-title"><formattedMessage id="homeheader.select-room"/></div>
              </div>

              <div className="child-centent">
                <div>
                  <b><formattedMessage id="homeheader.doctor"/></b>
                </div>
                <div className="sub-title"><formattedMessage id="homeheader.select-doctor"/></div>
              </div>

              <div className="child-centent">
                <div>
                  <b><formattedMessage id="homeheader.fee"/></b>
                </div>
                <div className="sub-title"><formattedMessage id="homeheader.check-health"/></div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <span><formattedMessage id="homeheader.support"/></span>
              </div>
              <div className="language-vi">VN</div>
              <div className="language-en">EN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="head"></div>
            <div className="title1">NỀN TẢNG Y TẾ</div>
            <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
            </div>
          </div>

          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="text-child">Khám chuyên khoa</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">Khám từ xa</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-procedures"></i>
                </div>
                <div className="text-child">Khám tổng quát</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-flask"></i>
                </div>
                <div className="text-child">Xét nghiệm y học</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="text-child">Sức khỏe tâm thần</div>
              </div>

              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-teeth"></i>
                </div>
                <div className="text-child">Khám nha khoa</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
