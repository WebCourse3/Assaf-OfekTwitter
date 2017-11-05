function User(name, role) {
	this.name = name;
	this.role = role;

	function getDescription () {
		return this.name + " role is " + this.role.roleName();
	}
}
