


// class OldSystem {
//     oldRequest() {
//         return "Old system response";
//     }
// }

// class Adapter {
//     private oldSystem: OldSystem;
//
//     constructor(oldSystem: OldSystem) {
//         this.oldSystem = oldSystem;
//     }
//
//     newRequest() {
//         return `Adapter: ${this.oldSystem.oldRequest()}`;
//     }
// }