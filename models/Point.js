'use strict';
module.exports = (sequelize, DataTypes) => {
    var Point = sequelize.define('Trash', {
        datapoint_id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        latitude: {
            type: DataTypes.FLOAT
        },
        longitude: {
            type: DataTypes.FLOAT
        },
        kab_rank: {
            type: DataTypes.INTEGER
        },
        litter_count: {
            type: DataTypes.INTEGER
        },
        date_taken: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false,
        freezeTableName: true // Model tableName will be the same as the model name
    });

    return Point;
};


