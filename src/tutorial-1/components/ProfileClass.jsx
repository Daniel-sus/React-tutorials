import React from "react";
class ProfileClass extends React.Component {
  render() {
    const monthToStr = (number) => {
      const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ];
      return months[number + 1];
    };
    return (
      <div
        style={{
          border: "3px solid gray",
          borderRadius: "15px",
          padding: "5px 15px",
          width: "250px",
          marginBottom: "10px",
        }}
      >
        <div>
          Привет <b>{this.props.name.split(" ")[0]}!</b>
        </div>
        <div>
          Дата регистрации: {this.props.registredAt.getDate()}{" "}
          {monthToStr(this.props.registredAt.getMonth())}{" "}
          {this.props.registredAt.getFullYear()}
        </div>
      </div>
    );
  }
}
export default ProfileClass;
