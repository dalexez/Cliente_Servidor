const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const commander = await prisma.missionCommander.upsert({
      where: { name: 'Carlo' },
      update: {},
      create: {
        name: 'Carlo',
				username: 'carlogilmar',
				mainStack: 'Elixir'
      },
    });

    const commander1 = await prisma.missionCommander.upsert({
      where: { name: 'Rodrigo' },
      update: {},
      create: {
        name: 'Rodrigo',
				username: 'romarpla',
				mainStack: 'JS'
      },
    });

    const commander2 = await prisma.missionCommander.upsert({
      where: { name: 'Fer' },
      update: {},
      create: {
        name: 'Fer',
				username: 'ferzha',
				mainStack: 'Java'
      },
    });

    const commander3 = await prisma.missionCommander.upsert({
      where: { name: 'Tulio' },
      update: {},
      create: {
        name: 'Tulio',
				username: 'tulancingo',
				mainStack: 'Ruby'
      },
    });

    console.log('Create 3 explorers and 3 mission commanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();