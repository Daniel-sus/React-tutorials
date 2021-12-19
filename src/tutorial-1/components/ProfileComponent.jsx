const ProfileComponent = ({ name, registredAt }) => {
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
        Привет <b>{name.split(" ")[0]}!</b>
      </div>
      <div>
        Дата регистрации: {registredAt.getDate()}{" "}
        {monthToStr(registredAt.getMonth())} {registredAt.getFullYear()}
      </div>
    </div>
  );
};
export default ProfileComponent;
