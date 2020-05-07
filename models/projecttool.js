module.exports = function (sequelize, DataTypes) {
    var ProjectTool = sequelize.define("ProjectTool", {
        name: {
            type: DataTypes.STRING
        }
    });

    // associate ProjectTools with Users and Tools
    ProjectTool.associate = models => {
        // each ProjectTool belongs to one Tool
        models.ProjectTool.belongsTo(models.Tool, { onDelete: "cascade"});
        // eachProjectTool belongs to one Project
        models.ProjectTool.belongsTo(models.Project, { onDelete: "cascade" });
    }

    return ProjectTool;
}