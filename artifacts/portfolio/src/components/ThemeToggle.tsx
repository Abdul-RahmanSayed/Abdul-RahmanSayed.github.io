import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export function ThemeToggle({ testId }: { testId: string }) {
  const { theme, toggleTheme } = useTheme();
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  return <button type="button" onClick={toggleTheme} className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-accent text-foreground transition-colors" data-testid={testId} aria-label={label} title={label}>
    {theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
  </button>;
}
