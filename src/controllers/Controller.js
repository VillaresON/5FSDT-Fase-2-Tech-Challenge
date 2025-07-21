class Controller {
    constructor(entity) {
        this.entity = entity;
    }
    async PegarTodosOsDados(req, res) {
        try {
            const data = await this.entity.getAll();
            res.status(200).json(data);
        } catch (error) {
            console.error('Erro ao obter todos os dados:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    async PegarDadosPorId(req, res) {
        const id = req.params.id;
        try {
            const data = await this.entity.getById(id);
            if (!data) {
                return res.status(404).json({ error: 'Dados não encontrados' });
            }
            res.status(200).json(data);
        } catch (error) {
            console.error('Erro ao obter dados por ID:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    async CriarDados(req, res) {
        const data = req.body;
        try {
            const createdData = await this.entity.create(data);
            res.status(201).json(createdData);
        } catch (error) {
            console.error('Erro ao criar dados:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    async AtualizarDados(req, res) {
        const id = req.params.id;
        const data = req.body;
        try {
            const updatedData = await this.entity.update(id, data);
            if (updatedData[0] === 0) {
                return res.status(404).json({ error: 'Dados não encontrados para atualização' });
            }
            res.status(200).json({ message: 'Dados atualizados com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    async DeletarDados(req, res) {
        const id = req.params.id;
        try {
            const deletedData = await this.entity.delete(id);
            if (deletedData === 0) {
                return res.status(404).json({ error: 'Dados não encontrados para exclusão' });
            }
            res.status(200).json({ message: 'Dados deletados com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar dados:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    async PegarDadosPorTitulo(req, res) {
        const titulo = req.params.titulo;
        try {
            const data = await this.entity.getTitle(titulo);
            if (!data) {
                return res.status(404).json({ error: 'Dados não encontrados' });
            }
            res.status(200).json(data);
        } catch (error) {
            console.error('Erro ao obter dados por título:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async PegarDadosPorNome(req, res) {
        const nome = req.params.nome;
        try {
            const data = await this.entity.getByName(nome);
            if (!data) {
                return res.status(404).json({ error: 'Dados não encontrados' });
            }
            res.status(200).json(data);
        } catch (error) {
            console.error('Erro ao obter dados por nome:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async PegarDadosComAutores(req, res) {
        try {
            const data = await this.entity.getPostReferencesAutor();
            res.status(200).json(data);
        } catch (error) {
            console.error('Erro ao obter dados com autores:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async PegarDadosComPosts(req, res) {
        try {
            const data = await this.entity.getAutoresReferencesPost();
            res.status(200).json(data);
        } catch (error) {
            console.error('Erro ao obter dados com posts:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}

module.exports = Controller;