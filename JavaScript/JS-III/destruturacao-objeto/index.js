const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"]
}

const name = person.name
console.log(name)

// nome da variavel igual a do objeto
const { job, parents } = person
console.log(job, parents)

// pode ser qualquer nome
const [father, mother] = parents
console.log(father, mother)

function createUser({ job, parents, name }) {
	const id = Math.floor(Math.random() * 999)
	return {
		id, 
		name, 
		job, 
		parents
	}
}

const luke = createUser(person);
console.log(luke)