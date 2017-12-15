conn = new Mongo();
db = conn.getDB("usermanager");
db.createUser({ user: "john",pwd: "doe",roles: ["dbAdmin"]});