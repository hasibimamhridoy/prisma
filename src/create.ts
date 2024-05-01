import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  console.log("prisma");

  //Create Data
  const result = await prisma.post.create({
    data: {
      title: "Hello",
      content: "world",
      published: true,
      authorName: "Hasib",
    },
  });
  console.log(result);
};

main();
