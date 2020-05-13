module.exports = {
  isObjectPropertyEmpty: (object) =>
    Object.values(object).some((key) => key === null || key === ""),

  isAnswered: (object) => {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  },
};
