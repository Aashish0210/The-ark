import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const settings = await prisma.siteSettings.findFirst();
  if (settings) {
    await prisma.siteSettings.update({
      where: { id: settings.id },
      data: { heroText: "Every great journey begins with a single step. Once gifted for The Art Donate, see the work, and please be ready—one donation at a time." }
    });
    console.log("Updated database successfully");
  } else {
    console.log("No settings found in DB, relying on fallback");
  }
}
main().catch(console.error).finally(() => prisma.$disconnect());
