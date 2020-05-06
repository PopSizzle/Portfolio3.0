module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
         type: DataTypes.STRING,
         allowNull: false   
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    })
    // associating Users to Projects
    User.associate = models => {
        // Each user can have many projects
        models.User.hasMany(models.Project, {
            onDelete: "cascade"
        })
    }

    return User;
}