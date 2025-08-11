# vue3-base-template

一个基于 Vue 3 的现代化前端项目基础模板，集成了主流开发工具和最佳实践，旨在帮助开发者快速搭建稳定、可扩展的 Vue 3 应用。

## ✨ 核心特性

- 核心框架：基于 Vue 3 构建，搭配 Vue Router 实现路由管理
- 状态管理：使用 Pinia 进行高效的状态管理
- 样式方案：集成 Tailwind CSS 与 Sass，支持灵活的样式开发
- 类型安全：全面支持 TypeScript，提升代码质量与可维护性
- 网络请求：内置 Axios，便于处理 HTTP 请求
- 代码规范：通过 ESLint + Prettier 保障代码风格一致性
- 提交规范：结合 Husky、commitlint 和 cz-git，实现规范化的 Git 提交
- 开发效率：集成 unplugin-auto-import 自动导入工具，减少重复代码
- 调试工具：内置 vite-plugin-vue-devtools，提升开发调试体验
- 模拟数据：通过 vite-plugin-koa-mocks 支持本地数据模拟

## 📋 环境要求

- Node.js：^20.19.0 或 >=22.12.0
- 包管理器：推荐使用 pnpm（也支持 npm/yarn）

## 🚀 快速开始

1. 克隆仓库

```
git clone https://github.com/Abu1999/vue3-base-template.git

cd vue3-base-template
```

2. 安装依赖

```
pnpm install
# 或
npm install
# 或
yarn install
```

3. 启动开发服务器

```
pnpm dev
# 或
npm run dev
# 或
yarn dev
```

4. 构建生产版本

```
pnpm build
# 或
npm run build
# 或
yarn build
```

## 📂 项目结构
vue3-base-template/
├── .husky/              # Git 钩子配置
├── .vscode/             # VS Code 工作区配置
├── mocks/               # 模拟数据文件
├── public/              # 静态资源
├── src/                 # 源代码目录
│   ├── assets/          # 资源文件（图片、样式等）
│   ├── components/      # 公共组件
│   ├── router/          # 路由配置
│   ├── stores/          # Pinia 状态管理
│   ├── utils/           # 工具函数
│   ├── styles/          # sass样式
│   ├── views/           # 页面组件
│   ├── App.vue          # 根组件
│   └── main.ts          # 入口文件
├── .editorconfig        # 编辑器配置
├── .env                 # 环境变量配置
├── .eslint.config.ts    # ESLint 配置
├── .prettierrc.json     # Prettier 配置
├── commitlint.config.cjs # Commitlint 配置
├── index.html           # HTML 入口
├── package.json         # 项目依赖与脚本
├── vite.config.ts       # Vite 配置
└── tsconfig.json        # TypeScript 配置

## 🔧 开发工具配置
* 代码检查：pnpm lint - 运行 ESLint 检查代码
* 代码格式化：pnpm format - 使用 Prettier 格式化代码
* 提交规范：提交代码时需遵循 Conventional Commits 规范，通过 cz-git 交互式生成提交信息


## 贡献

欢迎提交 Issues 或 Pull Requests 参与项目改进。
