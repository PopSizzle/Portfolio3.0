module.exports = function (sequelize, DataTypes) {
    var Tool = sequelize.define("Contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });
    return Contact;
}