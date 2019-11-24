module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user_seqs', {
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		kor: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	},{
		// timestamps: false
	});
};
