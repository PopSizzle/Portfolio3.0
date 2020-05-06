module.exports = function (sequelize, DataTypes) {
    var Tool = sequelize.define("Tool", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });
    // associating Tools to Users
    Tool.associate = models => {
        // each Tool can have many ProjectTools
        models.Tool.hasMany(models.ProjectTool, {
            onDelete: "cascade"    
        })
    }

    return Tool;
}