# TODO - GT06 Web Parser V1

## 🔴 Bugs / Correções Críticas (V1)

- [ ] **GT06Parser não compila** — referencia `GT06Packet` sem importar; usa import de `Packet` (Teste) no lugar. Corrigir import e retorno.
- [ ] **IPacketParser retorna tipo fixo `Packet` (Teste)** — precisa ser genérico ou usar tipo union (`TestePacket | GT06Packet`) para suportar múltiplos protocolos.
- [ ] **app.ts importa `TableRenderer` somente do TesteTableRenderer** — resultado do GT06 não tem como renderizar na tabela.
- [ ] **Lógica `else if` em `TesteParser.validate()` é código morto** — a terceira condição nunca é alcançada (já coberta pelas anteriores).
- [ ] **GT06Parser: lat/lng não são convertidos de hex para graus decimais** — ficam como substring hex bruta.

## 📁 Arquivos / Implementação Incompleta (V1)

- [ ] Implementar `GT06Validator.ts` (arquivo vazio)
- [ ] Implementar `TesteValidator.ts` (arquivo vazio)
- [ ] Criar `GT06TableRenderer.ts` para renderizar os campos do GT06Packet na tabela
- [ ] Mover lógica de validação dos parsers para os validators correspondentes

## 🔧 Arquitetura / Refatoração (V1)

- [ ] Renomear classe `Packet` em `TestePacket.ts` para `TestePacket` (evitar confusão com conceito genérico de "pacote")
- [ ] Criar tipo base ou interface `BasePacket` para que `TestePacket` e `GT06Packet` compartilhem um ancestral comum
- [ ] Tornar `IPacketParser` genérico (`IPacketParser<T extends BasePacket>`)
- [ ] Remover `PacketValidator.ts` (código morto — não é usado em lugar nenhum)
- [ ] Trocar `let` por `const` onde variáveis não são reatribuídas (GT06Parser)
- [ ] Substituir substring offsets mágicos no GT06Parser por constantes nomeadas / documentação do protocolo
- [ ] Corrigir inconsistência de casing nas pastas (`tablesRenderers/` vs `TablesRenderers/`)

## 🔒 Segurança (V1)

- [ ] Sanitizar valores de pacotes antes de interpolar em `innerHTML` no TableRenderer (risco de HTML injection)

## ⚙️ Tooling / DX (V1)

- [ ] Adicionar `.gitignore` (ignorar `app/js/`, `node_modules/`, `dist/`, etc.)
- [ ] Limpar arquivos JS "stale" na raiz de `app/js/` (`Packet.js`, `TableRenderer.js`, `PacketValidator.js`) — sobras de antes do refactor
- [ ] Configurar linter (ESLint)
- [ ] Configurar formatter (Prettier)
- [ ] Habilitar opções strict comentadas no `tsconfig.json` (`noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`, etc.)
- [ ] Documentar formato do protocolo GT06 (campos, offsets, tipos)

## 🧪 Testes (V1)

- [ ] Adicionar framework de testes (ex: Vitest, Jest)
- [ ] Escrever testes para `TesteParser`
- [ ] Escrever testes para `GT06Parser`
- [ ] Escrever testes para os validators
- [ ] Escrever testes para os table renderers

## 📖 Documentação (V1)

- [ ] Criar `README.md` com instruções de execução e uso ✅
- [ ] Documentar formato do protocolo Teste

## 🚀 Funcionalidades V2 (Backend)

- [ ] Migração da lógica de Parser para Node.js
- [ ] Criação de uma API REST com Express para recepção dos pacotes simulados
- [ ] Integração com MySQL (via Sequelize ORM) para armazenamento dos logs decodificados
- [ ] Documentação da API com OpenAPI/Swagger
- [ ] Adicionar dev server (ex: `vite`, `live-server`) no `package.json`

## 🎯 Melhorias UI/UX (Futuro)

- [ ] Melhorar feedback de erro na UI (hoje falha silenciosamente com `console.error`)
- [ ] Adicionar suporte a múltiplos pacotes em uma única entrada (batch decoding)
- [ ] Adicionar histórico de decodificações
- [ ] Exportar resultado da tabela (CSV / JSON)
