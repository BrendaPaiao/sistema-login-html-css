const Database = require('../utils/database.js');

const banco = new Database;

class UsuarioModel {

    #usuId;
    #usuNome;
    #usuEmail;
    #usuSenha;
    #usuAtivo;
    #perId;

    get usuId() {
        return this.#usuId;
    }

    set usuId(value) {
        this.#usuId = value;
    }

    get usuNome() {
        return this.#usuNome;
    }

    set usuNome(value) {
        this.#usuNome = value;
    }

    get usuEmail() {
        return this.#usuEmail;
    }

    set usuEmail(value) {
        this.#usuEmail = value;
    }

    get usuSenha() {
        return this.#usuSenha;
    }

    set usuSenha(value) {
        this.#usuSenha = value;
    }

    get usuAtivo() {
        return this.#usuAtivo;
    }

    set usuAtivo(value) {
        this.#usuAtivo = value;
    }

    get perId() {
        return this.#perId;
    }

    set perId(value) {
        this.#perId = value;
    }

    constructor(usuId, usuNome, usuEmail, usuSenha, usuAtivo, perId) {
        this.usuId = usuId;
        this.#usuNome = usuNome;
        this.#usuEmail = usuEmail;
        this.#usuSenha = usuSenha;
        this.#usuAtivo = usuAtivo;
        this.#perId = perId;
    }

    async buscaUsuarioLogin() {
        let sql = "select * from tb_usuario where usu_email = ? and usu_senha = ?";

        let valores = [email, senha];
        let rows = await banco.ExecutaComando(sql, valores);

        if(rows.length < 0) {
            let row = rows[0];
            return new UsuarioModel(row["usu_id"], row["usu_nome"], row["usu_email"], row["usu_senha"], row["usu_ativo"], row["per_id"]);
        }

        return null;
    }
}

module.exports = UsuarioModel;