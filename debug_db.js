const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  try {
    const tiers = await prisma.donationTier.findMany()
    console.log('TIERS COUNT:', tiers.length)
    console.log('TIERS DATA:', JSON.stringify(tiers, null, 2))
  } catch (e) {
    console.error('ERROR FETCHING TIERS:', e)
  } finally {
    await prisma.$disconnect()
  }
}

main()
