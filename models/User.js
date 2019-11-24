module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user_seqs', {
		username: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},{
		// timestamps: false
	});
};
