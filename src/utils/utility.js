export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const updateArray = (oldArray, updatedProperties) => {
  return (oldArray = updatedProperties);
};

export const checkValidity = (value, rules, newPassword) => {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    if (typeof value !== "number") {
      isValid = value.trim() !== "" && isValid;
    } else {
      isValid = value !== "" && isValid;
    }
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if (rules.EqualNewPassword) {
    isValid = value === newPassword;
  }
  if (rules.containUpperCaseLetter) {
    isValid = /[A-Z]/.test(value);
  }

  if (rules.containSpecialCahrs) {
    const format = /[`!@#$%^&*()_+\-=/\]{};':"\\|,.<>?~]/;
    const formatNums = /[0123456789]/;

    isValid = format.test(value) && isValid;
    isValid = formatNums.test(value) && isValid;
  }
  if (rules.isEmail) {
    isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
  }

  return isValid;
};

export const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function formatAMPM(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var hours = date.getHours();
  var minutes = date.getMinutes();
  let day = date.getDate();
  let month = date.getMonth();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime =
    +day + "/" + monthNames[month] + " - " + hours + ":" + minutes + " " + ampm;
  return strTime;
}
