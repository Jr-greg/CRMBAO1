"use client";

import Link from "next/link";
import { Twitter, Github, Mail } from "lucide-react";

const footerLinks = {
  product: {
    title: "产品",
    links: [
      { name: "文章中心", href: "/articles", available: false },
      { name: "新手入门", href: "/learn", available: false },
      { name: "常见问题", href: "/faq", available: false },
    ],
  },
  exchanges: {
    title: "交易所",
    links: [
      { name: "Binance 教程", href: "/binance", available: true },
      { name: "OKX 教程", href: "/okx", available: true },
    ],
  },
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Github", icon: Github, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:contact@example.com" },
];

export function Footer() {
  const handleLinkClick = (e: React.MouseEvent, link: { available: boolean }) => {
    if (!link.available) {
      e.preventDefault();
      alert("Coming Soon 🚀\n\n该功能即将上线，敬请期待！");
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* 主要内容区 */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* 品牌区 - 占2列 */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center space-x-2 mb-5">
                <img src="/logo.svg" alt="入门宝" className="h-8" />
                <span className="text-xl font-bold">入门宝</span>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-xs">
                为加密货币新手提供安全、清晰的入门指南
              </p>
              
              {/* 社交媒体 */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* 链接列 */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title} className="col-span-1">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.available ? link.href : "#"}
                        onClick={(e) => handleLinkClick(e, link)}
                        className={`text-sm text-gray-500 dark:text-gray-500 hover:text-primary transition-colors ${!link.available ? 'opacity-60' : ''}`}
                      >
                        {link.name}
                        {!link.available && (
                          <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                            Soon
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-200 dark:border-gray-800" />

        {/* 底部区域 */}
        <div className="py-8">
          <div className="space-y-6">
            {/* 免责声明 - 极低调 */}
            <div className="max-w-4xl mx-auto space-y-3">
              <p className="text-xs text-gray-400 dark:text-gray-600 leading-relaxed text-center">
                <span className="font-medium text-gray-500 dark:text-gray-500">合作关系披露：</span>
                本站与部分平台存在商业合作关系，使用推荐链接不会增加您的费用，部分用户可享专属优惠。我们致力于提供客观、准确的信息。
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600 leading-relaxed text-center">
                <span className="font-medium text-gray-500 dark:text-gray-500">风险提示：</span>
                加密资产波动较大，投资需谨慎。本网站内容仅供信息参考，不构成投资建议。请根据自身情况评估风险。
              </p>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-xs text-gray-400 dark:text-gray-600">
              <span>© {new Date().getFullYear()} 入门宝</span>
              <span className="hidden md:inline">·</span>
              <span>仅供教育与信息参考</span>
              <span className="hidden md:inline">·</span>
              <span>不构成金融建议</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

