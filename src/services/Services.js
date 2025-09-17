const dataResource = require('../models')

class Services {
    constructor(model) {
        this.model = model
    }

    async getPostReferencesAutor() {
        try {
            return dataResource[this.model].findAll({
                include: [{
                    model: dataResource.Autor,
                    as: 'autor',
                    attributes: ['nome'], // Inclui apenas o nome do autor
                    required: true, // Garante que apenas posts com autores sejam retornados
                }],
                order: [['id', 'ASC']],
                attributes: ['id','titulo', 'conteudo'] // Inclui apenas os atributos necessários do post
            })
        } catch (error) {
            console.error('Erro ao acessar dados do modelo:', error)
            throw error
        }

    }

    async getAutoresReferencesPost() {
        try {
            return dataResource[this.model].findAll({
                include: [{
                    model: dataResource.Post,
                    as: 'posts',
                    attributes: ['id','titulo', 'conteudo'], // Inclui apenas o título e conteúdo do post
                    required: true, // Garante que apenas autores com posts sejam retornados
                }],
                order: [['id', 'ASC']],
                attributes: ['nome'] // Inclui apenas os atributos necessários do autor
            })
        } catch (error) {
            console.error('Erro ao acessar dados do modelo:', error)
            throw error
        }
    }

    async getAll() {
        try {
            return dataResource[this.model].findAll({
                order: [['id', 'ASC']]
            })
        } catch (error) {
            console.error('Erro ao acessar dados do modelo:', error)
            throw error
        }
    }
    async getById(id) {
    try {
        return dataResource[this.model].findByPk(id, {
            include: [{
                model: dataResource.Autor,
                as: 'autor',
                attributes: ['nome'], // só o nome do autor
                required: true
            }]
        })
    } catch (error) {
        console.error('Erro ao acessar dados do modelo:', error)
        throw error
    }
}
    async create(data) {
        try {
            return dataResource[this.model].create(data)
        } catch (error) {
            console.error('Erro ao criar dados do modelo:', error)
            throw error
        }
    }
    async update(id, data) {
        try {
            return dataResource[this.model].update(data, {
                where: { id }
            })
        } catch (error) {
            console.error('Erro ao atualizar dados do modelo:', error)
            throw error
        }
    }
    async delete(id) {
        try {
            return dataResource[this.model].destroy({
                where: { id }
            })
        } catch (error) {
            console.error('Erro ao deletar dados do modelo:', error)
            throw error
        }
    }
    async getTitle(titulo) {
        try {
            return dataResource[this.model].findOne({
                 where: { titulo: { [dataResource.Sequelize.Op.like]: `%${titulo}%` } },
            include: [{
                model: dataResource.Autor,
                as: 'autor',
                attributes: ['nome'], // só o nome do autor
                required: true
            }],
            order: [['id', 'ASC']],
            attributes: ['id', 'titulo', 'conteudo'] // apenas campos necessários do post
        })
    } catch (error) {
        console.error('Erro ao acessar dados do modelo:', error)
        throw error
    }
}
    async getByName(nome) {
        try {
            return dataResource[this.model].findAll({
                where: { nome: { [dataResource.Sequelize.Op.like]: `%${nome}%` } },
            include: [{
                model: dataResource.Autor,
                as: 'autor',
                attributes: ['nome'], // só o nome do autor
                required: true
            }],
            order: [['id', 'ASC']],
            attributes: ['id', 'titulo', 'conteudo'] // apenas campos necessários do post
        })
    } catch (error) {
        console.error('Erro ao acessar dados do modelo:', error)
        throw error
    }
}
}

module.exports = Services