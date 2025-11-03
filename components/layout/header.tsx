"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import * as React from "react";

const navigation = [
  { name: "首页", href: "/" },
  { name: "新手入门", href: "/learn" },
  { name: "Binance", href: "/binance" },
  { name: "OKX", href: "/okx" },
  { name: "文章", href: "/articles" },
  { name: "FAQ", href: "/faq" },
  { name: "合规披露", href: "/disclosure" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-light dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
              <span className="text-xl font-bold text-white">入</span>
            </div>
            <span className="text-xl font-bold">入门宝</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-primary/10",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Placeholder */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="搜索"
              className="hidden sm:inline-flex"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Switcher Placeholder */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
            >
              中文
            </Button>

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
                href={item.href}
                className={cn(
                  "block px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 dark:text-gray-300 hover:bg-primary/10"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}


