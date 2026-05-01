// components/Navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart2, Globe, Settings, User } from "lucide-react";

export default function Navigation() {
    const pathname = usePathname();

    // Navigation items mapping to your core application features
    const navItems = [
        { name: "Team Dashboard", href: "/dashboard", icon: Home },
        { name: "Event Statistics", href: "/events", icon: BarChart2 },
        { name: "Global TrueRank", href: "/truerank", icon: Globe },
    ];

    const systemItems = [
        { name: "About Me", href: "/about", icon: User },
        { name: "Settings", href: "/settings", icon: Settings },
    ];

    return (
        <nav className="w-64 bg-gray-950 border-r border-gray-800 h-screen sticky top-0 flex flex-col justify-between">
            {/* Top Section: Branding and Primary Navigation */}
            <div>
                <div className="p-6 mb-4">
                    <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        MerStats <span className="text-orange-500 text-sm bg-orange-500/10 px-2 py-1 rounded">Web</span>
                    </h1>
                </div>

                <div className="px-4 space-y-1">
                    <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Main Menu
                    </p>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 ${
                                    isActive
                                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/20 font-medium"
                                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                                }`}
                            >
                                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                <span className="text-sm">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Section: System Links */}
            <div className="p-4 space-y-1">
                <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    System
                </p>
                {systemItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors ${
                                isActive
                                    ? "text-white bg-gray-800 font-medium"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                            }`}
                        >
                            <Icon size={18} />
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    );
                })}
                <div className="mt-8 px-4 pb-4">
                    <p className="text-xs text-gray-600 font-medium">MerStats Engine v1.0</p>
                </div>
            </div>
        </nav>
    );
}