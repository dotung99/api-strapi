import { PeerServer } from "peer";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    console.log("====== bootstrap");

    // PeerServer({
    //   path: "/",
    //   port: 9000,
    // });

    // console.log("strapi.app", strapi.app);
    // console.log("strapi.server", strapi.server.use(peerServer));
    // console.log("====== strapi.server", strapi.server.use);
  },
};
