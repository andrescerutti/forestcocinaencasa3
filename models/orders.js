// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Orders = sequelize.define('orders', {
    checkOutSessionId: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    code: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    addressableType: {
      type: DataTypes.STRING,
    },
    addressableId: {
      type: DataTypes.BIGINT,
    },
    deliveryProvider: {
      type: DataTypes.STRING,
    },
    dateDelivery: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    referenceNumber: {
      type: DataTypes.STRING,
    },
    reason: {
      type: DataTypes.STRING,
    },
    paidDelivery: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    comment: {
      type: DataTypes.STRING,
    },
    storeId: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'orders',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Orders.associate = (models) => {
    Orders.belongsTo(models.kits, {
      foreignKey: {
        name: 'kitIdKey',
        field: 'kit_id',
      },
      as: 'kit',
    });
    Orders.belongsTo(models.users, {
      foreignKey: {
        name: 'userIdKey',
        field: 'user_id',
      },
      as: 'user',
    });
    Orders.hasMany(models.reviews, {
      foreignKey: {
        name: 'orderIdKey',
        field: 'order_id',
      },
      as: 'reviews',
    });
    Orders.hasMany(models.payments, {
      foreignKey: {
        name: 'orderIdKey',
        field: 'order_id',
      },
      as: 'payments',
    });
  };

  return Orders;
};
