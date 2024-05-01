import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const allPost = await prisma.post.findMany();
  const singlePost = await prisma.post.findFirst({
    where: {
      id: 2,
    },
  });
  const singlePostWithThrow = await prisma.post.findFirstOrThrow({
    where: {
      id: 6,
    },
  });
  console.log({ singlePostWithThrow });
};

main();
