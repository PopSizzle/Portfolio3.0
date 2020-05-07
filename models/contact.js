module.exports = function (sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });
    return Contact;
}