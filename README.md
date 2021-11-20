# `PROJETODESAFIODUDA`

#### `Para execução dos programas utilizamos a extenção Thunder Client no Vs Code`


- O arquivo .env deve ser criado com as seguintes informações: 

```
DB_BASE = ""    (Informar a base igual no heroku)
DB_HOST = ""    (Informar host banco de dados database)
DB_USER = ""    (Informar usuario banco de dados database)
DB_PASS = ""    (Informar senha banco de dados database)
PORT =          (informar porta localhost)
```

## Rotas principais

```
/usuarios
```

## Subrotas

```
/readeall
```

```
/readid/:id
```

```
/create
```

```
/update/:id
```

```
/delete/:id
```


## Opções de rotas banco de dados:
- Acesso usuários: 
 ``` 
 localhost:3000/usuarios
 ```

## Opções de consultas de todos itens gerados no banco de dados
### ``readall``

- Para consultar todo conjunto de informação no banco de dados, deve-se utilizar a url juntamente com a rota desejada (ex: /usuarios), com a subrota /readall conforme exemplos abaixo:

```
localhost:3000/usuarios/readall
```

-Exemplo:
```
{ 
    "_id": "6198651bedd724a0d6bd4672",
    "nome": "Thiago",
    "nomeUsuario": "thiagoVieira",
    "senha": 123456,
    "dataCriacao": "2021-11-20T03:01:47.033Z",
    "__v": 0

}
```


## Opções de consultas por id
### ``/readid/:id``

- Para consultar um determinado comnjunto de informações (ex: informações) no banco de dados, deve-se utilizar a url juntamente com a rota principal (ex: /usuarios), com a subrota /readid/[id] conforme exemplos abaixo:

```
localhost:3000/usuarios/readid/6198651bedd724a0d6bd4672
```

## Adicionando novos dados
### ``/create``

- Para adicionar novos dados deve-se utilizar a url juntamente com a rota principal (ex: /usuarios), com a subrota /create conforme exemplos abaixo:

```
localhost:3000/usuarios/create
```

```
{ 
    "nome": "",
    "nomeUsuario": "",
    "senha":  

}
```


## Atualizando dados
### ``/update/:id``

- Para atualizar os dados deve-se utilizar a url juntamente com a rota principal (ex: /usuarios), com a subrota /update/[id] conforme exemplos abaixo:

```
localhost:3000/usuarios/update/6198651bedd724a0d6bd4672
```

```
{ 
    "nome": "",
    "nomeUsuario": "",
    "senha": 
}
```


## Deletando dados
### ``/delete/:id``

- Para deletar os dados deve-se utilizar a url juntamente com a rota principal (ex: /usuarios), com a subrota /delete/[id] conforme exemplos abaixo:

```
localhost:3000/usuarios/delete/6198651bedd724a0d6bd4672
```

