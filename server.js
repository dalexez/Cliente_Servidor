const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//CORS
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

//INICIO DE CRUD EXPLORER
//Este comentario solo lo usare para encontrar mas facilmente donde inicia el CRUD al pasar el Lint lo quitare

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

app.get('/explorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

//FINAL DEL CRUD

//INICIO CRUD MISSIONCOMMANDER
app.get('/missioncommander', async (req, res) => {
  const allMissionCommanders =  await prisma.missionCommander.findMany({});
  res.json(allMissionCommanders);
});

app.get('/missioncommander/:id', async (req, res) => {
const id = req.params.id;
const missionCommander = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}});
res.json(missionCommander);
});

app.post('/missioncommander', async (req, res) => {
  const missionCommander = {
    name: req.body.name,
    username: req.body.username,
    mainStack: req.body.mainStack
   };
  const message = 'Mission Explorer creado.';
  console.log(missionCommander)
  await prisma.missionCommander.create({data: missionCommander});
  return res.json({message});
});

app.put('/missioncommander/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.missionCommander.update({
		where: {
			id: id
		},
		data: {
			mainStack: req.body.mainStack
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/missioncommander/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.missionCommander.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

//FINAL CRUD 

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});