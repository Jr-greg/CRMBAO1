# 部署指南

## 🎯 配置变更说明

### 修改内容
已将项目从**静态导出模式**改为**标准 Next.js 应用模式**

**修改文件**：`next.config.js`
- ❌ 删除：`output: 'export'`
- ✅ 保留：`images: { unoptimized: true }`

### 为什么要改？

| 静态导出模式 | 标准 Next.js 模式 |
|-------------|------------------|
| ❌ 构建时生成所有页面 | ✅ 运行时动态渲染 |
| ❌ 不支持运行时 API 调用 | ✅ 支持实时 API 调用 |
| ❌ 内容更新需重新构建 | ✅ 实时显示最新内容 |
| ❌ 需要预先知道所有文章 ID | ✅ 支持任意文章 ID |
| ✅ 可部署到静态托管 | ⚠️ 需要 Node.js 服务器 |

**你的需求**：实时资讯网站，内容频繁更新 → **标准模式最合适** ✅

---

## 🚀 推荐部署方案

### 方案 1：Vercel（强烈推荐）⭐⭐⭐⭐⭐

**优点**：
- ✅ 免费额度充足
- ✅ 自动构建和部署
- ✅ 全球 CDN 加速
- ✅ 原生支持 Next.js
- ✅ 零配置，开箱即用
- ✅ 支持自定义域名

**步骤**：
1. 访问 https://vercel.com
2. 用 GitHub 账号登录
3. 导入你的项目仓库
4. 点击 Deploy
5. 完成！自动获得一个 `.vercel.app` 域名

**成本**：免费（个人项目足够用）

**部署时间**：首次 2-3 分钟，后续提交自动部署 30-60 秒

---

### 方案 2：Netlify ⭐⭐⭐⭐

**优点**：
- ✅ 免费额度充足
- ✅ 支持 Next.js
- ✅ 自动部署
- ✅ 全球 CDN

**步骤**：
1. 访问 https://netlify.com
2. 连接 GitHub 仓库
3. 构建命令：`npm run build`
4. 发布目录：`.next`
5. 点击 Deploy

**注意**：需要安装 `@netlify/plugin-nextjs` 插件

---

### 方案 3：自己的服务器 ⭐⭐⭐

**适合**：有自己的 VPS 或云服务器

**要求**：
- Node.js 18+ 
- PM2 或 Docker（进程管理）

**步骤**：
```bash
# 1. 克隆代码
git clone <your-repo>
cd 入门宝原型_简化版1

# 2. 安装依赖
npm install

# 3. 构建项目
npm run build

# 4. 启动服务（使用 PM2）
pm2 start npm --name "rumenanbao" -- start

# 5. 配置 Nginx 反向代理（可选）
# 将域名指向 localhost:3000
```

---

## 📦 构建和部署命令

### 开发环境
```bash
npm run dev
# 访问 http://localhost:3000
```

### 生产构建
```bash
npm run build
npm start
# 访问 http://localhost:3000
```

### 检查构建产物
```bash
npm run build
# 会在 .next 目录生成构建文件
```

---

## 🔧 环境变量配置（可选）

如果需要配置环境变量，在部署平台添加：

```env
# API 基础 URL（如果需要）
NEXT_PUBLIC_API_BASE_URL=https://api.shandian.io

# 其他配置...
```

---

## ⚠️ 注意事项

### 1. 不能再用纯静态托管了
以下平台**不再支持**：
- ❌ GitHub Pages
- ❌ Cloudflare Pages（静态模式）
- ❌ AWS S3 静态网站

以下平台**仍然支持**：
- ✅ Vercel
- ✅ Netlify
- ✅ Railway
- ✅ Render
- ✅ 自己的服务器

### 2. 端口配置
默认端口是 3000，如果需要修改：
```bash
PORT=8080 npm start
```

### 3. 性能优化
- 生产环境会自动优化
- 图片使用外部 CDN，已配置 `unoptimized: true`
- API 调用可以考虑添加缓存

---

## 🎯 推荐配置

### 适合你的最佳方案：Vercel

**为什么？**
1. ✅ 完全免费（个人项目）
2. ✅ 部署最简单（连接 GitHub 即可）
3. ✅ 性能最好（全球 CDN + 自动优化）
4. ✅ 维护最少（自动更新，零配置）
5. ✅ 原生支持 Next.js（Vercel 就是 Next.js 的开发公司）

**部署流程**：
1. 推送代码到 GitHub
2. 访问 https://vercel.com/new
3. 导入仓库
4. 点击 Deploy
5. 获得线上地址，如：`https://rumenanbao.vercel.app`

**自动更新**：
- 每次 git push 到 main 分支
- Vercel 自动检测 → 自动构建 → 自动部署
- 1-2 分钟完成

---

## ✅ 验证部署成功

访问以下页面确认一切正常：

1. **首页**：`https://your-domain.com`
   - ✅ 精选文章显示
   - ✅ 图片加载正常

2. **文章列表**：`https://your-domain.com/articles`
   - ✅ 文章列表加载
   - ✅ 搜索功能正常
   - ✅ 无限滚动工作

3. **文章详情**：`https://your-domain.com/articles/107152`
   - ✅ 详情页显示
   - ✅ "阅读原文"按钮可用
   - ✅ 相关文章推荐显示

4. **其他页面**：
   - `/binance` - Binance 教程
   - `/okx` - OKX 教程
   - `/learn` - 新手入门（Coming Soon）
   - `/faq` - FAQ（Coming Soon）

---

## 📊 性能监控

部署后建议：

1. **Google Analytics**（可选）
   - 追踪访问量

2. **Vercel Analytics**（内置）
   - 自动提供性能分析

3. **监控 API 调用**
   - 确保 `api.shandian.io` 稳定可访问

---

## 🆘 常见问题

### Q: 部署后文章不显示？
**A**: 检查 API 是否可访问，查看浏览器控制台错误

### Q: 详情页 404？
**A**: 确认动态路由配置正确，重新构建部署

### Q: 构建失败？
**A**: 检查 Node.js 版本（需要 18+），查看构建日志

### Q: 如何更新内容？
**A**: 不需要重新部署！API 数据会自动更新

### Q: 如何绑定自定义域名？
**A**: 在 Vercel 项目设置中添加域名，配置 DNS

---

## 🎉 总结

**当前配置**：标准 Next.js 应用，支持动态内容和实时 API

**推荐部署**：Vercel（免费、简单、快速）

**下一步**：
1. 推送代码到 GitHub
2. 在 Vercel 部署
3. 获得线上地址
4. 开始使用！

有任何问题随时反馈！

