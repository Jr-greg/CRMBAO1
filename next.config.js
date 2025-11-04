/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出 - 弹窗模式不需要动态路由
  output: 'export',
  images: {
    unoptimized: true,  // 保留此配置，因为使用外部图片源
  },
};

module.exports = nextConfig;


