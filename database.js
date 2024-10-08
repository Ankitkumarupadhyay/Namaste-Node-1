const { MongoClient } = require("mongodb");

console.log("Fetching from db");

const URL =
  "mongodb+srv://ankitupadhyay4519:5vacK5344gBY0BrN@namastenode.xrfjt.mongodb.net/";

const client = new MongoClient(URL);

const dbName = "HelloWorld";

async function main() {
  //   console.log("Connecting successfully to server");

  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  // the following code examples can be pasted here...

  const deleteResult = await collection.deleteMany({ firstName: "Nilesh" });
  console.log("Deleted documents =>", deleteResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
//   const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
// console.log('Inserted documents =>', insertResult);
