module.exports = class UserDto {
    name;
    user_id;
    isAdmin;

    constructor(model) {
        this.name = model.name;
        this.user_id = model.user_id;
        this.isAdmin = model.isAdmin;
    }
}