import HomeModel from './data/Home'

module.exports = function(key, data) {
	switch(key) {
		case "/":
		let Home = new HomeModel();
		return Home.getModel(data);
		default:
			return data;
	}
}