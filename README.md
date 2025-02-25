# Projeto buscador de Ceps
O objetivo do projeto é pesquisar CEPs em uma api chamada https://viacep.com.br
## Design do projeto
![alt text](image.png)
## API ultilizada
A API https://viacep.com.br retorna um json contendo as sequintes informações para um cep de exemplo: 6086754
```
https://viacep.com.br/ws/60867540/json/

{
  "cep": "60867-540",
  "logradouro": "Rua Inês Brasil",
  "complemento": "",
  "unidade": "",
  "bairro": "Boa Vista-Castelão",
  "localidade": "Fortaleza",
  "uf": "CE",
  "estado": "Ceará",
  "regiao": "Nordeste",
  "ibge": "2304400",
  "gia": "",
  "ddd": "85",
  "siafi": "1389"
}
```
## Funcionalidades
- [x] Busca do CEP
- [x] Limpar dados
- [ ] Melhorado o design
- [ ] Responsividade
- [ ] Rodapé

## Observações
> [!NOTE]
> Projeto feito na disciplina de programação web I do curso ADS do IFCE de Jaguaruana.

> [!IMPORTANT]
> ALguns CEPSs podem não conter todas as informações.

## Contatos

Email: nicholas.rocha06@aluno.ifce.edu.br