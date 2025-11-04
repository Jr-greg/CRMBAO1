"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import * as React from "react";

const navigation = [
  { name: "首页", href: "/", available: true },
  { name: "Binance", href: "/binance", available: true },
  { name: "OKX", href: "/okx", available: true },
  { name: "文章", href: "/articles", available: false },
  { name: "新手入门", href: "/learn", available: false },
  { name: "FAQ", href: "/faq", available: false },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent, item: typeof navigation[0]) => {
    if (!item.available) {
      e.preventDefault();
      alert("Coming Soon 🚀\n\n该功能即将上线，敬请期待！");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-light dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="入门宝" className="h-8" />
            <span className="text-xl font-bold">入门宝</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.available ? item.href : "#"}
                onClick={(e) => handleNavClick(e, item)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-primary/10 relative",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 dark:text-gray-300",
                  !item.available && "opacity-60"
                )}
              >
                {item.name}
                {!item.available && (
                  <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    Soon
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="切换主题"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="菜单"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-1 border-t border-border-light dark:border-border-dark">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.available ? item.href : "#"}
                onClick={(e) => {
                  handleNavClick(e, item);
                  if (item.available) setMobileMenuOpen(false);
                }}
                className={cn(
                  "block px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 dark:text-gray-300 hover:bg-primary/10",
                  !item.available && "opacity-60"
                )}
              >
                {item.name}
                {!item.available && (
                  <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    Soon
                  </span>
                )}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}


