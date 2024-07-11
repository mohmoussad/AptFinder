import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Apartment from './apartment';

class Image extends Model {
  public id!: number;
  public url!: string;
  public apartmentId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apartmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Apartment',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  },
  {
    sequelize,
    modelName: 'Image',
    tableName: 'Images'
  }
);

Image.belongsTo(Apartment, { foreignKey: 'apartmentId', as: 'apartments' });
Apartment.hasMany(Image, { foreignKey: 'apartmentId', as: 'images' });

export default Image;
