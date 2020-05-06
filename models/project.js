module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        deployedLink: {
            type: DataTypes.STRING
        },
        repolink: {
            type: DataTypes.STRING
        }
    });
    // ASsociating projects and users
    Project.associate = models => {
        // Each Project belongs to one User
        models.Project.belongsTo(models.User, { as: "author" })
        // Each Project can have many projetTools
        models.Project.hasMany(models.ProjectTool, {
            onDelete: "cascade"
        }) 
    }

    return Project;
}