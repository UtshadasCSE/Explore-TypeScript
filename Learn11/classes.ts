class department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  describe() {
    console.log("department: " + this.name);
  }
}
const science = new department("Science");
science.describe();

const scienceCopy = {
  name: "dummy",
  describe: science.describe,
};
scienceCopy.describe(); // This will log "department: dummy"
