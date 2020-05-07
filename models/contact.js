module.exports = function (sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,  
        },
        message: {
            type: DataTypes.TEXT,
        }
    });
    return Contact;
}