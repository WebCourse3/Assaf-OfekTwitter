function Role() {
	this.roleName = (function(){
		return "General Role"
	});
}

function AdminRole() {
	AdminRole.prototype = new Role();
	this.roleName = (function(){
		return "Admin Role"
	});
}

function UserRole() {
	UserRole.prototype = new Role();
	this.roleName = (function(){
		return "User Role"
	});
}
