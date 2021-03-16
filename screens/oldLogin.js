// The Login class is used to store RegisteredUser information relevant to their log in credentials.
// Upon RegisteredUser creation, a new Login class is created with their relevant information.
// When logging in, the credentials of this class (in SQL server) will be compared to those given.
// An instance where a Login class is referenced but does not exist must be handled outside of this class.
class oldLogin {
    // Constructor will be called *only* at time of RegisteredAccount creation after passing necessary checks preventing duplicate username/email.
    // A RegisteredAccount and Login is constructed before email confirmation and tagged as inactive until the email is verified.
    // Upon construction, separate database entries for RegisteredAccount will be associated only by userID; if email/password is changed, database entries must be modified to account for *both*. 
    // TO DO -- Implement database integration >> Login function which finds user in Login database and checks password is correct
    constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }

    // Placeholder function
    // ARGUMENTS password
    // RETURNS true if password is correct, returns false otherwise
    login(p) {
        if (this.password == p)
            return true;
        else return false;
    }

    setEmail(e) {
        this.email = e;
    }

    setUsername(u) {
        this.username = u;
    }

    setPassword(p) {
        this.password = p;
    }

    getEmail() {
        return this.email;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }
}