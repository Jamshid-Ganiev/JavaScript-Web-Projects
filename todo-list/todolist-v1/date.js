//jshint esversion:6

exports.getDate = function () {
    // returns the current date. format: Friday, June 25
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return today.toLocaleDateString("en-US", options);
};


exports.getDay = function () {
    // returns the day of the week: format: Monday
    const today = new Date();
    const options = {
        weekday: "long"
    }

    return today.toLocaleDateString("en-US", options);

}
