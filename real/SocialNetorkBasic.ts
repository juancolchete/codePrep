class SocialNetworkBasic {
  friendship: { [key: string]: { [key: string]: boolean } } = {}
  user: { [key: string]: boolean } = {}

  hasUser(name: string): boolean {
    if (this.user?.[name] == true) {
      return true;
    } else {
      return false;
    }
  }

  addUser(name: string) {
    if (this.hasUser(name)) {
      throw "user already registered"
    }
    this.user[name] = true
    this.friendship[name] = {}
  }

  hasFriendship(firstUserName: string, secondUserName: string) {
    if (this.friendship?.[firstUserName]?.[secondUserName] == true
      || this.friendship?.[secondUserName]?.[firstUserName] == true) {
      return true
    } else {
      return false
    }
  }

  addFriendship(firstUserName: string, secondUserName: string) {
    if (this.hasUser(firstUserName) == true && this.hasUser(secondUserName) == true) {
      this.friendship[firstUserName][secondUserName] = true;
    } else {
      throw "One or more specified users were not registered on the system"
    }
  }
}

const socialNetworkBasic = new SocialNetworkBasic();
socialNetworkBasic.addUser("juan")
socialNetworkBasic.addUser("jonas")
socialNetworkBasic.addUser("janete")
console.log("has user :", socialNetworkBasic.hasUser("juan"))
console.log("has user :", socialNetworkBasic.hasUser("jonas"))
console.log("has user :", socialNetworkBasic.hasUser("janete"))
console.log("has user :", socialNetworkBasic.hasUser("jan"))
socialNetworkBasic.addFriendship("juan","janete")
console.log(socialNetworkBasic.hasFriendship("juan","janete"))
console.log(socialNetworkBasic.hasFriendship("juan","jonas"))

