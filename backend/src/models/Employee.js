const { Schema, model } = require('mongoose');
//Guardando en base de datos loscampos name, posicss, office, salario

const employeeSchema = new Schema({
    name: {type: String, required: true},
    position: {type: String, reqired: true},
    office: {type: String, required: true},
    salary: {type: Number, required: true},
}, {
    timestamps: true,
    versionekey: false,
})

module.exports = model('Employee', employeeSchema);