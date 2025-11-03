"use client";

import { Globe, Network, Settings } from "lucide-react";

export function DisclosureSection() {
  const tips = [
    {
      icon: Globe,
      title: "网络连通性",
      description: "部分平台可能需要优化网络环境以确保访问稳定",
    },
    {
      icon: Network,
      title: "DNS 配置",
      description: "建议使用公共 DNS 服务提升连接质量",
    },
    {
      icon: Settings,
      title: "技术支持",
      description: "遇到连接问题可参考平台官方技术文档",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 标题 - 低调 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              网络访问说明
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              技术参考 · 仅供学习交流 · 请遵守当地法律法规
            </p>
          </div>

          {/* 三个提示卡片 - 横排 */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white/50 dark:bg-gray-900/30 rounded-xl p-5 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                    <tip.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 底部免责声明 - 极低调 */}
          <div className="text-center">
            <p className="text-xs text-gray-400 dark:text-gray-600 leading-relaxed max-w-2xl mx-auto">
              以上内容仅用于网络连通性排查与通用技术设置说明，不构成任何建议。
              使用任何服务前请仔细阅读相关平台的服务条款，并确保遵守所在地区的法律法规。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


