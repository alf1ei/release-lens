# ReleaseLens

**从 GitHub 提交记录生成有证据链的发布说明。**

ReleaseLens 比较两个 Git 引用，按 Conventional Commits 分类变更，并生成可编辑的 Markdown 发布草稿。每条变更都保留指向原始 commit 的链接。

## 功能

- GitHub Compare API：比较公开仓库的分支、标签或 commit。
- 变更分类：识别 feature、fix、performance、breaking 和 maintenance。
- SemVer 建议：根据提交信息建议 major / minor / patch。
- Demo 模式：无需 Token 即可体验。
- Markdown 草稿：复制、编辑和导出发布说明。
- 可选 GitHub Token：支持更高 API 配额及私有仓库。

## 本地运行

要求 Node.js 20.9+。

```bash
npm install
cp .env.example .env.local
npm run dev
``

访问 http://localhost:3000，点击 Load demo 体验。

## 环境变量

- `GITHUB_TOKEN`：可选，GitHub 只读访问令牌。
- `LLM_API_KEY`、`LLM_BASE_URL`、`LLM_MODEL`：为后续 AI 摘要集成预留；当前版本以确定性规则生成草稿。

## 安全边界

本项目只读取 GitHub Compare API，不会创建 Tag、发布 Release 或修改仓库。发布草稿需要人工审阅。不要提交真实密钥或 .env.local。

## License

MIT，见 [LICENSE](LICENSE)。
