const axios = require('axios').default;

const url = "http://localhost:3333/"

export default function postReserva({ nome, data, turma, datashow, horario }) {

    axios.post(url + "/reserva",
        { "name": nome, "date": data, "turma": turma, "datashow": datashow, "horario": horario, }
    )
        .then(Response => {
            console.log(Response)
        })
        .catch(console.error(error))
}